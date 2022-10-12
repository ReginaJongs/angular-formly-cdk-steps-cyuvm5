import { CdkStepper } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-stepper',
  template: `
    <example-custom-stepper [orientation]="'s'">
      <ng-container
        *ngFor="
          let step of field.fieldGroup;
          let index = index;
          let last = last
        "
      >
      <cdk-step>
        <ng-template cdkStepLabel>
          Label
          {{ step.templateOptions.label }}
        </ng-template>
        <formly-field [field]="step"></formly-field>

        <div>
          <button
            cdkStepperPrevious
            *ngIf="index !== 0"
            class="btn btn-primary"
            type="button"
          >
            Back
          </button>

          <button
            matStepperNext
            *ngIf="!last"
            class="btn btn-primary"
            type="button"
            [disabled]="!isValid(step)"
          >
            Next
          </button>

          <button
            *ngIf="last"
            class="btn btn-primary"
            [disabled]="!form.valid"
            type="submit"
          >
            Submit
          </button>
        </div>

      </cdk-step>
        
      </ng-container>
    </example-custom-stepper>
  `
})
export class FormlyFieldStepper extends FieldType {
  isValid(field: FormlyFieldConfig) {
    if (field.key) {
      return field.formControl.valid;
    }

    return field.fieldGroup.every(f => this.isValid(f));
  }
}

@Component({
  selector: 'example-custom-stepper',
  template: `
    <section class="example-container">
      <header>
        <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>
      </header>

      <div [ngTemplateOutlet]="selected ? selected.content : null"></div>

      <footer class="example-step-navigation-bar">
        <button class="example-nav-button" cdkStepperPrevious>&larr;</button>
        <button
          class="example-step"
          [class.example-active]="selectedIndex === i"
          *ngFor="let step of steps; let i = index"
          (click)="selectStepByIndex(i)"
        >
          Step {{ i + 1 }}
        </button>
        <button class="example-nav-button" cdkStepperNext>&rarr;</button>
      </footer>
    </section>
  `,
  providers: [{ provide: CdkStepper, useExisting: CustomStepper }]
})
export class CustomStepper extends CdkStepper {
  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
