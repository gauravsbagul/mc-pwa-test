 
import firebase from 'firebase/app';
import 'firebase/messaging';


var firebaseConfig = {
    apiKey: 'AIzaSyCVTTHpKL92SEeoy6u_jppAC0YC2UK75-M',
    authDomain: 'menu-cart-pwa.firebaseapp.com',
    projectId: 'menu-cart-pwa',
    storageBucket: 'menu-cart-pwa.appspot.com',
    messagingSenderId: '“470419810890”',
    appId: '1:470419810890:web:364c9c7801696c76df94b3',
    measurementId: 'G-JEM18R3W2Y',
};
 
 console.log('Log: ~> file: firebase.js ~> line 17 ~> firebase.messaging.isSupported()', firebase.messaging.isSupported())

    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
    
 

export const getToken=(setTokenFound) => {
    //TODO: need to change this vapid key by pratik's account
    return messaging
        .getToken({
            vapidKey: 'BJ8GtXmp1K-IEYetEtefN0muimY8_dxp_VvEXC4WmoKURY2kKdLu2nhAHGcvMhQe0TJiMwl0ogLKD3MDHy1ZMPY',
        })
        .then((currentToken) => {
            if (currentToken) {
                // console.log('current token for client: ', currentToken);
                setTokenFound(currentToken);
                // Track the token -> client mapping, by sending to backend server
                // show on the UI that permission is secured
            } else {
                console.log('No registration token available. Request permission to generate one.');
                setTokenFound(false);
                // shows on the UI that permission is required
            }
        })
        .catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // catch error while creating client token
        });
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });