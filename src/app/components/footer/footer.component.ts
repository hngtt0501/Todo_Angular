import { Component, OnInit } from '@angular/core';
import{FilterButton, Filter} from 'src/app/models/filtering.model'


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  filterButton : FilterButton[] =[

  {
    type : Filter.All , label: 'All',   isActive : true
  },

  {
    type : Filter.Active , label: 'Active',   isActive : false
  },

  {
    type : Filter.Complete , label: 'Complete',   isActive : false
  },
  ];
  length = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
