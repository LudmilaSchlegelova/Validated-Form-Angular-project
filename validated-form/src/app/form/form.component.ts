import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  isValidName = true;
  isValidPsswd = true;

  userName: string = 'Feri';
  userPsswd: string = '98765';

  newName: string = '';
  newPsswd: string = '';

  @Output('name') name = new EventEmitter<string>();
  @Output('psswd') psswd = new EventEmitter<string>();

  nameValidation(value: string) {
    if (this.userName.trim().toLowerCase() !== value) {
      this.isValidName = false;
      console.log('Wrong name!');
      setTimeout(() => {
        this.isValidName = true;
      }, 3000);
    }
    console.log(this.userName);
  }

  psswdValidation(value: string) {
    if (this.userPsswd !== value) {
      this.isValidPsswd = false;
      console.log('Wrong psswd!');
      setTimeout(() => {
        this.isValidPsswd = true;
      }, 3000);
    }
    console.log(this.userPsswd);
  }

  resetUserName() {
    this.name.emit(this.newName);
    this.userName = this.newName;
    // console.log('reset name: ', this.newName);
    console.log(this.userName);
  }

  resetPassword() {
    this.psswd.emit(this.newPsswd);
    this.userPsswd = this.newPsswd;
    // console.log('reset password: ', this.newPsswd);
    console.log(this.userPsswd);
  }
}
