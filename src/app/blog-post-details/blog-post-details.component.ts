import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from '../services/local-storage-service';
import {firstValueFrom} from 'rxjs';
import {environment} from '../../environments/environment';
import {ActivatedRoute, RouterLink} from '@angular/router';

@Component({
  selector: 'app-blog-post-details',
  imports: [
    RouterLink
  ],
  templateUrl: './blog-post-details.component.html',
  styleUrl: './blog-post-details.component.css',
})
export class BlogPostDetailsComponent implements OnInit {
  post: any;
  loggedIn = false;
  id = '';

  constructor(private http: HttpClient, private localStorageService: LocalStorageService, private route: ActivatedRoute) {
    this.loggedIn = this.localStorageService.getToken() !== null;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadBlogPost();
    })
  }

  loadBlogPost() {
    try {
      firstValueFrom(this.http.get(`${environment.apiBaseUrl}/prerise/posts/${this.id}`))
        .then(result => {
          this.post = result as any;
        })
    } catch (err) {
      console.error(err);
    }
  }
}
