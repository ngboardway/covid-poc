import * as firebase from 'firebase';
import 'firebase/database';
import { firebaseConfig } from './fb-credentials';

export function initDB() {
  firebase.initializeApp(firebaseConfig);
}
