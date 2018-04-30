import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonComponent } from './button/button.component';
import { FlexboxComponent } from './flexbox/flexbox.component';


@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    FlexLayoutModule
  ],
  declarations: [ButtonComponent, FlexboxComponent]
})
export class DemoModule { }
