import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, 
  IonList, IonItem, IonLabel, IonInput, 
  IonTextarea, IonSelect, IonSelectOption, 
  IonButton, IonDatetime, IonDatetimeButton, IonModal 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, 
    IonList, IonItem, IonLabel, IonInput, 
    IonTextarea, IonSelect, IonSelectOption, 
    IonButton, IonDatetime, IonDatetimeButton, IonModal
  ],
})
export class Tab2Page {
  constructor() {}
}
