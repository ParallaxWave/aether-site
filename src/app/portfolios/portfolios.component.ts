import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent implements OnInit {
  web_links: string[] = [
  "https://media.discordapp.net/attachments/847743058766331924/848416714848600105/unknown.png",
  "https://media.discordapp.net/attachments/847743058766331924/848416844427558912/unknown.png",
  "https://media.discordapp.net/attachments/847743058766331924/848416436203683902/unknown.png",
  "https://media.discordapp.net/attachments/847743058766331924/849213137298653184/develop-a-professional-website-for-you.png",
  "https://media.discordapp.net/attachments/847743058766331924/849213181212885012/develop-a-professional-website-for-you.png"
  ];
  web_count = 0;
 web_src: string = this.web_links[this.web_count];


  ill_links: string[] = [
    "https://media.discordapp.net/attachments/847743058766331924/849954558670143508/image2.png?width=372&height=438",
    "https://media.discordapp.net/attachments/847743058766331924/849954399118688286/Blue_Post.png?width=296&height=438",
    "https://media.discordapp.net/attachments/848237034019094586/849682117440569374/image0.jpg?width=350&height=438",
    "https://media.discordapp.net/attachments/847743058766331924/849953806161805323/unknown.png?width=291&height=438",
    "https://media.discordapp.net/attachments/847743058766331924/849953706552459294/unknown.png?width=339&height=438",
    "https://media.discordapp.net/attachments/847743058766331924/849953651631849492/unknown.png?width=716&height=438"
  ];
  ill_count = 0;
 ill_src: string = this.web_links[this.web_count];


  gfx_links: string[] = [
    "https://media.discordapp.net/attachments/847743058766331924/850307062541582336/unknown.png?width=374&height=431",
    "https://media.discordapp.net/attachments/847743058766331924/850306361581633537/unknown.png?width=351&height=432",
    "https://media.discordapp.net/attachments/847743058766331924/850306701361414164/unknown.png?width=559&height=431",
    "https://media.discordapp.net/attachments/847743058766331924/850306763928109066/unknown.png?width=562&height=432",
    "https://media.discordapp.net/attachments/847743058766331924/850306811898363964/unknown.png?width=582&height=432",
    "https://media.discordapp.net/attachments/847743058766331924/850306857843294228/unknown.png?width=560&height=432"
  ];
  gfx_count = 0;
 gfx_src: string = this.gfx_links[this.gfx_count];

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.next(), 2500);
  }
  next():void{
    if(this.web_count >= this.web_links.length - 1){
      this.web_count = 0;
    }
    else{
      this.web_count++;
    }
      this.web_src = this.web_links[this.web_count];

    if(this.ill_count >= this.ill_links.length - 1){
      this.ill_count = 0;
    }
    else{
      this.ill_count++;
    }
      this.ill_src = this.ill_links[this.ill_count];

      
    if(this.gfx_count >= this.gfx_links.length - 1){
      this.gfx_count = 0;
    }
    else{
      this.gfx_count++;
    }
      this.gfx_src = this.gfx_links[this.gfx_count];
  }

  }



