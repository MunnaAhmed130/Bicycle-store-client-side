const firebaseConfig = {
    // apiKey: "AIzaSyBLMURCXPpLxv3ig3dBrkv0GXphqG1Z70E",
    // authDomain: "bicycle-store-41d3e.firebaseapp.com",
    // projectId: "bicycle-store-41d3e",
    // storageBucket: "bicycle-store-41d3e.appspot.com",
    // messagingSenderId: "537492355281",
    // appId: "1:537492355281:web:b3ff1217bce6f100aa6df0"
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

export default firebaseConfig;