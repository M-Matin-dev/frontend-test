import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from './components/button/button.component';
import {MatIconModule} from '@angular/material/icon';

const exportableDeclarations = [
  ButtonComponent,
];

const exportableImports = [
  MatIconModule,
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
