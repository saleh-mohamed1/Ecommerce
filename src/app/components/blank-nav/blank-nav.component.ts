import { BlankLayoutComponent } from './../../layOutComponents/blank-layout/blank-layout.component';


import { Component, HostListener, OnInit , ElementRef,
  ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/BlankData/cart.service';

@Component({
  selector: 'app-blank-nav',
  templateUrl: './blank-nav.component.html',
  styleUrls: ['./blank-nav.component.css']
})
export class BlankNavComponent implements OnInit {
constructor(private _Router:Router , private _CartService:CartService){}
  logOutUser():void{
    localStorage.removeItem('unscrewToken');
    this._Router.navigate(['/login'])
  }
numOfCart:any;
  ngOnInit(): void {
    this._CartService.getCardProduct().subscribe({
      next:(response)=>{
        console.log(response);



      },error:(err)=>{
       console.log(err);

      }
    })


    this._CartService.behaviorsNumbers.subscribe({
      next:(data)=>{
        this.numOfCart = data;
        console.log( 'dataauth',data);
        console.log('numOfCart',this.numOfCart);

      }
    })
    console.log(this.numOfCart);
  }

  isScroll:boolean= false;

  @HostListener('window:scroll')
  windowScroll():void{
    this.isScroll = scrollY>300
  }
  @ViewChild('navbarSupportedContent')
  collapsibleNav!: ElementRef;

  closeToggler(): void {
    const navbarToggler = this.collapsibleNav.nativeElement;
    if (navbarToggler.classList.contains('show')) {
      navbarToggler.classList.remove('show');
    }
  }

}
