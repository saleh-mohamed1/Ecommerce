import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductDataService } from 'src/app/services/BlankData/product-data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
constructor(private _ProductDataService:ProductDataService,
            private _ToastrService:ToastrService
  ){}
currentPass:string='';
stringMainName:string=''
specificSubCategories:boolean = false;
categoriesData:any = []
categoriesSpecificData:any = []
ngOnInit(): void {
    this._ProductDataService.categoriesMain().subscribe({
      next:(response)=>{
        // console.log(response);
        this.categoriesData = response.data
      }
    })
}
handleId(id:string , name:string):void{
console.log(id);
this.specificSubCategories = true;
this.currentPass = id;
this.stringMainName = name;
console.log(this.stringMainName);

  this._ProductDataService.getAllSubCategories(id).subscribe({
    next:(response)=>{
      console.log(response);
      if (response.results > 0 ) {
        this.categoriesSpecificData = response.data
        console.log(this.categoriesSpecificData)
      }else{
        this.specificSubCategories = false;
        this._ToastrService.info(`there is no categories ${name}`)
      }



  }
  })

}
}
