//todo: marker point current location
//marker point new location on click?

google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var rd = [
    // U.S. dollar cents per kilowatt hour
    ['Country', 'Values'],
    ['IT', 21.01],
    ['DE', 19.21],
    ['GB', 15.40],
    ['PT', 13.84],
    ['BE', 12.68],
    ['SK', 12.55],
    ['FX', 10.74],
    ['CS', 10.47],
    ['PL', 10.46],
    ['AT', 10.44],
    ['US', 10.00],
    ['AU', 9.71],
    ['ZA', 8.97],
    ['CA', 8.11],
    ['KR', 20.11]
  ];

  var data = google.visualization.arrayToDataTable(rd);

  var options = {
    region: 'world',
    colorAxis: {colors: ['#6D7E96', '#112E5A', 'black']},
    backgroundColor: '#dbebfa',
    datalessRegionColor: 'white',
    defaultColor: '#81d4fa',
    enableRegionInteractivity: 'true',
  };
  // cyan = #00ffff, sky blue = #81d4fa

  var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

  function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  } // http://13.56.247.15/move

  function myClickHandler(){
    var selection = chart.getSelection();
    var message = '';
    for (var i = 0; i < selection.length; i++) {
        var item = selection[i];
        if (item.row != null && item.column != null) {
            message += '{row:' + item.row + ',column:' + item.column + '}';
        } else if (item.row != null) {
            message += '{row:' + item.row + '}';
        } else if (item.column != null) {
            message += '{column:' + item.column + '}';
        }
    }
    if (message == '') {
        message = 'nothing';
    }
    alert('You selected ' + message);
    rd =  [
    // U.S. dollar cents per kilowatt hour
    ['Country', 'Values'],
    ['IT', 21.01],
    ['DE', 19.21],
    ['GB', 15.40],
    ['PT', 13.84],
    ['BE', 12.68],
    ['SK', 12.55],
    ['FX', 10.74],
    ['CS', 10.47],
    ['PL', 10.46],
    ['AT', 10.44],
    ['US', 10.00],
    ['AU', 9.71],
    ['ZA', 8.97],
    ['CA', 8.11],
    ['KR', 1.11]
  ];
    data = google.visualization.arrayToDataTable(rd);
    chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      chart.draw(data, options);
  }
  google.visualization.events.addListener(chart, 'select', myClickHandler);

  chart.draw(data, options);
}
// google.load('visualization', '1', {packages: ['geochart'], callback: drawRegionsMap});


// notes:
// enableRegionInteractivity
// 1 Italy 21.01 IT
// 2 Germany 19.21 DE
// 3 UK  15.40 GB
// 4 Portugal  13.84 PT
// 5 Spain 13.64 IC
// 6 Belgium 12.68 BE
// 7 Slovakia  12.55 SK
// 8 France  10.74 FX
// 9 Czech Republic  10.47 CS
// 10  Poland  10.46 PL
// 11  Austria 10.44 AT
// 12  Netherlands 10.08
// 13  U.S.  10.00 US
// 14  Australia 9.71 AU
// 15  South Africa  8.97 ZA
// 16  Finland 8.59
// 17  Canada  8.11 CA
// 18  Sweden  7.87