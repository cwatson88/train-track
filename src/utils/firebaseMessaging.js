import firebase from "firebase";

const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  "BM_biqlTl5lT1sSGheAgEuzMJdgT3JWDmh9LTSvj5H6x04meRgXHCFV91t5H7dz_4Ym-V3E7rRU9tAvfZJK6XjM"
);
messaging
  .requestPermission()
  .then(() => {
    console.log("have permission");
    return messaging.getToken();
  })
  .then(token => {
    console.log(token);
  })
  .catch(error => {
    console.log(error, "argh stupid error");
  });

messaging.onMessage(payload => {
  console.log(":onMessage", payload);
});

export default messaging;
