import { Actions } from 'react-native-router-flux';
import {
	EMPLOYEE_UPDATE,
	EMPLOYEE_CREATE,
	EMPLOYEES_FETCH_SUCCESS,
	EMPLOYEE_SAVE_SUCCESS,
} from './types';

const firebase = require('firebase');

export const employeeUpdate = ({ prop, value }) => {
	return {
		type: EMPLOYEE_UPDATE,
		// object with key prop which is name phone shift and key value
		payload: { prop, value }
	};
};

export const employeeCreate = ({ name, phone, shift }) => {
	// will get the details of the current user including uid
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		// path in our data store
		firebase.database().ref(`/users/${currentUser.uid}/employees/`)
			.push({ name, phone, shift })
			// go back to key employeeList and reset the form, don't show a back button to the filled up form
			.then(() => {
				dispatch({ type: EMPLOYEE_CREATE });
				Actions.employeeList({ type: 'reset' });
			});
	};
};

export const employeesFetch = () => {
	// will get the details of the current user including uid
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/employees/`)
			// any time any data comes accross this ref, call snapshot function (obj function that describes the data) with the defined object and dispatch it
			.on('value', snapshot => {
				dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    // like push but 'set' is for updating
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    	// like set and push, this one is for removing...
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  };
};
