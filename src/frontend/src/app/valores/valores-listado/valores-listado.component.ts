import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-valores-listado',
  templateUrl: './valores-listado.component.html',
  styleUrls: ['./valores-listado.component.css']
})
export class ValoresListadoComponent implements OnInit {

  public values: Observable<string[]>;
  public errorText: string;
  public errores: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.values = this.http.get<string[]>('/api/values');

    this.http.post('/api/values', 'test', {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(
      r => console.log('result ', r),
      err => {
        this.errorText = err.error.Message;
        this.errores = err.error.Errors;
      }
    );
  }

}
