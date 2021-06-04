import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  
  links= [
    "https://media.discordapp.net/attachments/756897742093287435/844868421827952660/webdev.png?width=408&height=408",
    "https://media.discordapp.net/attachments/756897742093287435/844869230117650452/uiux.png?width=408&height=408",
    "https://media.discordapp.net/attachments/756897742093287435/844869841990582272/appdev.png?width=408&height=408",
    "https://media.discordapp.net/attachments/756897742093287435/844870492413493248/smm.png?width=408&height=408",
    "https://media.discordapp.net/attachments/756897742093287435/844874364977414184/gd_1.png?width=408&height=408",
    "https://media.discordapp.net/attachments/756897742093287435/844871948270043156/de.png?width=408&height=408",
    "https://media.discordapp.net/attachments/756897742093287435/844872512092373012/ve.png?width=408&height=408",
    "https://media.discordapp.net/attachments/756897742093287435/844873306011992075/ms.png?width=408&height=408",
    "https://media.discordapp.net/attachments/756897742093287435/844873938092949525/bot.png?width=408&height=408",
    "https://media.discordapp.net/attachments/756897742093287435/844874895782313994/cw.png?width=408&height=408",
    "https://media.discordapp.net/attachments/756897742093287435/844875506733809674/ill.png?width=408&height=408"
  ];
  count = 0;
  src: string = this.links[this.count];
  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.next(), 5000);
  }
  next():void{
    if(this.count >= this.links.length - 1){
      this.count = 0;
    }
    else{
      this.count++;
    }
      this.src = this.links[this.count];

    
  }

  prev():void{
    if(this.count <= 0){
      this.count = 0;
    }
    else{
      this.count--;
    }
      this.src = this.links[this.count];

    
  }
}
