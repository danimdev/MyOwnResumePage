var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault();

    var name = document.getElementById('NameInput').value;
    var email = document.getElementById('EmailInput').value;
    var subject = document.getElementById('SubjectInput').value;
    var message = document.getElementById('MessageInput').value;
    var body = 'name: ' + name + '<br/> email:' + email + '<br/> subject ' + subject +
    '<br/> message' + message; 

    alert("hi");

    Email.send({
        Host : "provider",
        Username : "username",
        Password : "password",
        To : 'toemail',
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
});

