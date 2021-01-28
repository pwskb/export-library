import {Component, Input, OnInit} from '@angular/core';
import {element} from 'protractor';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  title = 'export-application';
  buttonLabel = 'ดาวน์โหลดไฟล์';
  fileName = 'testExportData';
  fieldData = new Array();

  dataExport = [
    {
      col1: 'AAAA',
      col2: 'BBBB',
      col3: 'CCCC'
    },
    {
      col1: 'DDDD',
      col2: 'EEEE',
      col3: 'FFFF'
    },
    {
      col1: 'GGGG',
      col2: 'HHHH',
      col3: 'IIII'
    },
  ];

  exportColumns = [
    'NO.',
    'COL1',
    'COL2',
    'COL3',
  ];

  ngOnInit(): void {
    this.dataExport.forEach((element, index) => {
      const tmp = {
        no: index + 1,
        col1: element.col1,
        col2: element.col2,
        col3: element.col3,
      };
      this.fieldData.push(tmp);
    });
  }

}
