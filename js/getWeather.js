$.getJSON('js/next7days.json', function(data) {
    $('#sevenDay').append('<tr>');
    let date = '';
    let snow = '';
    let rain = '';
    let cloud = '';
    let max = '';
    let min = '';
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
        snow = info[i][1];
        rain = info[i][2];
        cloud = info[i][3];
        max = info[i][4];
        min = info[i][5];
        if(snow != 0.0){    
            $('#sevenDay').append('<th onclick="alert(\'' + date + ' - Snow - Max: ' + max + ' - Min: ' + min + ' - Chance of rain: ' + rain + '%\');"><img src="images/snowy.webp" alt="Snow"></th>');
        }else if(rain != 0.0){
            $('#sevenDay').append('<th onclick="alert(\'' + date + ' - Rain - Max: ' + max + ' - Min: ' + min + ' - Chance of rain: ' + rain + '%\');"><img src="images/rainy.webp" alt="Rain"></th>');
        }else if(cloud != 0.0){
            $('#sevenDay').append('<th onclick="alert(\'' + date + ' - Cloudy - Max: ' + max + ' - Min: ' + min + ' - Chance of rain: ' + rain + '%\');"><img src="images/cloudy.webp" alt="Cloudy"></th>');
        }else{
            $('#sevenDay').append('<th onclick="alert(\'' + date + ' - Sunny - Max: ' + max + ' - Min: ' + min + ' - Chance of rain: ' + rain + '%\');"><img src="images/sunny.webp" alt="Sunny"></th>');
        }
    }
    $('#sevenDay').append('</tr>');
    $('#sevenDay').append('<tr>');
    for(let i = 0; i< 7; i++){
        $('#sevenDay').append('<td>' + info[i][4] + '&#8457</td>');
    }
    $('#sevenDay').append('</tr>');
});
