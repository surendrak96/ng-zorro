import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Ng-Zorro';

  endOpen = false;
  endValue;
  startValue: Date | null = new Date();

  openCalender(): void {
    this.endOpen = !this.endOpen;
  }

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  }

  handleEndOpenChange(open: boolean): void {
    console.log(open);
    this.endOpen = open;
  }
  onEndChange(date: Date): void {
    this.endValue = date;

  }
}
