# Data
## What does my database look like?

### Question
| Field Name | Notes  |
| ---------- | ------ |
| Id  |
| Text |
| Next Question Id |
| List of sub points | Needed for the question asking about a collection of symptoms |


### Response
| Field Name | Notes |
| ---------- | ---- |
| User Id | Ties to their account somehow, or maybe the user owns the list |
| Question Id | The id of the question with the response |
| Answer | Either a yes/ no or a value corresponding with a potential enum/ id of a different entity in the cases of buildings, user type. 


### User
| Field Name | Notes |
| ---------- | ---- |
| Sessions | Collection of sessions |
| Email | 
| G#? | Input as part of the setup process so that we don't have to ask again? | 

### Session
| FieldName | Notes |
| --------- | ----- |
| Session Start Date | When the survey response begins |
| Session End Date | When the survey response ends, the time that is shown to the user at the end |
| Responses | Collection of responses | 