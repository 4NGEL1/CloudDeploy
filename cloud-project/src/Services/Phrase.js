
function Phrase(){
    var phrase;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:1221/phrase", requestOptions)
        .then(response => response.text())
        .then(result =>
            {
                let response = JSON.parse(result);
                let data = JSON.stringify(response.response)
                let get = JSON.parse(data);
                phrase = get.frase;
                console.log(phrase);
            })
        .catch(error => console.log('error', error));

    return phrase;
}

export default Phrase;