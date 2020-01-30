import { Component } from '@angular/core';

import {LicenseManager} from '@ag-grid-enterprise/core';
import {ClipboardModule} from '@ag-grid-enterprise/clipboard';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {MenuModule} from '@ag-grid-enterprise/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

   modules = [ClientSideRowModelModule, ClipboardModule, MenuModule];
}
