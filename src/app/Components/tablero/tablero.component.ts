import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Nombre', cols: 1, rows: 1 },
          { title: 'NIT', cols: 1, rows: 1 },
          { title: 'Dirección', cols: 1, rows: 1 },
          { title: 'Telefono', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Nombre', cols: 2, rows: 1 },
        { title: 'NIT', cols: 1, rows: 1 },
        { title: 'Dirección', cols: 1, rows: 2 },
        { title: 'Telefono', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
