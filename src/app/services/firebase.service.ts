import { Injectable, inject, OnDestroy } from '@angular/core';
import { Firestore, collection, onSnapshot, addDoc, updateDoc, doc } from '@angular/fire/firestore';
import { VocabularyInterface } from '../interfaces/vocabulary-interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnDestroy {
  firestore: Firestore = inject(Firestore);
  unsubscribe: () => void;
  vocabularyList: VocabularyInterface[] = [];

  constructor() {
    this.unsubscribe = onSnapshot(collection(this.firestore, 'vocabulary'), (vocabulary) => {
      this.vocabularyList = [];
      vocabulary.forEach((element) => {
        this.vocabularyList.push(this.setVocabularyObject(element.id, element.data()));
      });
      console.log(this.vocabularyList);
    });
  }

  setVocabularyObject(id: string, obj: any): VocabularyInterface {
    return {
      id: id,
      english: obj.english,
      german: obj.german
    };
  }

  async addVocabularyToDatabase(vocabulary: VocabularyInterface) {
    await addDoc(collection(this.firestore, 'vocabulary'), vocabulary);
  }

  async updateVocabularyInDatabase(id: string, vocabulary: VocabularyInterface) {
    await updateDoc(doc(this.firestore, 'vocabulary', id), {
      english: vocabulary.english,
      german: vocabulary.german
    });
  }

  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
