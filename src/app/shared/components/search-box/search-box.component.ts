import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  @Input()
  public textInput: string = '';

  @Output()
  public onValue: EventEmitter<string> = new EventEmitter();
  emitTextInput(busqueda: string): void {
    this.onValue.emit(busqueda)
  }
}
