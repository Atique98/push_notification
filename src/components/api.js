// FOR BUTTON


// import { messaging } from '../firebase';

// export const sendTestNotification = (token) => {
//   const testNotification = {
//     data: {
//       title: "Test Notification Title",
//       body: "This is a test notification.",
//     },
//     token: token,
//   };

//   return fetch('https://fcm.googleapis.com/fcm/send', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `AAAAd1e2QUM:APA91bEQ6oLMsAzMVg2ZeEprXvFFmBu-uiMuNhzWc4ElwSLKS8_CSp0_g2WHs-pWSXeHkMH9VT2Kg3QZFFyFip-rOl5i1PKFTjUMZHPgbIGRqnwhpbB5F6DVK5Pno7SpHJCfH3KtbCvh`, // Replace with your server key
//     },
//     body: JSON.stringify(testNotification),
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       console.log("Test notification sent successfully.");
//     })
//     .catch(error => {
//       console.error("Error sending test notification:", error);
//     });
// };
