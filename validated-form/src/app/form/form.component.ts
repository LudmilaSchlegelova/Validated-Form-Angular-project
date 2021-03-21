import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  isValidName = true;
  isValidPsswd = true;
  isValidNewPsswd = true;
  resetPassword = false;
  isLoading = false;
  isLogIn = false;
  isChangedPassword = false;

  dbUserName: string = 'Feri';
  dbUserPsswd: string = '98765';
  newPsswd = '';

  credentialValidation(
    name: HTMLInputElement,
    psswd: HTMLInputElement,
    newPsswd: any
  ) {
    this.isValidName = true;
    this.isValidPsswd = true;
    this.isValidNewPsswd = true;
    this.isLoading = true;

    if (this.dbUserName.trim().toLowerCase() !== name.value) {
      console.log('Wrong name!');
      setTimeout(() => {
        this.isValidName = false;
        this.isLoading = false;
      }, 500);
    }

    if (this.dbUserPsswd !== psswd.value && !this.resetPassword) {
      console.log('Wrong psswd!');
      setTimeout(() => {
        this.isValidPsswd = false;
        this.isLoading = false;
      }, 500);
    }

    if (
      this.dbUserPsswd === newPsswd.value &&
      this.resetPassword &&
      newPsswd.value !== psswd.value
    ) {
      console.log('Wrong psswd!');
      setTimeout(() => {
        this.isValidNewPsswd = false;
        this.isLoading = false;
      }, 500);
    }

    if (
      this.dbUserName.trim().toLowerCase() === name.value &&
      this.dbUserPsswd === psswd.value &&
      !this.resetPassword
    ) {
      setTimeout(() => {
        this.isLoading = false;
        this.isLogIn = true;
      }, 500);
    }
    console.log(newPsswd, psswd.value);

    if (
      this.dbUserPsswd !== newPsswd.value &&
      this.resetPassword &&
      newPsswd.value === psswd.value
    ) {
      setTimeout(() => {
        this.isLoading = false;
        this.isChangedPassword = true;
        this.dbUserPsswd = newPsswd.value;
      }, 500);
    }
  }

  resetUser() {
    this.resetPassword = true;
    this.isValidName = true;
    this.isValidPsswd = true;
    this.isValidNewPsswd = true;
    this.isLogIn = false;
    this.isChangedPassword = false;
  }
}
