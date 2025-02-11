import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-vocabulary',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-vocabulary.component.html',
  styleUrl: './add-vocabulary.component.scss'
})
export class AddVocabularyComponent {
  firebaseService = inject(FirebaseService);
  vocabulary = {
    english: '',
    german: ''
  };

  submitVocabulary() {
    this.firebaseService.addVocabularyToDatabase(this.vocabulary);
    this.clearInputFields();
  }

  clearInputFields() {
    this.vocabulary.english = '';
    this.vocabulary.german = '';
  }
}
