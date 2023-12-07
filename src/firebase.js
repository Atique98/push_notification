// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";

// const firebaseConfig = {
//   apiKey: "AIzaSyCZP1A9WnM18g7zCI4JsxweMvICinfTnm4",
//   authDomain: "push-notification-51729.firebaseapp.com",
//   projectId: "push-notification-51729",
//   storageBucket: "push-notification-51729.appspot.com",
//   messagingSenderId: "512572670275",
//   appId: "1:512572670275:web:05fa8f7869d2354902eff6",
//   measurementId: "G-W7953P62KC",
// };

// initializeApp(firebaseConfig);

// const messaging = getMessaging();

// export const requestForToken = () => {
//   return getToken(messaging, {
//     vapidKey:
//       "BLyJKG8IWa2q1DGyG_EENdVfgpP0r1h-QuR1BOSmaV8Ng4yix0bR4svF4HcsbAq1dXB2tR0y1H3slkqkVQnXWQw",
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log("current token for client: ", currentToken);
//         // Perform any other neccessary action with the token
//       } else {
//         // Show permission request UI
//         console.log(
//           "No registration token available. Request permission to generate one."
//         );
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//     });
// };

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     onMessage(messaging, (payload) => {
//       console.log("payload", payload);
//       resolve(payload);
//     });
//   });



import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCZP1A9WnM18g7zCI4JsxweMvICinfTnm4",
  authDomain: "push-notification-51729.firebaseapp.com",
  projectId: "push-notification-51729",
  storageBucket: "push-notification-51729.appspot.com",
  messagingSenderId: "512572670275",
  appId: "1:512572670275:web:05fa8f7869d2354902eff6",
  measurementId: "G-W7953P62KC",
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey:
      "BLyJKG8IWa2q1DGyG_EENdVfgpP0r1h-QuR1BOSmaV8Ng4yix0bR4svF4HcsbAq1dXB2tR0y1H3slkqkVQnXWQw",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // Perform any other necessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    });
});

export default app;
