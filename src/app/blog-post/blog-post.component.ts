import {Component, ElementRef, ViewChild} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {QuillEditorComponent, QuillModule} from 'ngx-quill';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LocalStorageService} from '../services/local-storage-service';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-blog-post',
  imports: [
    RouterLink,
    QuillEditorComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {

  @ViewChild("tag_editor")
  tagsTextBox: ElementRef | undefined;

  tags:string[] = [];

  titleControl = new FormControl('', [Validators.required]);
  tagLineControl = new FormControl('', [Validators.required]);
  contentControl = new FormControl('', [Validators.required]);

  formGroup = new FormGroup({
    title: this.titleControl,
    content: this.contentControl,
    tagLine: this.tagLineControl,
  });

  submitting = false;

  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{'header': 1}, {'header': 2}],               // custom button values
        [{'list': 'ordered'}, {'list': 'bullet'}],
        [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
        [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
        [{'direction': 'rtl'}],                         // text direction

        [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
        [{'header': [1, 2, 3, 4, 5, 6, false]}],

        [{'color': []}, {'background': []}],          // dropdown with defaults from theme
        [{font: ['Inconsolata', 'monospace']}],
        [{'align': []}],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video']                         // link and image, video
      ]
    }
  };

  constructor(private http: HttpClient, private router: Router, private localStorageService: LocalStorageService) {
  }

  handleTagInsert($event: any) {
    if ($event.code === 'Space') {
      console.log(this.tagsTextBox?.nativeElement);
      this.tags.push(<string>this.tagsTextBox?.nativeElement.value);
      this.tagsTextBox!!.nativeElement!!.value = '';
    }
  }

  async handleSubmit($event: any) {
    $event.preventDefault();
    this.submitting = true;
    let requestBody = {
      title: this.titleControl.value,
      tagLine: this.tagLineControl.value,
      content: this.contentControl.value,
      tags: this.tags.join(',')
    }
    try {
      const response: any = await firstValueFrom(this.http.post(`${environment.apiBaseUrl}/prerise/posts`, requestBody, {
        headers: {
          'Authorization': `Bearer ${this.localStorageService.getToken()}`
        }
      }));
      if (response && response.id && response.id !== 0) {
        this.router.navigateByUrl('/fortress').then(r => console.log('navigated!'));
      }
    } catch (error) {
      console.log(error);
      this.submitting = false;
    }
  }
}
