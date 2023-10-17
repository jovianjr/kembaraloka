import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
	apiKey: "AIzaSyBrcxrYfyKoqfmrNPoJIiHuVguRBGJyLUs",
	authDomain: "ppsmb-ugm-2022.firebaseapp.com",
	projectId: "ppsmb-ugm-2022",
	storageBucket: "ppsmb-ugm-2022.appspot.com",
	messagingSenderId: "236514549189",
	appId: "1:236514549189:web:c0a8be8b88a3928c3a7fac",
	measurementId: "G-2833FDVLGH"
};

let app, analytics;

if (typeof window != 'undefined') {
	app = initializeApp(firebaseConfig);
	analytics = getAnalytics();
}

export { app, analytics, logEvent };
