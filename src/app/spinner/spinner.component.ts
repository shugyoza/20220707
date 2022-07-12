// Ref.: https://christianlydemann.com/four-ways-to-create-loading-spinners-in-an-angular-app/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent implements OnInit {

  @Input() message = '';

  constructor() { }

  ngOnInit(): void {
  }

}
