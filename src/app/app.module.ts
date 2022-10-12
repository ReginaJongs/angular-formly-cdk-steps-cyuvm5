import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatStepperModule } from '@angular/material/stepper';

import { AppComponent } from './app.component';
import { CustomStepper, FormlyFieldStepper } from './stepper.type';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    CdkStepperModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' }
      ],
      types: [{ name: 'stepper', component: FormlyFieldStepper, wrappers: [] }]
    })
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent, FormlyFieldStepper, CustomStepper]
})
export class AppModule {}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
