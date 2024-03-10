import { Component, Input } from '@angular/core';
import { ProductDataService } from 'src/app/services/BlankData/product-data.service';

@Component({
  selector: 'app-subcategories',
  templateUrl: './subcategories.component.html',
  styleUrls: ['./subcategories.component.css']
})
export class SubcategoriesComponent  {
  constructor(private _ProductDataService:ProductDataService){}
@Input() data:any;

passDataCategories:any = []

}
