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
  "Battle Creek Regional Outreach Center",
  "Detroit",
  "Holland",
  "Traverse City"
];

export var buildings = {
  "Health Campus":
    [
      'Cook DeVos Center for Health Science (CHS)',
      'Raleigh Frankenstein Hall (RFH)'
    ],
  "Allendale": [
    "Zumberg Hall"
  ]
};

export var symptomQuestionsSection = [{
  id: 1,
  questionType: "y/n",
  title: 'Do you have a temperature greater than 100.4 F?',
  data: ["y/n"]
},
{
  id: 2,
  questionType: 'y/n',
  title: 'Do you have a new onset of a cough?',
  data: ["y/n"]
},
{
  id: 3,
  questionType: 'y/n',
  title: 'Do you have a new onset of shortness of breath?',
  data: ["y/n"]
},
{
  id: 4,
  questionType: 'y/n',
  title: 'Do you have a new onset of two or more of the following symptoms?',
  data: [
    'Extreme tiredness',
    'Chills/ shakes with chills',
    'Sore throat',
    'Headache',
    'Body aches',
    'Loss of sense of smell and/or taste',
    'Diarrhea',
    'y/n'
  ]
},
{
  id: 5,
  questionType: 'y/n',
  title: 'Have you had recent known exposure to someone diagnosed with or having symptoms of COVID-19?',
  data: ["y/n"]
}];



/*

  - Allendale
    - Zumberg Hall
  - Health Campus
    - same as above
  - Pew Campus
    - none
  - Battle Creek Regional Outreach Center
    - none
  - Detroit
    - none
  - Holland
    - none
  - Traverse City
    - none
*/