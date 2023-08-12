import { Component } from '@angular/core';

@Component({
  selector: 'app-proudct-rating',
  templateUrl: './proudct-rating.component.html',
  styleUrls: ['./proudct-rating.component.css']
})
export class ProudctRatingComponent {
  
  private unsavedChanges = false;
  selectedRating: number | null = null;

  rateProduct() {
    if (this.selectedRating !== null) {
      // Perform rating logic, e.g., send the rating to the server
      console.log('Rating:', this.selectedRating);
      this.unsavedChanges = true;
    }
  }

  saveChanges() {
    // Perform logic to save changes, e.g., send changes to the server
    console.log('Saving changes...');
    this.unsavedChanges = false;
  }

  hasUnsavedChanges(): boolean {
    return this.unsavedChanges;
  }
}
