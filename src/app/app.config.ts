import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"simple-vocab-demo","appId":"1:722001361632:web:108f3fb8e4c870d0ee6e85","storageBucket":"simple-vocab-demo.firebasestorage.app","apiKey":"AIzaSyDagDTH68zjrsoaNw6PuL074wpbBmH_zDA","authDomain":"simple-vocab-demo.firebaseapp.com","messagingSenderId":"722001361632"})), provideFirestore(() => getFirestore())]
};
