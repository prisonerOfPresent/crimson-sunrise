import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../services/local-storage-service';
import {firstValueFrom} from 'rxjs';
import {environment} from '../../environments/environment';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-blog-posts',
  imports: [
    RouterLink
  ],
  templateUrl: './blog-posts.component.html',
  styleUrl: './blog-posts.component.css',
})
export class BlogPostsComponent {
  posts: any[] = [];
  loggedIn = false;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.loggedIn = this.localStorageService.getToken() !== null;
    this.loadBlogPosts();
  }

  loadBlogPosts() {
    try {
      firstValueFrom(this.http.get(`${environment.apiBaseUrl}/prerise/posts`))
        .then(result => {
          this.posts = result as any;
        })
    } catch (err) {
      console.error(err);
    }
  }

  deletePost(id: any) {
    try {
      console.log(id);
      console.log('deleting blog post');
      firstValueFrom(this.http.delete(`${environment.apiBaseUrl}/prerise/posts/${id}`, {
        headers: {
          'Authorization': `Bearer ${this.localStorageService.getToken()}`
        }
      })).then(r => {
        console.log(r);
        this.loadBlogPosts();
      });
    } catch (err) {
      console.error(err);
    }
  }
}
