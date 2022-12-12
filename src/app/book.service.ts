import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http:HttpClient
  ) { }

  getList(list:any){
    return this.http.get("https://jsonplaceholder.typicode.com/posts",list)
  }

  hidePost(postid:string){
    return this.http.get("https://jsonplaceholder.typicode.com/comments?postId="+postid)
  }
}
