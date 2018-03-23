//vanilla js ajax example

    function loadDoc() {

        let xhttp = new XMLHttpRequest(); //happens 1st

        xhttp.onreadystatechange = function () { //happens 4th
            if(this.readyState == 4 && this.status == 200) {
                let data = this.responseText;
                let myObj = JSON.parse(data);
                console.log(myObj);
                document.getElementById('demo').innerHTML += '<img src="http://openweathermap.org/img/w/'+ myObj.weather[0].icon +'.png">';
                document.getElementById('demo').innerText += myObj.weather[0].description;
            }
        };
        xhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=provo&appid=cc8ef8e5c209d938ab3801daa42b5e31', true); //happens 2nd
        xhttp.send(); //happens 3rd
    }


//jquery version of above ^^

    function jqCall() {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=provo&appid=cc8ef8e5c209d938ab3801daa42b5e31',
            type: 'GET',
            jsonp: true,
            success: function (data, status) {
                console.log(data);
                let myObj = JSON.parse(data);
                $('#demo').append(myObj.weather[0].description);
            }
        });
    }