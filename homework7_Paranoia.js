var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    },
];

var re = /([a-zA-Z0-9._-]+)@(gmail|yahoo)\.com/;
var matchedEmails = [];

for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (re.test(email)) {
        matchedEmails.push(email);
    }
}

console.log(matchedEmails);