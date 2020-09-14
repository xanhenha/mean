import { Component, OnInit, OnDestroy } from "@angular/core";
import { Post } from "../post.model";
import { PostService } from '../post.service';
import { Subscription } from "rxjs";

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit, OnDestroy {

	constructor(
		public postsService: PostService
	) {}

	posts: Post[] = [];
	private postsSub: Subscription;

	ngOnInit() :void{
		this.postsService.getPosts();
		this.postsSub = this.postsService.getPostUpdateListener()
			.subscribe((posts: Post[]) => {
				this.posts = posts;
			});
	}

	ngOnDestroy() {
		this.postsSub.unsubscribe();
	}
}