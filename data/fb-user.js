import * as firebase from 'firebase';
import 'firebase/database';

export function setUser(item, id) {
  return firebase.database().ref(`users/${id}`).set(item);
}

export function createSurveyResponse(response, userId) {
  return firebase.database().ref(`users/${userId}/responses`).push(response);
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