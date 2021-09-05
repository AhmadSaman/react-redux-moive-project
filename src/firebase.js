import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBDQRqEiJ-8Cl_3sl3GBZbDoDoq_MTwYKE',
	authDomain: 'tmdb-bookmark.firebaseapp.com',
	projectId: 'tmdb-bookmark',
	storageBucket: 'tmdb-bookmark.appspot.com',
	messagingSenderId: '607402594032',
	appId: '1:607402594032:web:4e3d43c8cf5b7d580f7c35',
	measurementId: 'G-7HGJDQZQJZ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
