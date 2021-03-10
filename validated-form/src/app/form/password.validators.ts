// import { AbstractControl, ValidationErrors } from '@angular/forms';

// export class PasswordValidator {
//   static oldPsswd(control: AbstractControl): Promise<ValidationErrors | null> {
//     console.log(control.value);

//     let password = '98765';
//     const result = new Promise((resolve) => {
//       setTimeout(() => {
//         if (control.value !== password) {
//           resolve({ oldPsswd: true });
//         } else {
//           password = control.value;
//           resolve(null);
//         }
//       }, 2000);
//     });
//     return result;
//   }
// }
