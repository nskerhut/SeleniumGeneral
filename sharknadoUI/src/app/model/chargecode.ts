import { Project } from './project';

export class ChargeCode {
   chargeCodeID?:number;
   chargeCode?:string;
   chargeCodeDescr?: string;
   chargeCodeStartDate? : any;
   chargeCodeEndDate?: any;

  
    constructor(
    chargeCodeID?:number,
   chargeCode?:string,
   chargeCodeDescr?: string,
   chargeCodeStartDate?: any,
   chargeCodeEndDate?: any, ) {

       this.chargeCodeID = chargeCodeID;
       this.chargeCode = chargeCode;
       this.chargeCodeDescr = chargeCodeDescr
       this.chargeCodeStartDate = chargeCodeStartDate;
       this.chargeCodeEndDate = chargeCodeEndDate; }}