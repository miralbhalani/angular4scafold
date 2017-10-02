import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  _pageOptions : any

  from : number
  to : number
  total : number
  totalPages : number[]
  page : number
  tPages : number

  @Input() set pageOptions(pageOptions){

    if(pageOptions){

      let pageInBox = 8

      this._pageOptions = pageOptions
      this.from = (pageOptions.pagesize*(pageOptions.page-1)) + 1
      this.to = this.from+(pageOptions.pagesize-1);
      this.total = pageOptions.count

      this.page = pageOptions.page;

      this.tPages = Math.ceil(pageOptions.count / pageOptions.pagesize);
      let fPage = 1;
      let lPage = this.tPages;
      if(this.tPages>pageInBox){
        if(this.page>(pageInBox-2)){
          let initSub = (pageInBox-2);
          if(this.page==this.tPages){
            initSub = (pageInBox-1)
          }
          fPage = (this.page - initSub)<=0?1:(this.page - initSub);
          lPage = fPage + 7;
        }
        else{
          lPage = pageInBox
        }
      }
      // debugger
      this.totalPages = [];
      for(var i=fPage;i<=lPage;i++){
        this.totalPages.push(i);  
      }
      // debugger
      // this.totalPages = Array(
      //   Math.ceil(pageOptions.count / pageOptions.pagesize)
      // ).fill(1).map((x,i)=>i+1)
    }

  }


  @Output() pageChange = new EventEmitter<number>();


  pChange(cPage){
    this.pageChange.emit(+cPage)
  }
  next(){
    if(this.tPages && this.page && this.page<this.tPages){
      this.page++;
      this.pageChange.emit(this.page)
    }
  }
  previous(){
    if(this.page && this.page>1){
      this.page--;
      this.pageChange.emit(this.page)
    }
  }

  constructor() { }

  ngOnInit() {
    // this.pageOptions
  }

  previousDesable(){
     if(this.page && this.page<=1){
        return true;
     }
     return false
  }
  nextDesable(){
     if( this.tPages && this.page && this.page>=this.tPages){
        return true;
     }
     return false
  }
  getNextPage(){
    if(this.tPages && this.page && this.page<this.tPages){
      return +this.page+1
    }
  }
  getPreviousPage(){
    if(this.page && this.page>1){
      return +this.page-1
    }
  }

}
