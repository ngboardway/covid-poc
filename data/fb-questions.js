import * as firebase from 'firebase';
import 'firebase/database';

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

export var userTypes = [
  "Student",
  "Faculty/Staff",
  "Visitor"
];


export var campuses = [
  "Allendale",
  "Health Campus",
  "Pew Campus",
  "Traverse City",
  "Holland",
  "Detroit"
];

export var buildings = {
  "Health Campus":
    [
      'Cook DeVos Center for Health Science (CHS)',
      'Raleigh Frankenstein Hall (RFH)'
    ]
};

export var symptomQuestions = [{
  id: 5,
  questionType: "y/n",
  page: 5,
  text: 'Do you have a temperature greater than 100.4 F?'
},
{
  id: 6,
  questionType: 'y/n',
  page: 5,
  text: 'Do you have a new onset of a cough?'
},
{
  id: 7,
  questionType: 'y/n',
  page: 5,
  text: 'Do you have a new onset of shortness of breath?'
},
{
  id: 8,
  questionType: 'y/n',
  page: 5,
  text: 'Do you have a new onset of two or more of the following symptoms?',
  subOptions: [
    'Extreme tiredness',
    'Chills/ shakes with chills',
    'Sore throat',
    'Headache',
    'Body aches',
    'Loss of sense of smell and/or taste',
    'Diarrhea'
  ]
},
{
  id: 9,
  questionType: 'y/n',
  page: 5,
  text: 'Have you had recent known exposure to someone diagnosed with or having symptoms of COVID-19?'
}];