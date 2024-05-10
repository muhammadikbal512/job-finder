import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonTabs
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

import {homeOutline, personOutline, chatboxEllipsesOutline, heartOutline} from 'ionicons/icons'

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonTabs
  ],
})
export class TabsPage implements OnInit {
  constructor() {
    addIcons({ homeOutline, personOutline, chatboxEllipsesOutline, heartOutline });
  }

  ngOnInit() {}
}
