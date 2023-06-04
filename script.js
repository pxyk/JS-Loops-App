var k_username = "guest";
var k_password = "12345";
var loggedin = false

while (loggedin == false) {
var username = prompt("kullanıcı adı:");
var password = prompt("parola : ");

if ((k_username == username) && (k_password == password)) {
    console.log("giriş yapıldı");
    loggedin=true;
}else{
    console.log("hatalı kullanıcı adı ve ya parola");
}
}