import {Component, Input, OnInit} from '@angular/core';
import * as xlsx from 'xlsx';

@Component({
  selector: 'lib-export-library',
  templateUrl: './export-library-component.html',
  styleUrls: ['./export-library-component.scss']
})
export class ExportLibraryComponent implements OnInit {
  @Input() buttonLabel: string;
  @Input() exportColumns: string[];
  @Input() dataExport: any;
  @Input() fileName: string;
  @Input() fieldData: any;

  title = 'export-application';
  visibleDownload = false;

  constructor() { }

  ngOnInit(): void {
  }

  downloadCSV() {
    const data = this.fieldData;

    let str = '';
    str = str + '\n';
    this.exportColumns.forEach((ele, index) => {
      if (index === this.exportColumns.length - 1) {
        str = str + ele;
        return true;
      }
      str = str + ele + ',';
    });
    str += '\n';
    for (const row of data) {
      for (const item of Object.keys(row)) {
        str += `${row[item] + '\t'},`;
      }
      str += '\n';
    }

    const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
    const link = document.createElement('a');
    link.href = uri;
    link.download = this.fileName + `.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.visibleDownload = false;
  }

  downloadXLSX() {
    const data = this.fieldData;

    let str = '';
    this.exportColumns.forEach((ele, index) => {
      if (index === this.exportColumns.length - 1) {
        str = str + ele;
        return true;
      }
      str = str + ele + ',';
    });
    str += '\n';
    for (const row of data) {
      for (const item of Object.keys(row)) {
        str += `${row[item] + '\t'},`;
      }
      str += '\n';
    }

    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet([], {
      skipHeader: true,
    });
    xlsx.utils.sheet_add_aoa(ws, [[]], { origin: 'A1' });
    xlsx.utils.sheet_add_aoa(ws, [this.exportColumns], { origin: -1 });
    xlsx.utils.sheet_add_json(ws, data, { skipHeader: true, origin: -1 });
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, this.fileName);
    xlsx.writeFile(wb, this.fileName + `.xlsx`, {
      type: 'string',
    });
    this.visibleDownload = false;
  }

}
