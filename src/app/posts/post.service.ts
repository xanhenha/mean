import { Post } from "./post.model";
import { Injectable } from '@angular/core';
import { Subject, Subscriber } from "rxjs";

@Injectable({providedIn:'root'})

export class PostService {
	private posts: Post[] = [];
	private postsUpdated = new Subject<Post[]>();

	getPosts() {
		console.log([...this.posts]);
		return [...this.posts];
	}

	getPostUpdateListener() {
		return this.postsUpdated.asObservable();
	}

	addPost(title: string, content: string) {
		console.log(title, content)
		const post: Post = {title, content};
		this.posts.push(post);
		this.postsUpdated.next([...this.posts]);
	}
}