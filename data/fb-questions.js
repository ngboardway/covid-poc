import * as firebase from 'firebase';
import 'firebase/database';
import { firebaseConfig } from './fb-credentials';

export function initReminderDB() {
  firebase.initializeApp(firebaseConfig);
}

export function setupQuestionListener(updateFunc) {
  firebase
    .database()
    .ref(`questionSet/`)
    .on('value', (snapshot) => {
      if (snapshot?.val()) {
        const fbObject = snapshot.val();
        const newArr = [];
        Object.keys(fbObject).map((key, index) => {
          console.log(key, '||', index, '||', fbObject[key]);
          newArr.push({ ...fbObject[key], id: key });
        });
        updateFunc(newArr);
      } else {
        updateFunc([]);
      }
    });
}