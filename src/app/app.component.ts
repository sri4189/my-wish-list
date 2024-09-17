import { Component } from '@angular/core';
import { WishItem } from 'src/shared/models/wishItems';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my wish list';
  items: WishItem[] =  [
    new WishItem("Learn Angular"),
    new WishItem("Get Coffee", true),
    new WishItem("Find grass which cuts itself")
  ]
  newWishText: any = '';
  listFilters: string ='0';
  visibleItems: WishItem[] = this.items;

  toggleItem(item : WishItem)
  {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
  addNewWish()
  {
  this.items.push( new WishItem(this.newWishText));
  this.newWishText = '';
  }
  filterChange(value:any)
  {
    debugger;
   if(value ==0)
   {
    this.visibleItems = this.items;
   }
   else if(value ==1){
    this.visibleItems = this.items.filter(item => !item.isComplete);
   }
   else {
    this.visibleItems = this.items.filter(item => item.isComplete);
   }
  }
}
