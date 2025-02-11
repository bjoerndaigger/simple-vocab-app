import { Injectable, inject, OnDestroy } from '@angular/core';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService implements OnDestroy {
  firestore: Firestore = inject(Firestore);
  unsubscribe: () => void;

  constructor() {
    this.unsubscribe = onSnapshot(collection(this.firestore, 'vocabulary'), (vocabulary) => {
      vocabulary.forEach((element) => {
        console.log(element.id, element.data());
      });

    });
  }

  ngOnDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
