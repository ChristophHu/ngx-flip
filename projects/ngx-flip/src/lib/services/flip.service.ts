import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipService {
  curr = 0
  timerId: any
  counter: number = 0
  isRunning: boolean = false

  // Reference to the flip component
  // week: ElementRef | undefined
  // day: ElementRef | undefined
  // hour: ElementRef | undefined
  // minute: ElementRef | undefined
  // second: ElementRef | undefined

  private registry = new Map<string, Subject<any>>()
  
  constructor() {
    this.startCLock()
  }

  register(id: string, subject: Subject<any>) {
    this.registry.set(id, subject)
  }
  unregister(id: string) {
    this.registry.delete(id)
  }
  updateComponent(id: string, value: any) {
    this.registry.get(id)?.next(value);
  }
  updateAll(value: any) {
    this.registry.forEach(subj => subj.next(value));
  }

  // Set component reference
  // setWeekReference(week: any): void {
  //   this.week = week.flipElement
  // }
  // setDayReference(day: any): void {
  //   this.day = day.flipElement
  // }
  // setHourReference(hour: any): void {
  //   this.hour = hour.flipElement
  // }
  // setMinuteReference(minute: any): void {
  //   this.minute = minute.flipElement
  // }
  // setSecondReference(second: any): void {
  //   this.second = second.flipElement
  // }

  // flip(elRef: ElementRef, value: number): void {
  //   const ul = elRef.nativeElement as HTMLElement
  //   const lis = ul.querySelectorAll('li')

  //   if (lis.length !== 2) return

  //   lis.forEach(li => li.classList.remove('before', 'active'))

  //   const curli = lis[this.curr]
  //   curli.classList.add('before')

  //   this.curr = this.curr === 0 ? 1 : 0

  //   const nextli = lis[this.curr]
  //   nextli.classList.add('active')

  //   const texts = nextli.querySelectorAll('.flip-text')
  //   const formatted = this.addZeros(value % 60, 2)

  //   texts.forEach(el => {
  //     (el as HTMLElement).innerText = formatted
  //   })
  // }

  // addZeros(val: number, length: number): string {
  //   return val.toString().padStart(length, '0')
  // }

  startCLock() {
    let tempHour = 0, tempMinute = 0, tempSecond = 0

    this.timerId = setInterval(() => {
      
      let hour = new Date().getHours()
      let minute = new Date().getMinutes()
      let second = new Date().getSeconds()
      if (tempHour != hour) {
        this.updateComponent('hour', hour)
        tempHour = hour
      }
      if (tempMinute != minute) {
        this.updateComponent('minute', minute)
        tempMinute = minute
      }
      if (tempSecond != second) {
        this.updateComponent('second', second)
        tempSecond = second
      } 
    }, 1000)
  }

  // timer controls
  startTimer(id: string): void {
    this.isRunning = true
    this.timerId = setInterval(() => {
      // this.isCountdown ? this.counter-- : this.counter++
      this.counter = ++this.counter
      if (this.counter <= 0) {
        // this.counter = 0
        this.isRunning = false
        clearInterval(this.timerId)
      }
      console.log(this.counter)
      this.registry.get(id)?.next(this.counter)
    }, 1000)
  }
  pauseTimer(id: string): void {
    if (!this.isRunning) return

    clearInterval(this.timerId)
    this.timerId = null

  }
  stopTimer(id: string): void {
    clearInterval(this.timerId)
    this.timerId = null
    this.counter = 0
    this.registry.get(id)?.next(0)
  }

  // counter controls
  addOne(id: string): void {
    this.registry.get(id)?.next(++this.counter)
  }
  subOne(id: string): void {
    this.registry.get(id)?.next(--this.counter)
  }
  resetCounter(id: string): void {
    this.registry.get(id)?.next(0)
  }
}
