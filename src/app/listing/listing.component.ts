import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
    comments:any[]=[];
    posts:any[]=[];//for api calling
    // {[key: string]: any}
    showPost:boolean=true;//variable declaration

    constructor(private book: BookService) {
    let list = {};

    this.book.getList(list).subscribe(
      (res:any) => {
        this.posts = res;
        this.getComments();
        console.log(res);
      },
      (err:any) => {
        console.log(err);
      }
    );
  }

  getComments() {
    if (this.showPost) {
        this.showPost = false;
    }
    for (let i = 0; i < this.posts.length; i++) {
        let postid:any= this.posts[i].id;
 
        this.book.hidePost(postid).subscribe(
          (res: any) => {
            this.posts[i].comments = res;
            this.posts[i].comments
            //this.comments = res;
            console.log(this.posts);
          },
          (err: any) => {
            console.log(err);
          }
        );
}
}


// backBtn(){
//     this.showPost=false{
//         this.showPost=true
//     };

// }

  ngOnInit(): void {}

}



