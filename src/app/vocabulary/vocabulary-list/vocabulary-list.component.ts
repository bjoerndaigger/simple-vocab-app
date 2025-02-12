import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vocabulary-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './vocabulary-list.component.html',
  styleUrl: './vocabulary-list.component.scss'
})
export class VocabularyListComponent {
  firebaseService = inject(FirebaseService)
  isEdited = false;
  selectedVocabularyIndex: number | null = null;
  vocabularyId?: string = '';
  editedVocabulary = {
    english: '',
    german: ''
  };

  editVocabulary(index: number) {
    this.isEdited = true;
    this.selectedVocabularyIndex = index;
    this.vocabularyId = this.firebaseService.vocabularyList[index].id;
    this.editedVocabulary = {
      english: this.firebaseService.vocabularyList[index].english,
      german: this.firebaseService.vocabularyList[index].german
    };
  }

  saveEdit() {
    console.log(this.vocabularyId, this.editedVocabulary);
  }

  cancelEdit() {
    this.isEdited = false;
    this.selectedVocabularyIndex = null;
    this.vocabularyId = '';
  }
}
