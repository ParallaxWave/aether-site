import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import firebase from 'firebase/app';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor( public afAuth: AngularFireAuth, public snackBar: MatSnackBar ) { }
  user: any;
  username: string;
  email: string;
  icon: string;
  service: string = "";
  desc: string;
  budget: string;
  url = "https://AceBackend.parallaxwave.repl.co/send/";

  async doGoogleLogin(){
  return new Promise<any>(async (resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const credentials = await this.afAuth.signInWithPopup(provider);
    this.user = credentials.additionalUserInfo?.profile;
    this.username = this.user.name;
    this.email = this.user.email;
    this.icon = this.user.picture;
  })
}

  async submit(){
    if(this.username && this.service && this.desc && this.budget){
      const { username, service, desc, email, icon, budget } = this;
      const data = { username, service, desc, email, icon, budget };
      const options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      const req = await fetch(this.url, options);
      const res = await req.json();
      if(res){
        this.snackBar.open("Your order was placed! Join our Discord for further coordination", "Ok", {
          duration: 6000,
        });
      }
      this.username = this.budget = this.service = this.desc = "";
    }
  }

  ngOnInit(): void {
  }

}
