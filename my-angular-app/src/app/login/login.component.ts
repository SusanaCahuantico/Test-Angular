import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router) { 
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit(): void {
    const { username, password } = this.loginForm.value;

    if (this.loginForm.valid) {
      if (username === 'test01' && password === 'test01') {
        console.log('TEST');
        this.router.navigate(['/tasks']);
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } else {
      //alert('Por favor, complete los campos obligatorios del formulario.');
      this.router.navigate(['/tasks']);
    }
  
  }
}
