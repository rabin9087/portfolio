import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAJYiwb1v0sXh96mpx6GGTQ8JPJKFRv0dQ',
	authDomain: 'my-react-cricscore-app.firebaseapp.com',
	projectId: 'my-react-cricscore-app',
	storageBucket: 'my-react-cricscore-app.appspot.com',
	messagingSenderId: '464625592536',
	appId: '1:464625592536:web:0888d27e9c84e8606dcfad'
};
firebase.initializeApp(firebaseConfig);
export const dataref = firebase.database();
export const storage = firebase.storage();
export default firebase;
