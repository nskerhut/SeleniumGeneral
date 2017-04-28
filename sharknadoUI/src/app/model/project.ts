import { Component, OnInit } from '@angular/core';

export class Project {
    projectId: number;
    verticalId: string;
    projectCode: string;
    agency: string;
    agencyAbbr: string;
    Project_Name: string;
    projectAbbr: string;
    projectDescription: string;
    projectStatus: string;
    positionDescription: string;


constructor(
        projectId: number,
        Project_Name: string
        ) {
    this.projectId = projectId;
    this.Project_Name = Project_Name;
    }

}