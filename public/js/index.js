let store = (path, data) => {
    firebase.database().ref(path).set(data);
}

let read = (path) => {
   return firebase.database().ref(path).once();
}

let onClick = (selector, event) => {
    let tag = document.querySelector(selector);
    tag.addEventListener("click", event);
    return tag;
}


let addChildHTML = (selector, html) => {

}

document.addEventListener("DOMContentLoaded", () => {
    onClick("[submit-button]", event => {
        let returnInput = document.querySelector("[return-input]").value;
        let messageInput = document.querySelector("[message-input]").value;
        let submitData = {
            "response": returnInput,
            "message": messageInput 
        }
        store(`contact/${btoa(returnInput)}`, submitData);
        console.log("messageSent");
    });
});