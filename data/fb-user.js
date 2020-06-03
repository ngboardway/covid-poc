import * as firebase from 'firebase';
import 'firebase/database';

export function setUser(item, id) {
  return firebase.database().ref(`users/${id}`).push(item);
}

export function removeUser(item) {
  firebase.database().ref(`users/${item.id}`).remove();
}

export function setupUserListener(id, updateFunc) {
  firebase
    .database()
    .ref(`users/${id}`)
    .on('value', (snapshot) => {
      if (snapshot?.val()) {
        const fbObject = snapshot.val();
        updateFunc(fbObject);
      } else {
        updateFunc(null);
      }
    });
}