import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users',
    loadChildren: () => import('./components/user-list/user-list.module').then(m => m.UserListModule),
    component:  UserListComponent, title: "User List"
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./components/user-details/user-details.module').then(m => m.UserDetailsModule),
    component: UserDetailsComponent, title:"User Details"
  },
  { path: '**', redirectTo: '/users' } // Redirect to user list if route not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
