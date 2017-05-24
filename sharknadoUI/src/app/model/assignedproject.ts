import { Project } from './project';
import { Input } from '@angular/core';

export class AssignedProject extends Project {
    private allocationHrs: number;

    @Input()
    set AllocationHrs(hrs:number ){
        this.allocationHrs = hrs;
    }
    get AllocationHrs():number {
        return this.allocationHrs;
    }
}