import * as firebase from 'firebase';
import 'firebase/database';

export function createSurveyResponse(response, userId) {
  return firebase.database().ref(`users/${userId}/responses`).push(response);
}

export function setupResponseListener(id, updateFunc) {
  firebase
    .database()
    .ref(`users/${id}/responses`)
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
        updateFunc(null);
      }
    });
}