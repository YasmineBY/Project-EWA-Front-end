import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-food-and-drink',
  templateUrl: './food-and-drink.component.html',
  styleUrls: ['./food-and-drink.component.css']
})
export class FoodAndDrinkComponent implements OnInit {
  response: any;
  productempty = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  productForm = this.fb.group({
    productname: [''],
  });


  ngOnInit() {
  }
  //Function for deleting a product from the database by giving the name.
  deleteProduct() {
    if (this.productForm.value.productname == "" || this.productForm.value.productname == null) {
      this.productempty = true;
      console.log("product is required");
      return;
    }
    console.log(this.productForm.value.productname + " has been deleted from the database");
    this.http.delete('http://localhost:8080/AquadineAPI-1.0/rest/product/delete/' + this.productForm.value.productname)
      .subscribe();
    this.productForm.reset();

  }

  //Function for adding a product to the database by giving the name.
  addProduct() {
    if (this.productForm.value.productname == "" || this.productForm.value.productname == null) {
      this.productempty = true;
      console.log("product is required");
      return;
    }
    console.log(this.productForm.value.productname + " has been added to the database");
    this.http.post('http://localhost:8080/AquadineAPI-1.0/rest/product/post', this.productForm.value)
      .subscribe();
    this.productForm.reset();

  }
}
