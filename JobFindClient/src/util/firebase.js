import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCyyI-WJV33wobsPi0o2-VCEtbEde6qNm8",
    authDomain: "verify-otp-job-finder.firebaseapp.com",
    projectId: "verify-otp-job-finder",
    storageBucket: "verify-otp-job-finder.appspot.com",
    messagingSenderId: "975832023455",
    appId: "1:975832023455:web:6f48c61829bf29311b3daa",
    measurementId: "G-X8LLRG66RL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase;