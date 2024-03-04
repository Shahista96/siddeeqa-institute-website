import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { 
    this.menuItems.forEach(() => this.showDropdown.push(false));
  }

  ngOnInit(): void {
    
  }

  onHomeMenuClicked(){
    this.selectedContent = 'home';
  }

  onOurExemplarsMenuClicked(){
    this.selectedContent = 'exemplars';
  }

  ourCoursesMenuClicked(){
    this.selectedContent = 'our_courses';
  }

  onWellnessCenterClicked(){
    this.selectedContent = 'wellness_center';
  }

  onFAQsSiddeeqaInstitute(){
    this.selectedContent = 'faqs';
    this.subMenu = 'siddeeqa_institute';
  }

  onFAQsFinancialMattersClicked(){
    this.selectedContent = 'faqs';
    this.subMenu = 'financial_matters';
  }

  onFAQsTechnicalMattersClicked(){
    this.selectedContent = 'faqs';
    this.subMenu = 'technical_matters';
  }

  onFAQsAdmissionInformationClicked(){
    this.selectedContent = 'faqs';
    this.subMenu = 'admission_information';
  }

  onFAQsMiscellaneousClicked(){
    this.selectedContent = 'faqs';
    this.subMenu = 'miscellaneous';
  }

  onContactUsClicked(){
    this.selectedContent = 'contact_us'
  }

  onAboutTheCenterClicked(){
    this.selectedContent="wellness_center";
    this.subMenu = "about_center";
  }

  onSupportGroupsClicked(){
    this.selectedContent="wellness_center";
    this.subMenu = "support_groups";
  }

  onRevertSupportServicesClicked(){
    this.selectedContent="wellness_center";
    this.subMenu = "revert_support_services";

  }

  onWorkshopsAndLecturesClicked(){
    this.selectedContent="wellness_center";
    this.subMenu = "workshops_and_services";

  }

  onResourcesForWomanClicked(){
    this.selectedContent="wellness_center";
    this.subMenu = "resources_for_woman";

  }

  onResourcesForMuslimMothersClicked(){
    this.selectedContent="wellness_center";
    this.subMenu = "resources_for_muslim_mothers";

  }
}
