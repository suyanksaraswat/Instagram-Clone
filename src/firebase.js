import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyBigkCJ7yFPOAQch1PvKayYuB2JRSBNTiE",
	authDomain: "instagram-clone-ef527.firebaseapp.com",
	databaseURL: "https://instagram-clone-ef527.firebaseio.com",
	projectId: "instagram-clone-ef527",
	storageBucket: "instagram-clone-ef527.appspot.com",
	messagingSenderId: "1095308979660",
	appId: "1:1095308979660:web:71d0548d8628b28965c169",
	measurementId: "G-TEHM1QB1CR"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
