import { NgClass, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  login : boolean = false
  registerForm!: FormGroup;
  loginForm!: FormGroup;
  submitted = false;
  submittedLogin = false;


  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get fRegister(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }
  get fLogin(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onSubmitRegister() {
    // Ici, vous pouvez gérer la soumission de votre formulaire
    console.log(this.registerForm.value);
    this.submitted = true
    if(this.submitted){
      return
      // this.httpClient.post<any>(this.urlCreate, this.registerForm.value).subscribe({
      //   next: data => {
      //     console.log('Réponse de la requête POST : ', data);
      //     // Traitez la réponse de la requête ici
      //   },
      //   error: error => {
      //     console.error('Erreur lors de la requête POST : ', error);
      //     // Traitez l'erreur ici
      //   }
      // });
    }
    console.log(this.registerForm.value);
  }

  onSubmitLogin() {
    
    this.submittedLogin = true
    if(this.submittedLogin){
      return
    }
    // Ici, vous pouvez gérer la soumission de votre formulaire
    console.log(this.registerForm.value);
  }

  goToRegister() : void {
    this.login = false
  }

  goToLogin() : void {
    this.login = true
  }
}
