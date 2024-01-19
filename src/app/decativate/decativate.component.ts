import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../deactive.guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-decativate',
  templateUrl: './decativate.component.html',
  styleUrls: ['./decativate.component.css']
})
export class DecativateComponent implements CanComponentDeactivate {
  private hasUnsavedChanges: boolean = false;

  // Simulating changes that need confirmation
  makeChanges() {
    this.hasUnsavedChanges = true;
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (this.hasUnsavedChanges) {
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

  navigateAway() {
    this.makeChanges();
    // Simulating navigation attempt
    // The CanDeactivate guard will trigger here
    // and prompt the user with a confirmation dialog.
    console.log(this.hasUnsavedChanges);
    
  }
}