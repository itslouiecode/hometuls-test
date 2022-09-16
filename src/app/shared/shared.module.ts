import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@NgModule({
  declarations: [AppHeaderComponent, AppFooterComponent],
  imports: [CommonModule, MaterialModule],
  exports: [
    CommonModule,
    MaterialModule,
    AppHeaderComponent,
    AppFooterComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
