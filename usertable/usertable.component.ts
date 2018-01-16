import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../usertable/user';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {
  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUser();
  }

  disconnect() {

  }

}
