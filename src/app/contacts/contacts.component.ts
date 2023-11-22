import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  nouvNom:string="";
  nouvTel:string="";

  listContacts: Contact[]=[];

  nomRech:string="";
  telRech:string|null =null;
  public addContact():void {
    this.listContacts.push(new Contact(this.nouvNom,this.nouvTel));
    this.nouvNom="";
    this.nouvTel="";
  }
  public recherche():void {
    this.telRech=null;
    for(let contact of this.listContacts){
      if(contact.nom===this.nomRech){
        this.telRech=contact.tel;
        break;
      }
    }
  }
}
class Contact{
  constructor(public nom:string,public tel:string) {
  }
}

