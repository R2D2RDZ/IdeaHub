import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { environment } from 'src/environments/environment';

export interface IUser {
  email: string;
  password: string;
  code: string;
  name: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class CognitoService {
  constructor() {
    Amplify.configure({
      Auth: environment.cognito
    });
  }

  async signUp(data:IUser) {
    let username = data.email
    let password = data.password

    try {
      const { user } = await Auth.signUp({
        username,
        password
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  }

  async confirmSignUp(user:IUser) {
    try {
      await Auth.confirmSignUp(user.email, user.code);
      console.log('confirmed');
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }

  async signIn(data:IUser) {
    try {
      const user = await Auth.signIn(data.email, data.password);
      console.log('sign in');
      //////////////////////////////////////////////////////////
      console.log(user.username)
    } catch (error) {
      console.log('error signing in', error);
    }
  }
  
  async getCurrentUser() {
    Auth.currentAuthenticatedUser().then(
      //////////////////////////////////////////////////////////
      (data) => console.log(data.username)
    ).catch(
      (err) => console.log(err)
    );
  }

  async signOut() {
    try {
      await Auth.signOut();
      console.log('sign out')
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  async deleteUser() {
    try {
      const result = await Auth.deleteUser();
      console.log(result);
    } catch (error) {
      console.log('Error deleting user', error);
    }
  }
}
