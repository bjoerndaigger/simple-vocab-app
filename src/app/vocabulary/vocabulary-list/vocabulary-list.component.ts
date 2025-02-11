import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-vocabulary-list',
  standalone: true,
  imports: [],
  templateUrl: './vocabulary-list.component.html',
  styleUrl: './vocabulary-list.component.scss'
})
export class VocabularyListComponent {
  firebaseService = inject(FirebaseService)
}
