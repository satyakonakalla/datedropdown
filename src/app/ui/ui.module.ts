import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbMomentjsAdapter } from './moment/ngb-momentjs-adapter';
import {HolidayService} from './holidays/services/holiday.service';
import { DateDropdownComponent } from './date-dropdown/date-dropdown.component';

import { NgxSelectModule } from 'ngx-select-ex';




@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, NgbModalModule.forRoot(), NgbModule.forRoot(),
    NgxSelectModule
    
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, DateDropdownComponent],
  providers: [NgbMomentjsAdapter, HolidayService],
  exports: [LayoutComponent]
})
export class UiModule { }
