import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'Anusha';
  email = 'anusha.naach@gmail.com'

  ngOnInit(): void {

    // When the user clicks anywhere outside of the modal, close it
    // let modal = document.getElementById('ticketModal');
    // window.onclick = function (event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }
  }

  // Used to toggle the menu on small screens when clicking on the menu button
  callMe() {
    let x = document.getElementById("navDemo");
    if (x?.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      if(x !== null)
      x.className = x?.className.replace(" w3-show", "");
    }
  }

  openLink(arg0: string) {
      switch(arg0){
        case 'YT':{
          window.open('https://m.youtube.com/@venugopal.anusha');
          break;
        }
        case 'IG':{
          window.open('https://www.instagram.com/venugopal.anusha');
          break;
        }
      }
    }

    openWhatsApp(arg: string){
      let message = ''
      switch(arg){
        case 'CE': {
          message = 'Corporate events';
          break;
        }
        case 'SAD': {
          message = 'School annual day';
          break;
        }
        case 'COE': {
          message = 'College events';
          break;
        }
        case 'COC': {
          message = 'Choreograhy for concerts';
          break;
        }
      }
      window.open(`https://wa.me/+919841052103?text=Hi Anusha, I want to know more about ${message}`)
    }

    testPhonepe() {
      window.open(`phonepe://pay?pa=ahsuna1994-1@okaxis&pn=+919790002151&tn=Test UPI&am=20&cu=INR&mc=1234&tr=01234`)
      }
      testPaytm() {
        window.open(`paytmmp://pay?pa=9790002151@upi&pn=+919790002151&tn=Test UPI&am=20&cu=INR&mc=1234&tr=01234`)
      }
      testGpay() {
        window.open(`tez://upi/pay?pa=anbuselvisadasivam@okhdfcbank&pn=+91 9790002151&tn=Test UPI&am=20&cu=INR&mc=1234&tr=01234`)
      }
}
