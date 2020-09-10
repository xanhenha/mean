import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from "../post.model";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enteredTitle:string;
  enteredContent: string;
  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost():void {
    const post:Post = {
      title: this.enteredTitle,
      content: this.enteredContent
    }
    this.postCreated.emit(post);
  }

}
