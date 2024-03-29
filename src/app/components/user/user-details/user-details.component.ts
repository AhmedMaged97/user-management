import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userDetailsModel } from 'src/app/models/userDetailsModel';
import { UserDataService } from 'src/app/services/user-data.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{

  userId:number = 0;
  userDetailsData:userDetailsModel= <userDetailsModel>{};

  spinner:boolean = true;

  constructor(private _UserDataService:UserDataService, private _route: ActivatedRoute,
     private _Router:Router, private location: Location){}
  ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap) => {
      this.userId = parseInt(paramMap.get('id') ?? '');
      this._UserDataService.getUsersDetailsData(this.userId).subscribe({
        next:(data)=>{
          this.userDetailsData= data;
          setTimeout(()=>{
            this.spinner = false;
          },100)
          
        },
        error:(err)=>{
          console.log(err.status);
          alert('No Data');
          this._Router.navigate(['/users']);
        }
      })
      if (isNaN(this.userId)) {
        alert('Id Should Be Valid Number');
        this._Router.navigate(['/users']);
      }
    });
  }
  getBack(){
    this.location.back();
  }

}
