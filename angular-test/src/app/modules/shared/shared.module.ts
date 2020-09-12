import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

const exportableDeclarations = [
  ButtonComponent,
];

const exportableImports = [
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule,

  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    ...exportableDeclarations
  ],
  imports: [
    CommonModule,
    ...exportableImports,
  ],
  exports: [
    ...exportableDeclarations,
    ...exportableImports,
  ]
})
export class SharedModule { }
