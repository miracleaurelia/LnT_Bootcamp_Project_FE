const firebaseConfig = {
    apiKey: "AIzaSyDp9cMVLlPFSvJhLEdJWeoOUbw1DU5JaX4",
    authDomain: "lnt-bootcamp-project.firebaseapp.com",
    projectId: "lnt-bootcamp-project",
    storageBucket: "lnt-bootcamp-project.appspot.com",
    messagingSenderId: "1040016054314",
    appId: "1:1040016054314:web:d6d0c00451d1a387c1cb53",
    measurementId: "G-2MR5GG421W"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

let contacts = db.collection("contact");

var flag = 1;

$(".contact-form").submit((event) => {
    event.preventDefault();

    const inputName = $("#name").val();
    const inputEmail = $("#email").val();
    const inputPhone = $("#phone").val();
    const inputComment = $("#comment").val();

    let newContact = {
        name: inputName,
        email: inputEmail,
        phone: inputPhone,
        comment: inputComment
    }
    if (inputName === "") {
        flag = 0;
        $("#error-name").html("Name cannot be empty");
    }
    else {
        $("#error-name").html("");
    }

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(inputEmail)) {
        flag = 0;
        $("#error-email").html("Invalid email");
    }
    else {
        $("#error-email").html("");
    }

    if (inputPhone.length >= 2 && inputPhone.length <= 14) {
        if (inputPhone.charAt(0) === '0' && inputPhone.charAt(1) === '8') {
            $("#error-phone").html("");
        }
        else {
            flag = 0;
            $("#error-phone").html("Invalid phone number");
        }
    }
    else {
        flag = 0;
        $("#error-phone").html("Invalid phone number");
    }

    var words = $.trim(inputComment).split(" ");
    if (words.length < 5 || words.length > 100) {
        flag = 0;
        $("#error-comment").html("Must be min 5 words & max 100 words");
    }
    else {
        $("#error-comment").html("");
    }

    console.log(flag);
    if (flag === 1) {
        contacts.add(newContact).then((response) => {
            return response.get();
        })
        .then((response) => {
            $("#name").val("");
            $("#email").val("");
            $("#phone").val("");
            $("#comment").val("");
            alert("Thank you for contacting me!");
        });
    }
    else {
        alert("Please input your data appropriately");
        flag = 1;
    }
});