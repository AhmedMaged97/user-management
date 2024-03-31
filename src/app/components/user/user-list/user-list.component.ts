import { Component, OnInit } from '@angular/core';
import { UserListModel, UserList } from 'src/app/models/useListModel';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  totalPages:number = 0 ;
  currentPage:number = 0;
  usersListData:UserListModel = <UserListModel>{}
  userList : UserList [] = [];
  userSerchById : number = 0;

  spinner:boolean = true;
  constructor(private _UserDataService:UserDataService){
    
  }

  ngOnInit(): void {

    this._UserDataService.userIdSearch.subscribe((idNumber)=>{
      this.userSerchById = idNumber;
      (idNumber ==0 )?this.getUsersListByPage(1):this.getUserCardById(idNumber);
    })
  }

  getUsersListByPage(pageNum:number){
    this.spinner =true;
    this._UserDataService.getUsersListData(pageNum).subscribe({
      next:(data)=>{
        this.usersListData = data;
        this.totalPages = this.usersListData.total_pages;
        this.currentPage = this.usersListData.page;
        this.userList = this.usersListData.data;
        setTimeout(()=>{
          this.spinner = false;
        },100)
        

      },
      error:(err)=>{
        this.spinner = true;
        console.log(err);
        
      }
    })
  };

  getUserCardById(id:number){
    this.spinner = true;
    this.userList = [];
    this._UserDataService.getUsersDetailsData(id).subscribe({
      next:(data)=>{
        this.userList.push(data.data);
        setTimeout(()=>{
          this.spinner = false;
        },100)
      },
      error:(err)=>{
        console.log(err);
        this.spinner = true;
        alert("No Data By This Id");
        this._UserDataService.changeNumber(0);
        
      }
    })

  }
  
  generateNumberArray(limit: number): number[] {
    return Array.from({ length: limit }, (_, index) => index + 1);
  }
}
