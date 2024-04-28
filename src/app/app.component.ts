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

}
