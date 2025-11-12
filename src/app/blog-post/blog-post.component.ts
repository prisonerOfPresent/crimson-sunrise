import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {QuillEditorComponent, QuillModule} from 'ngx-quill';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-blog-post',
  imports: [
    RouterLink,
    QuillEditorComponent,
    FormsModule
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {

  @ViewChild("tag_editor")
  tagsTextBox: ElementRef | undefined;

  editorContent: string = 'Start Typing';
  tags = ['DC'];

  quillConfig = {
    toolbar: {
      container: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ font: ['Inconsolata', 'monospace'] }],
        [{ 'align': [] }],

        ['clean'],                                         // remove formatting button

        ['link', 'image', 'video']                         // link and image, video
      ]
    }
  };
  protected readonly alert = alert;

  handleTagInsert($event: any) {
    if($event.code === 'Space') {
      console.log(this.tagsTextBox?.nativeElement);
      this.tags.push(<string>this.tagsTextBox?.nativeElement.value);
      this.tagsTextBox!!.nativeElement!!.value = '';
    }
  }

  handleSubmit($event: any) {
    $event.preventDefault();
  }
}
