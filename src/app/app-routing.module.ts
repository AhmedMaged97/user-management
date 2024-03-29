import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserDetailsComponent } from './components/user/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule),
    component: UserListComponent , title: "User List"
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule),
    component: UserDetailsComponent, title:"User Details"
  },
  { path: '**', redirectTo: '/users' } // Redirect to user list if route not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
