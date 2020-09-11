import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const exportableDeclarations = [
  ButtonComponent,
];

const exportableImports = [
  MatIconModule,
  MatCardModule,
  MatButtonModule,
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
