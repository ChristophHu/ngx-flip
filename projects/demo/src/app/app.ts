import { Component, signal } from '@angular/core';
import { FlipControlsComponent, FlipPaneComponent } from '../../../ngx-flip/src/public-api'

@Component({
  selector: 'app-root',
  imports: [
    FlipPaneComponent,
    FlipControlsComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.sass'
})
export class App {
  
}
