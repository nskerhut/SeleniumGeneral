import { Project } from './project';

export class Contact {
   contactID?:number;
   contactFirstName?:string;
   contactLastName?: string;
   contactPosition? : any;
   

  
    constructor(
       contactID?:number,
   contactFirstName?:string,
   contactLastName?: string,
   contactPosition? : any,
   ) {

       this.contactID = contactID;
       this.contactFirstName = contactFirstName;
       this.contactLastName = contactLastName;
       this.contactPosition = contactPosition;
        }}