let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;



//XMLHttpRequest = Es un objeto que esta adentro de JavaScript, 
// el cual nos va a permitir hacer peticiones hacia algún servidor 
// en la Nube.


function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    // activar el asinscronimos con el tercer valor que viene por defecto en true
    xhttp.open('GET', url_api,true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4) {

            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));

            }else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}