import { Component, OnInit, ViewChild } from '@angular/core';
import { SplinkerServicesService } from 'src/app/services/splinker-services.service';
import { Splinkers } from 'src/app/Class/splinkers';
import { MatTableDataSource } from '@angular/material/table';
import {Sort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-splinker',
  templateUrl: './splinker.component.html',
  styleUrls: ['./splinker.component.scss']
})
export class SplinkerComponent implements OnInit {

  
    splData :any;
    splData1:any;
   
    
  constructor(private splServices :SplinkerServicesService) { 

   splServices.getBooksDetailsDetails().subscribe((data)=>{this.splData=data;
  
   console.log("length --------------"+this.splData.length)
  });

  }
   
  

  ngOnInit() {
 
    
  }

  sortData(abc: Sort) {
    const data = this.splData;
    if (!abc.active || abc.direction === '') {
      this.splData1 = data;
      return;
    }

    this.splData1 = data.sort((a, b) => {
      const isAsc = abc.direction === 'asc';
      switch (abc.active) {
        case 'splid': return compare(a.splid, b.splid, isAsc);
        case 'name':  return compare(a.name, b.name, isAsc);
        case 'cprice': return compare(a.cprice, b.cprice, isAsc);
        
        default: return 0;
      }
    });
  }
  

    
  }



  function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }



