import { MatSnackBar } from '@angular/material/snack-bar';

export class BaseComponent {
  constructor(private matSnackBar: MatSnackBar) {

  }

  openMessageSnackBar(message: string, action: string = 'Ok') {
    this.matSnackBar.open(message, action, {
      duration: 5000,
    });
  }
}
