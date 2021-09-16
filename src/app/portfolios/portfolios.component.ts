import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolios',
  templateUrl: './portfolios.component.html',
  styleUrls: ['./portfolios.component.css']
})
export class PortfoliosComponent {
  config = {
        width: "75vw",
        height: "40vw",
        autoPlay:true, //autoplay required or not defaults to false
        delay: 4000 // delay for autoplay
  }
  config2 = {
        width: "30vw",
        height: "40vw",
        autoPlay:true, //autoplay required or not defaults to false
        delay: 4000 // delay for autoplay
  }
  web_links2 = [
    {
 image:  "https://media.discordapp.net/attachments/847743058766331924/848416714848600105/unknown.png"},
 {  image: "https://media.discordapp.net/attachments/847743058766331924/848416844427558912/unknown.png"},
 {  image: "https://media.discordapp.net/attachments/847743058766331924/848416436203683902/unknown.png" }
  ];
  ill_links2 = [
    {  image: "https://media.discordapp.net/attachments/847743058766331924/849954558670143508/image2.png?width=372&height=438" },
    { image: "https://media.discordapp.net/attachments/847743058766331924/849954399118688286/Blue_Post.png?width=296&height=438" },
    { image: "https://media.discordapp.net/attachments/848237034019094586/849682117440569374/image0.jpg?width=350&height=438" },
    { image: "https://media.discordapp.net/attachments/847743058766331924/849953806161805323/unknown.png?width=291&height=438" },
    { image: "https://media.discordapp.net/attachments/847743058766331924/849953706552459294/unknown.png?width=339&height=438" },
    { image: "https://media.discordapp.net/attachments/847743058766331924/849953651631849492/unknown.png?width=716&height=438" }
  ];

  gfx_links2 = [
    { image: "https://media.discordapp.net/attachments/847743058766331924/850307062541582336/unknown.png?width=374&height=431" },
    { image: "https://media.discordapp.net/attachments/847743058766331924/850306361581633537/unknown.png?width=351&height=432" },
    { image: "https://media.discordapp.net/attachments/847743058766331924/850306701361414164/unknown.png?width=559&height=431" },
    { image: "https://media.discordapp.net/attachments/847743058766331924/850306763928109066/unknown.png?width=562&height=432" },
    { image: "https://media.discordapp.net/attachments/847743058766331924/850306811898363964/unknown.png?width=582&height=432" },
    { image: "https://media.discordapp.net/attachments/847743058766331924/850306857843294228/unknown.png?width=560&height=432" }
  ];

  constructor() { }


  }



