import { Component, inject } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { VocabularyListComponent } from './vocabulary/vocabulary-list/vocabulary-list.component';
import { AddVocabularyComponent } from "./vocabulary/add-vocabulary/add-vocabulary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VocabularyListComponent, AddVocabularyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firebase = inject(FirebaseService);

  constructor() {
    this.firebase;
  }
}
