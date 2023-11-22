
const firebaseConfig = {
    apiKey: "AIzaSyDiQJdRAMc0xCOm5pEyyldIuFPN_D8KFNg",
    authDomain: "fir-3cd34.firebaseapp.com",
    databaseURL: "https://fir-3cd34-default-rtdb.firebaseio.com",
    projectId: "fir-3cd34",
    storageBucket: "fir-3cd34.appspot.com",
    messagingSenderId: "998292932734",
    appId: "1:998292932734:web:34a8db435bf6bd78e4302f",
    measurementId: "G-0K8YGNKZ2H"
      };
      
      // initialize firebase
      firebase.initializeApp(firebaseConfig);
      
      // reference your database
      var contactFormDB = firebase.database().ref("contactForm");
      
      document.getElementById("contactForm").addEventListener("submit", submitForm);
      
      function submitForm(e) {
        e.preventDefault();
      
        var name = getElementVal("name");
        var emailid = getElementVal("emailid");
        var msgContent = getElementVal("msgContent");
      
        saveMessages(name, emailid, msgContent);
      
        //   enable alert
        document.querySelector(".alert").style.display = "block";
      
        //   remove the alert
        setTimeout(() => {
          document.querySelector(".alert").style.display = "none";
        }, 3000);
      
        //   reset the form
        document.getElementById("contactForm").reset();
      }
      
      const saveMessages = (name, emailid, msgContent) => {
        var newContactForm = contactFormDB.push();
      
        newContactForm.set({
          name: name,
          emailid: emailid,
          msgContent: msgContent,
        });
      };
      
      const getElementVal = (id) => {
        return document.getElementById(id).value;
      };
      