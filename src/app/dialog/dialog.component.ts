import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  freshnessList = ["Brand new", "Second Hand", "Refurbished"]
  protectForm !: FormGroup
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.protectForm = this.formBuilder.group({
      productName :['', Validators.required],
      category :['', Validators.required],
      freshness :['', Validators.required],
      price :['', Validators.required],
      comment :['', Validators.required],
      date :['', Validators.required],
     
    })
  }
  addProduct(){
    console.log(this.protectForm.value)
  }

}
