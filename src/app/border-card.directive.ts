import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor:string = 'red';
  private defaultColor:string  = '#f5f5f5';
  private defaultHeight:number = 180;
  
  constructor(private el:ElementRef) {
    
    this.setHeight(this.defaultHeight);
    this.setBorder(this.defaultColor);
   }

  @Input('pkmnBorderCard') borderColor:string|undefined;

  @HostListener('mouseenter') onMouseEnter(){

    this.setBorder(this.borderColor ||this.initialColor);
  }
  
  @HostListener('mouseleave') onMouseLeave(){
    
    this.setBorder(this.defaultColor);
  }
  
  setHeight(height:number){

    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color:string){
    this.el.nativeElement.style.border = `solid 4px ${color} `;
  }
}
