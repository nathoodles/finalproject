$.getJSON('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Bellingham%2C%20WA/next7days?unitGroup=us&include=days&key=RN9SU77YX2XAYK9GNBEPMA6JT&contentType=json', function(data) {
    let date = '';
    let info = new Array();

    data['days'].forEach(function (d) {
        info.push(new Array(d['datetime'], d['snow'], d['precipprob'], d['cloudcover'], d['tempmax'], d['tempmin']));
    });

    if(info[0][1] != 0.0){    
        $('#currentDay').append('<th><img src="images/snowy.webp" alt="Snow"></th>');
    }else if(info[0][2] != 0.0){
        $('#currentDay').append('<th><img src="images/rainy.webp" alt="Rainy"></th>');
    }else if(info[0][3] != 0.0){
        $('#currentDay').append('<th><img src="images/cloudy.webp" alt="Cloudy"></th>');
    }else{
        $('#currentDay').append('<th><img src="images/sunny.webp" alt="Sunny"></th>');
    }
    $('#currentDay').append('<th><br> <h2>Today</h2>Max: ' + info[0][4] + '&#8457<br>Min: ' + info[0][5] +'&#8457<br>Chance of rain: ' + info[0][2] + '%</th>');


    $('#sevenDay').append('<tr>');
    for(let i = 0; i< 7; i++){
        date = info[i][0]; 
        date = date.slice(5);
        date = date.replace('-', '/'); 
        $('#sevenDay').append('<td>' + date + '</td>');
    }
    $('#sevenDay').append('</tr>');
    $('#sevenDay').append('<tr>');
    for(let i = 0; i< 7; i++){
        date = info[i][0]; 
        date = date.slice(5);
        date = date.replace('-', '/');
        if(info[i][1] != 0.0){    
            $('#sevenDay').append('<th onclick="alert(\'' + date + ' - Snow - Max: ' + info[i][4] + ' - Min: ' + info[i][5] + ' - Chance of rain: ' + info[i][2] + '%\');"><img src="images/snowy.webp" alt="Snow"></th>');
        }else if(info[i][2] != 0.0){
            $('#sevenDay').append('<th onclick="alert(\'' + date + ' - Rain - Max: ' + info[i][4] + ' - Min: ' + info[i][5] + ' - Chance of rain: ' + info[i][2] + '%\');"><img src="images/rainy.webp" alt="Rain"></th>');
        }else if(info[i][3] != 0.0){
            $('#sevenDay').append('<th onclick="alert(\'' + date + ' - Cloudy - Max: ' + info[i][4] + ' - Min: ' + info[i][5] + ' - Chance of rain: ' + info[i][2] + '%\');"><img src="images/cloudy.webp" alt="Cloudy"></th>');
        }else{
            $('#sevenDay').append('<th onclick="alert(\'' + date + ' - Sunny - Max: ' + info[i][4] + ' - Min: ' + info[i][5] + ' - Chance of rain: ' + info[i][2] + '%\');"><img src="images/sunny.webp" alt="Sunny"></th>');
        }
    }
    $('#sevenDay').append('</tr>');
    $('#sevenDay').append('<tr>');
    for(let i = 0; i< 7; i++){
        $('#sevenDay').append('<td>' + info[i][4] + '&#8457</td>');
    }
    $('#sevenDay').append('</tr>');
});
