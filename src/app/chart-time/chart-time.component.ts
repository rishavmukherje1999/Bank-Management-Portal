import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-chart-time',
  templateUrl: './chart-time.component.html',
  styleUrls: ['./chart-time.component.css']
})
export class ChartTimeComponent implements OnInit {
  public data:Object[] | undefined;
  public chartTitle:string | undefined;
  public chartLabel:Object | undefined;
  public legend:Object | undefined;
  public toolTipSettings:Object | undefined;
  constructor(){
    this.chartTitle="Time Tracker Statistics"
    this.data=[
     { name:'Employee 1',value:37,text:'37%'},
     { name:'Employee 2',value:17,text:'17%'},
     { name:'Employee 3',value:19,text:'19%'},
     { name:'Employee 4',value:4,text:'4%'},
     { name:'Employee 5',value:11,text:'11%'},
     { name:'Employee 6',value:12,text:'12%'},
     
    ];
    this.toolTipSettings={
      enable:true,
      format:'${point.x} : <b>${point.y}%</b>'
    }
    this.chartLabel={
      visible:true,
      position:'Inside',
      name:'text'
    };
    this.legend={
      visible:true,
      position:'Bottom'
    };
  }

  ngOnInit(): void {

  }
  

}
