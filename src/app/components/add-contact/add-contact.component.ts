import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IBackgroundStyle } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  constructor(private _cntSer:ContactService, private route:Router) { }

  public src: string | ArrayBuffer | null = ''
  public message: string = '';
  backGroundStyle:IBackgroundStyle = {
    backgroundImage: ''
  }
 
  printPhoto(files:any) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    else  this.message = ''
 
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.src = reader.result; 
      this.backGroundStyle.backgroundImage = `url(${this.src})` 
    }
  }


  saveContact(addCnt:any) {
    addCnt.image = this.src;
    this._cntSer.postContact(addCnt).subscribe(res=>{
      this.src = '';
      this.route.navigate([''])
    })
  }

}
