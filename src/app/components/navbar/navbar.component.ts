import { Component, OnInit, HostListener } from '@angular/core';
import { ActivePageService } from 'src/app/service/active-page.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeTab: string = 'home';
  navOpen: boolean = false;
  hover: boolean = false;
  count: any;

  @HostListener('document:scroll', ['$event'])
  public onViewPortScroll() {




  }

  constructor(private tabService: ActivePageService, private router: Router) {
    console.log(this.count);
  }

  ngOnInit(): void {
    this.tabService.count.subscribe(c => {
      this.count = c;
    })
  }

  navigateSection(section: string) {
    this.activeTab = section;
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
    this.router.navigate([section])
    this.navOpen = false;
  }

  operateNav() {
    console.log('open nav')
    // document.getElementById("mySidenav").style.width = "250px";
    this.navOpen = !this.navOpen;
  }

}
