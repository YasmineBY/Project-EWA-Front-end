import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserService {
   createUser(user: User) {
    // console.log('User Name: ' + user.username);
    console.log('Name: ' + user.name);
	console.log('Password: ' + user.password);
    console.log('Email: ' + user.email);
    console.log('Role: ' + user.groupname);
   }
}