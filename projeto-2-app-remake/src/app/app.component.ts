import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private fb: FormBuilder, ){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', Validators.required],
      lido: [],
      recebido: []
    });
  }
  title = 'projeto-2-app-remake';
  loginForm: FormGroup

  onSubmit(){

  }
}
