import firebase from 'firebase'

    const firebaseConfig = {
        apiKey: "AIzaSyAvLZ6wnDeMbY8oU454WfQLNjlCPTs3n0c",
        authDomain: "devspace-hackathon-77b20.firebaseapp.com",
        projectId: "devspace-hackathon-77b20",
        storageBucket: "devspace-hackathon-77b20.appspot.com",
        messagingSenderId: "68026921124",
        appId: "1:68026921124:web:5d4aa6c1c90401b2023631",
        measurementId: "G-8FSJCJX2LY"
      };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db