import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  pokemon: any;
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response: any) => {
      this.pokemon = response;
    });
  }

}
