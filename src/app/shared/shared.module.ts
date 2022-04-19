import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';

const matmodule = [MatToolbarModule, MatSliderModule];

@NgModule({
  imports: [CommonModule, ...matmodule],
  declarations: [],
  exports: [...matmodule],
})
export class SharedModule {}
