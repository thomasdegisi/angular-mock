import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  public errorMessage = '';
  public statusMessage = '';

  constructor() { }

  clear(): void {
    this.clearError();
    this.clearStatus();
  }

  clearError(): void {
    this.errorMessage = '';
  }

  clearStatus(): void {
    this.statusMessage = '';
  }

  showError(exception: any): void {
    this.errorMessage = exception.toString();
  }
}
