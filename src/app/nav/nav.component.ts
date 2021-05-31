import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }
  scrollTo(path: string): void{
     const e = document.getElementById(path);
     e.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
          inline: 'start'
    });
  }

  ngOnInit(): void {
  }

}
