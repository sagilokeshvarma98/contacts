import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IContact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-display-contacts',
  templateUrl: './display-contacts.component.html',
  styleUrls: ['./display-contacts.component.css']
})
export class DisplayContactsComponent implements OnInit {

  constructor(private _CS:ContactService, private route:Router) { }

  public contacts:IContact[] = [];
  public editObj:IContact = {
    id: 0 ,
    firstname: "",
    lastname: "",
    image: "",
    text: "",
    email: ""
  }
  
  public searchKeyWord:string = ""

  ngOnInit(): void {
    this.getContacts();
  }
  
  getContacts() {
    this._CS.getContacts().subscribe((res:any)=>{
      this.contacts = res
      console.log(this.contacts);
    })  
  }

  updateContact(updObj:any){
    updObj.id = this.editObj.id;
    updObj.image = this.editObj.image;
    this._CS.putContact(updObj).subscribe(()=>this.getContacts())
  }

  deleteContact(id:number) {
    this._CS.deleteContact(id).subscribe(()=>this.getContacts())
  }

  searchContact(key:string) {
   this.contacts.filter((contact:any)=>{
      if(contact.firstname.toLowerCase().match(key)) {
          return contact
      }
    })
  }

}
