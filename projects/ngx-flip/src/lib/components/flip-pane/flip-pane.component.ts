import { CommonModule } from '@angular/common'
import { Component, Input, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core'
import { Subject, Subscription } from 'rxjs'
import { FlipService } from '../../services/flip.service'

@Component({
  selector: 'flip-pane',
  imports: [
    CommonModule
  ],
  templateUrl: './flip-pane.component.html',
  styleUrl: './flip-pane.component.sass'
})
export class FlipPaneComponent implements OnInit, OnDestroy {
  @Input() textSize: string = '150px'
  @Input() lineHeight: string = '164px'
  @Input() id!: string
  @ViewChild('flipElement', { static: false }) flipElement!: ElementRef

  private subject = new Subject<number>()
  private sub!: Subscription

  private flag = 0
  
  constructor(private flipService: FlipService) { }

  ngOnInit(): void {
    this.flipService.register(this.id, this.subject)

    this.sub = this.subject.subscribe(val => {
      this.flip(val)
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
    this.flipService.unregister(this.id)
  }

  flip(value: number): void { 
    const ul = this.flipElement.nativeElement as HTMLElement
    const lis = ul.querySelectorAll('li')

    if (lis.length !== 2) return

    lis.forEach(li => li.classList.remove('before', 'active'))

    const curli = lis[this.flag]
    curli.classList.add('before')

    this.flag = this.flag === 0 ? 1 : 0

    const nextli = lis[this.flag]
    nextli.classList.add('active')

    const texts = nextli.querySelectorAll('.flip-text')
    const formatted = this.addZeros(value % 60, 2)

    texts.forEach(el => {
      (el as HTMLElement).innerText = formatted
    })
  }

  addZeros(val: number, length: number): string {
    return val.toString().padStart(length, '0')
  }
}
