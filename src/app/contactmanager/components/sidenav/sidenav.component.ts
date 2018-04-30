import { Component, OnInit } from '@angular/core';
import { NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher:MediaQueryList = 
   matchMedia(`(max-width:${SMALL_WIDTH_BREAKPOINT}px)`)

   users:Observable<User[]>

  constructor(zone: NgZone , 
    private userService:UserService,
    private route:Router) { 
    this.mediaMatcher.addListener(mql =>
           zone.run(() => this.mediaMatcher = mql));
  }


  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(
      data => {
        console.log('data',data)
        if(data.length > 0) {
          this.route.navigate(['/contactmanager',data[0].id]);

        }
     
      }
    )
  }

  isScreenSmall():boolean {
    return this.mediaMatcher.matches;
  }

}
