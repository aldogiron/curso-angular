import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../../../guards/auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formValid: boolean;
  public form: FormGroup;

  constructor(
    fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private auth: AuthGuard
  ) {
    this.form = fb.group({
      login: [null, Validators.required],
      clave: [null, Validators.required]
    });
  }

  ngOnInit() {
    console.log(this.form);
    this.form.valueChanges.subscribe(() => {
      this.formValid = this.form.valid
      console.log(this.formValid);
    });

  }

  login() {
    const url = '/api/autenticacion';
    const data = this.form.value;
    this.http.post(url, data).subscribe(result => {
      sessionStorage.setItem('usuario', JSON.stringify(result));

      let navigateUrl = '/dashboard';
      if (this.auth.url) {
        navigateUrl = this.auth.url;
      }

      this.router.navigate([navigateUrl]);
    });
  }

}
