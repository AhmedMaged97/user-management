import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  inputValue:any;
  constructor(private _UserDataService:UserDataService, private _Router:Router){
    this._UserDataService.userIdSearch.subscribe((num)=>{
      if (num == 0 ) {
        this.inputValue = ""; 
      }
    })
  }

  searchUserById(idValue:string){    
    let id = Number(idValue);
    if (isNaN(id)) {
      alert("should search by Id");
      this.inputValue = "";
      this._UserDataService.changeNumber(0);

    }  else {
      this._UserDataService.changeNumber(id);
      this._Router.navigate(['/users'])
    }

  }
}
