import { NgModule } from '@angular/core';
import { ExportLibraryComponent } from './export-library.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzPopoverModule} from 'ng-zorro-antd/popover';
import {NzButtonModule} from 'ng-zorro-antd/button';



@NgModule({
  declarations: [ExportLibraryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NzPopoverModule,
    NzButtonModule,

  ],
  exports: [ExportLibraryComponent]
})
export class ExportLibraryModule { }
