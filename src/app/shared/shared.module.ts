import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';

const matmodule = [MatToolbarModule, MatSliderModule];
const modules = [FormsModule];

@NgModule({
  imports: [CommonModule, ...modules, ...matmodule],
  declarations: [],
  exports: [...modules, ...matmodule],
})
export class SharedModule {}
