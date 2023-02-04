import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public value1: number = 10;
  public array1: Array<number> = [10, 22, 14];
  public dt1: Date = new Date();

  public status: Boolean = true;

  public returnString(): string {
    return "String return from function";
  }
}
