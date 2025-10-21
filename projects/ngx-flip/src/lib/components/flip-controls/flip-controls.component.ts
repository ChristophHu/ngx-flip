import { AfterViewInit, Component, Input } from '@angular/core'
import { FlipService } from '../../../public-api'

@Component({
  selector: 'flip-controls',
  imports: [],
  templateUrl: './flip-controls.component.html',
  styleUrl: './flip-controls.component.sass'
})
export class FlipControlsComponent {
  @Input() flippaneId: string = ''

  constructor(private flipService: FlipService) {}
  
  startTimer() {
    this.flipService.startTimer(this.flippaneId)
  }
  pauseTimer() {
    this.flipService.pauseTimer(this.flippaneId)
  }
  stopTimer() {
    this.flipService.stopTimer(this.flippaneId)
  }
  addOne() {
    this.flipService.addOne(this.flippaneId)
  }
  subOne() {
    this.flipService.subOne(this.flippaneId)
  }
  resetCounter() {
    this.flipService.resetCounter(this.flippaneId)
  }
}
