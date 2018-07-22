// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');


const config = {
    apiKey: "AIzaSyCvb0lfs-_pbRwhRXmfVDR7C_JZ_9HVZtc",
    authDomain: "main-train.firebaseapp.com",
    databaseURL: "https://main-train.firebaseio.com",
    projectId: "main-train",
    storageBucket: "main-train.appspot.com",
    messagingSenderId: "778576234482"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = 'Background Message Title';
    var notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

