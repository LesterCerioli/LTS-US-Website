import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-thank-you-modal',
  templateUrl: './thank-you-modal.component.html',
  styleUrls: ['./thank-you-modal.component.css']
})
export class ThankYouModalComponent {
  constructor(private dialogRef: MatDialogRef<ThankYouModalComponent>) {}

  fecharModal() {
    this.dialogRef.close();
  }
}
