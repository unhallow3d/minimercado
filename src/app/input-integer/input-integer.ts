import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrls: ['./input-integer.scss'],
})
export class InputInteger {
  @Input() quantity: number = 0;
  @Input() max: number = 0;

  @Output() quantityChange = new EventEmitter<number>();
  @Output() maxReached = new EventEmitter<string>();

  upQuantity(): void {
    if (this.quantity + 1 <= this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit('Cantidad máxima alcanzada');
    }
  }

  downQuantity(): void {
    if (this.quantity - 1 >= 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(): void {
    // Fuerza que sea número entero y no supere el máximo
    let val = Math.floor(Number(this.quantity));
    if (isNaN(val) || val < 0) val = 0;
    if (val > this.max) {
      val = this.max;
      this.maxReached.emit('Cantidad máxima alcanzada');
    }
    this.quantity = val;
    this.quantityChange.emit(this.quantity);
  }
}