import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
  CommonModule,
  FormsModule,
  RouterModule
  ],
})
export class UserModule { }
