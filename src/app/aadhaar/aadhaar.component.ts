import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import * as XLSX from 'ts-xlsx';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-aadhaar',
  templateUrl: './aadhaar.component.html',
  styleUrls: ['./aadhaar.component.css']
})
export class AadhaarComponent implements OnInit {

constructor(public frmBldr: FormBuilder, private router: Router) { }


  excelFile: any;
  fileName = ''
  validFile: boolean = true;
  createForm: FormGroup = this.frmBldr.group({
          imageInput: [this.fileName, Validators.required],
          theFile: [null]
      });;
  arrayBuffer:any;
  file:File; 
  xlhtml: any = [];



  theInput: any = [];

  ngOnInit() {
  	console.log(this.theInput);
  	const data = [
  	{"aadhaarno": "123654789025"},
  	{"aadhaarno": "456824789025"},
  	{"aadhaarno": "998784789025"},
  	{"aadhaarno": "778454789025"},
  	]

  	this.theInput = data;
  }


  onFileChange($event: any) {
     let file = $event.target.files[0]; // <--- File Object for future use.
}

incomingfile(event: any) 
  {
  this.file = event.target.files[0];
  this.createForm.controls['imageInput'].setValue(this.file ? this.file.name : ''); // <-- Set Value for Validation
  this.Upload();
  }

 Upload() {
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary", cellDates: true});
            var first_sheet_name = workbook.SheetNames[0];
            if(first_sheet_name !== 'Sheet1'){
              this.validFile = false;
              this.createForm.controls['theFile'].setValue(null);
              this.createForm.controls['imageInput'].setValue(null);
              return
            } else {
              this.validFile = true;
            }
            var worksheet = workbook.Sheets[first_sheet_name];
            const exactdata = XLSX.utils.sheet_to_json(worksheet,{raw:true});
            this.xlhtml = XLSX.utils.sheet_to_json(worksheet,{header: 0});
            this.theInput = exactdata;
            console.log(exactdata);
        }
        fileReader.readAsArrayBuffer(this.file);
	}

gotoPmKisan(){
	this.router.navigate(['pmkisan']);
}

gotoAadhaar(){
	this.router.navigate(['']);
}

}

