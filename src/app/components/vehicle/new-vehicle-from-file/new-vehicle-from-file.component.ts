import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import * as XLSX from 'xlsx';
import {FORMBUTTON, UNDOBUTTON} from '../../../configs/my-configs';
import {VehicleService} from '../../../services/vehicle.service';
import {Location} from '@angular/common';
import {Observable} from 'rxjs';
import {HttpEventType} from '@angular/common/http';

type AOA = any[][];

@Component({
  selector: 'app-new-vehicle-from-file',
  templateUrl: './new-vehicle-from-file.component.html',
  styleUrls: ['./new-vehicle-from-file.component.css']
})
export class NewVehicleFromFileComponent implements OnInit {
  @Output() emitter = new EventEmitter<any>();

  title = 'Nuovi Veicoli da File';
  data: AOA = [[], []];

  selectedFiles: FileList;
  currentFile: File;
  message = '';

  fileInfos: Observable<any>;

  saveButton = FORMBUTTON;
  undoButton = UNDOBUTTON;

  constructor(private location: Location,
              private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  onFileChange(evt: any) {
    this.selectedFiles = evt.target.files;

    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  btnClick(event: any) {
    if (event === 'Salva') {
      this.currentFile = this.selectedFiles.item(0);
      this.vehicleService.saveVehiclesFromFile(this.currentFile)
        .subscribe(
          () => this.goBack()
        );
      this.selectedFiles = undefined;
    } else {
      this.goBack();
    }
  }

  goBack() {
    this.location.back();
  }
}
