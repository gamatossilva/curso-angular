import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
