import { Component } from '@angular/core';
import { base64data }  from '../assets/pdf/demopdf'
import { pdfDoc2 } from '../assets/pdf/demo2pdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PDFViewer';
  

  pdfData: any 
  constructor() {
  }

  changeDoc1() {
      console.log('Changing Doc')
      this.pdfData = base64data
      console.log(this.pdfData)
  }
  changeDoc2() {
      console.log('Changing Doc')
      this.pdfData = pdfDoc2
      console.log(this.pdfData)
  }

  
  pageLoad(e : any){
      console.log(e)
    }

  ngOnInit(): void {

      this.pdfData = base64data
  }
}
