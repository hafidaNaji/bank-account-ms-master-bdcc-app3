import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: false,
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customers : any
  constructor(private http :HttpClient) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8888/CUSTOMER-SERVICE/customers")
      .subscribe({
        next:data=>{
          console.log("Données reçues :", data);
          this.customers=data;
        },
        error:err => {
          console.log(err)
        }
      })
  }
}
