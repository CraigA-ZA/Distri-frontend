import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateShopService } from './create-shop.service';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss']
})
export class CreateShopComponent implements OnInit {
  createShopForm: FormGroup;

  constructor(public fb: FormBuilder, private createShopService: CreateShopService) {
    this.createShopForm = this.fb.group({
      storeName: [''],
      description: [''],
      location: [''],
      instagram: [''],
      facebook: [''],
    })
    

  }

  ngOnInit(): void {
  
  }

  submit() {
    if(this.createShopForm.valid) {
        this.createShopService.createShop(this.createShopForm.getRawValue()).subscribe(res => {

        })
    } else {

    }
  }

}
