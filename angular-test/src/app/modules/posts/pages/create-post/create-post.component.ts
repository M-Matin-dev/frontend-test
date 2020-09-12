import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'talos-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  @ViewChild('tagElem', {static: true}) tagElem: ElementRef<HTMLInputElement>;
  private photoField = 'photo';
  private tagField = 'tag';

  imageURL: string;
  tagsSet: Set<string> = new Set(['test 01', 'test 02', 'test 03', 'test 04']);
  readonly creationFormOfPost = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    [this.photoField]: [null],
    [this.tagField]: [''],
  });

  get tags(): string[] {
    return Array.from(this.tagsSet);
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  addTag(): void {
    const tagControl = this.creationFormOfPost.get(this.tagField);
    this.tagsSet.add( tagControl.value );
    tagControl.reset();
    this.tagElem.nativeElement.focus();
  }

  removeTag(tag: string): void {
    this.tagsSet.delete(tag);
  }

  showPreview(event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.creationFormOfPost.patchValue({
      photo: file
    });
    this.creationFormOfPost.get(this.photoField).updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

}
