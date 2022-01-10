import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-issue',
  templateUrl: './chart-issue.component.html',
  styleUrls: ['./chart-issue.component.css']
})
export class ChartIssueComponent implements OnInit {

  public data:Object[] | undefined;
  public chartTitle:string | undefined;
  public chartLabel:Object | undefined;
  public legend:Object | undefined;
  public toolTipSettings:Object | undefined;
  constructor(){
    this.chartTitle="Time Tracker Statistics"
    this.data=[
     { name:'Issue 1',value:27,text:'27%'},
     { name:'Issue 2',value:27,text:'27%'},
     { name:'Issue 3',value:15,text:'15%'},
     { name:'Issue 4',value:8,text:'8%'},
     { name:'Issue 5',value:15,text:'15%'},
     { name:'Issue 6',value:8,text:'8%'},
     
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
