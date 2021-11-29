import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('John'),
    lastName: new FormControl('Doe'),
    address: new FormGroup({
      street: new FormControl('1234 Powell St'),
      city: new FormControl('San Francisco'),
      state: new FormControl('CA'),
      zip: new FormControl('94110'),
    }),
  });

  populate() {
    this.profileForm.controls.firstName.setValue('Igor');
  }
}
