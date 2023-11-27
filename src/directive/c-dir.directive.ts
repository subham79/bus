import { Directive, ElementRef, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCDir]'
})
export class CDirDirective implements OnInit {
  @HostBinding('style.backgroundColor')backgroundColor!: string;
  @HostBinding('style.color')color1!: string;


  constructor(private el : ElementRef) { 
    el.nativeElement.style.color = 'red'
  }
ngOnInit(): void {
  this.backgroundColor = 'yellow'
}

@HostListener('mouseenter') mouseover(eventData: Event){
  // this.renderer.setStyle(this.elementRef.nativeElement,'background-color','pink');
  this.backgroundColor = 'red';
  this.color1 = 'white';

}
}
