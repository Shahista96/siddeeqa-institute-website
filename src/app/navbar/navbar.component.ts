import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  subItems: string[];
  showSubMenu: boolean;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  selectedLanguage:string = 'EN';
  otherLanguage:string = 'UR';
  selectedContent:string = 'home';
  subMenu:string = '';

  menuItems = [
    { name: 'Home', subItems: [] },
    { name: 'Our Exemplars', subItems: [] },
    { name: 'Madrasah', subItems: ['Our Courses', 'Traditional Islamic Education'],  showSubMenu: false },
    { name: 'Women\'s Wellness Center', subItems: ['Submenu 3', 'Submenu 4'] ,  showSubMenu: false},
    { name: 'FAQs', subItems: ['Submenu 1', 'Submenu 2'], showSubMenu: false },
    { name: 'Contact Us', subItems: ['Submenu 3', 'Submenu 4'], showSubMenu: false },
    // Add more menu items with sub-items as needed
  ];

  htmlContent: string = '';

  showDropdown: boolean[] = [];

  toggleDropdown(menuItem:any) {
    menuItem.showSubMenu = !menuItem.showSubMenu;
  }

  constructor() { 
    this.menuItems.forEach(() => this.showDropdown.push(false));
  }

  ngOnInit(): void {
    
  }

  menuChanged(mainMenu:string, subMenu:string){

    if(mainMenu == 'language'){
      this.onLanguageChange();
    }else{
      this.selectedContent = mainMenu;
      this.subMenu = subMenu;
    }
   
  }

  onLanguageChange(){
    if(this.selectedLanguage == 'EN'){
      this.selectedLanguage = 'UR';
      this.otherLanguage = 'EN';
    }else{
      this.selectedLanguage = 'EN';
      this.otherLanguage = 'UR';
    }
  }

  
}
