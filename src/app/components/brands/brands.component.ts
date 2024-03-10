import { Component, OnInit } from '@angular/core';
import { ProductDataService } from 'src/app/services/BlankData/product-data.service';
import { Brands } from 'src/app/services/interface/brands';
import { Brand } from 'src/app/services/interface/products';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  constructor(private _ProductDataService:ProductDataService){}
    imageBrandSrc:string=''
    nameBrand:string=''
  // brandProducts:Brands = {} as Brands ;
  brandProducts:any ;
  ngOnInit(): void {
      this._ProductDataService.getAllBrands().subscribe({
        next:({data})=>{
          console.log(data);
          this.brandProducts = data

        },error:(err)=>{
          console.log(err);

        }
      })
  }

  getTargetBlank(img:string,name:string  ):void{
    console.log(name);
    console.log(img);
    this.imageBrandSrc = img
    this.nameBrand = name
  }
}
