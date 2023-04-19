var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function User(email, username){
    var raw = JSON.stringify({
        "email": email,
        "name": username,
        "contador": 0
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:1221/user", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

export default User;
