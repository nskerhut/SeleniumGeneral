import { Project } from './project';

export class ChargeCode {
   chargeCodeID?:number;
   chargeCode?:string;
   chargeCodeDescription?: string;
   chargeCodeStartDate? : any;
   chargeCodeEndDate?: any;

  
    constructor(
    chargeCodeID?:number,
   chargeCode?:string,
   chargeCodeDescription?: string,
   chargeCodeStartDate?: any,
   chargeCodeEndDate?: any, ) {

       this.chargeCodeID = chargeCodeID;
       this.chargeCode = chargeCode;
       this.chargeCodeDescription = chargeCodeDescription
       this.chargeCodeStartDate = chargeCodeStartDate;
       this.chargeCodeEndDate = chargeCodeEndDate; }}