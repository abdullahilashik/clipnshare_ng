// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'clipnshare_ng';
// }

import { Component, OnChanges, DoCheck, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges, DoCheck{
  title = 'Angular 14';
  imageUrl = 'https://picsum.photos/id/1/200/200';
  name:any = 'n/a';

  getName(){
    return this.title;
  }

  getPhotos(){
    var imageUrls = [];

    for(let i=0;i<50;i++){
      imageUrls.push('https://picsum.photos/id/'+i+1+'/300/300/')
    }
    return imageUrls;
  }

  changeName(e: KeyboardEvent){
    console.log((e.target as HTMLInputElement).value)
    this.imageUrl = (e.target as HTMLInputElement).value;
  }

  logImage(value: string){
    console.log(value);
  }

  constructor(){
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('on init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ng on change');
  }

  ngDoCheck(): void {
    console.log('ng do check')
  }
}
