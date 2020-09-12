import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {PostsFacade} from '../../store/posts.facade';
import {ToastrService} from 'ngx-toastr';

enum FormFields {
  title = 'title',
  description = 'description',
  photo = 'photo',
  tag = 'tag',
}

@Component({
  selector: 'talos-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  readonly formFields = Object.freeze(FormFields);

  @ViewChild('tagElem', {static: true}) tagElem: ElementRef<HTMLInputElement>;

  imageURL: string;
  tagsSet: Set<string> = new Set();
  readonly creationFormOfPost = this.formBuilder.group({
    [FormFields.title]: ['', Validators.required],
    [FormFields.description]: ['', Validators.required],
    [FormFields.photo]: [null, Validators.required],
    [FormFields.tag]: [''],
  });

  isFieldInvalid(fieldName: FormFields): boolean {
    const field = this.creationFormOfPost.get(fieldName);
    return field.touched && field.invalid;
  }

  invalidFieldErrors(fieldName: FormFields): string {
    return Object.keys(this.creationFormOfPost.get(fieldName).errors).pop();
  }

  get tags(): string[] {
    return Array.from(this.tagsSet);
  }

  constructor(
    private formBuilder: FormBuilder,
    private postsFacade: PostsFacade,
    private toastr: ToastrService,
  ) {
    (window as any).tst = toastr;
  }

  ngOnInit(): void {
  }

  addTag(evt: Event): void {
    const tagControl = this.creationFormOfPost.get(FormFields.tag);
    this.tagsSet.add(tagControl.value);
    tagControl.reset();
    this.tagElem.nativeElement.focus();
    evt.preventDefault();
  }

  removeTag(tag: string): void {
    this.tagsSet.delete(tag);
  }

  showPreview(event): void {
    const file = (event.target as HTMLInputElement).files[0];
    this.creationFormOfPost.patchValue({
      photo: file
    });
    this.creationFormOfPost.get(FormFields.photo).updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  submitForm(): void {
    this.postsFacade.createPost({
      post: {
        title: this.creationFormOfPost.get(FormFields.title).value,
        description: this.creationFormOfPost.get(FormFields.description).value,
        tags: this.tags,
      },
      photo: this.creationFormOfPost.get(FormFields.photo).value
    });
  }

  addTagOnEnter(evt: KeyboardEvent): void {
    if (evt.key === 'Enter') {
      this.addTag(evt);
    }
  }
}
