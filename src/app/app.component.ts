// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'clipnshare_ng';
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular 14';
  imageUrl = 'https://picsum.photos/id/1/200/200';
  name = 'n/a';

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
    console.log(e);
    // this.name = e.target.value;
  }
}
