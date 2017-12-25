import {Component, Input, SimpleChanges, OnChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-combox',
  templateUrl: './combox.component.html',
  styleUrls: ['./combox.component.css']
})
export class ComboxComponent <T> implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    if(changes["reset"] !== undefined && changes["reset"].currentValue !== changes["reset"].previousValue){
      this.selected = null;
    }
  }
  @Input() disabled:boolean;
  @Input() type :  T;
  @Input() list : Array<T> = [];
  @Input() displayField : string;
  @Input() showEllipsis : boolean = false;
  @Input() selected : String = null;
  @Input() sortByFields : Array<string> = [];
  @Input() reset : boolean = false;

  @Output() selectOptionEventEmitter = new EventEmitter();

  selectOption(item : T){
    this.selected = this.displayField !== undefined && this.displayField.length > 0 ?  item[<any>this.displayField] : item;
    this.selectOptionEventEmitter.emit(item);
  }

  public toggle(item : T): void {
    this.selectOption(item);
  }
}
