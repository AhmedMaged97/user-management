import { Component, Input } from '@angular/core';
import { UserList } from 'src/app/models/useListModel';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input('user-data') cardData:UserList = <UserList>{};

}
