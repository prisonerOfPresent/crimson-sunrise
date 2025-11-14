import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ResumeComponent} from './resume/resume.component';
import {AboutComponent} from './about/about.component';
import {FortressDoorComponent} from './fortress-door/fortress-door.component';
import {FortressComponent} from './fortress/fortress.component';
import {HotTakeComponent} from './hot-take/hot-take.component';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {HotTakesComponent} from './hot-takes/hot-takes.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'fortress-door',
    component: FortressDoorComponent
  },
  {
    path: 'fortress',
    component: FortressComponent
  },
  {
    path: 'hot-take',
    component: HotTakeComponent
  },
  {
    path: 'blog-post',
    component: BlogPostComponent
  },
  {
    path: 'hot-takes',
    component: HotTakesComponent
  }
];
