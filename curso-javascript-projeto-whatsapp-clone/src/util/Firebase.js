const firebase = require("firebase");
require("firebase/firestore");
export class Firebase {
  constructor() {
    this._config = {
      apiKey: "AIzaSyDp1vv8b1WxNUZ8RL6sepvlDMTt4JMNZrY",
      authDomain: "whatsapp-clone-cd289.firebaseapp.com",
      databaseURL: "https://whatsapp-clone-cd289.firebaseio.com",
      projectId: "whatsapp-clone-cd289",
      storageBucket: "gs://whatsapp-clone-cd289.appspot.com",
      messagingSenderId: "313706738902",
      appId: "1:313706738902:web:1606e860b614f26e7cc577"
    };
    this.init();
  }

  initAuth() {
    return new Promise((s, f) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          let token = result.credential.accessToken;
          let user = result.user;
          s({ user, token });
        })
        .catch(err => {
          f(err);
        });
    });
  }

  init() {
    if (!window._initializedFirebase) {
      firebase.initializeApp(this._config);
      firebase.firestore().settings({});
      window._initializedFirebase = true;
    }
  }

  static db() {
    return firebase.firestore();
  }

  static hd() {
    return firebase.storage();
  }
}
