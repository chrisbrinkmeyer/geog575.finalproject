/*global L*/
/*global $*/

    var map = L.map('map',{
        center: [38, -90],
        zoom: 4
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);
var controlLayers = L.control.layers().addTo(map);

var url = 'data/all_tornadoes.geojson';
var url2010 = 'data/tornado_2010.geojson';
var url2011 = 'data/tornado_2011.geojson';
var url2012 = 'data/tornado_2012.geojson';
var url2013 = 'data/tornado_2013.geojson';
var url2014 = 'data/tornado_2014.geojson';
var url2015 = 'data/tornado_2015.geojson';
var url2016 = 'data/tornado_2016.geojson';
var url2017 = 'data/tornado_2017.geojson';
var url2018 = 'data/tornado_2018.geojson';
var url2019 = 'data/tornado_2019.geojson';

$.getJSON(url2010, function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
      style: {color: 'red'},
      onEachFeature: function (feature, layer){layer.bindPopup('State: '+feature.properties.t2010_c_11+'<br>County: ' + feature.properties.t2010_csv1 + '<br>Begin Location: ' + feature.properties.t2010_cs_1 + '<br>End Location: ' + feature.properties.t2010_c_28 + '<br>Date: ' + feature.properties.t2010_cs_2 + '<br>Time: ' + feature.properties.t2010_cs_3 + '<br>Fujita Scale: ' + feature.properties.t2010_cs_6 + '<br>Length: ' + feature.properties.t2010_c_22 + ' miles<br>Width: ' + feature.properties.t2010_c_23 + ' feet<br>Source: ' + feature.properties.t2010_c_20);}
      
    }
  ).addTo(map);
  controlLayers.addOverlay(geojsonLayer, '2010');
});

$.getJSON(url2011, function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
      style: {color: 'blue'},
      onEachFeature: function (feature, layer){layer.bindPopup('State: '+feature.properties.t2011_csv_S+'<br>County: ' + feature.properties.t2011_csv_C + '<br>Begin Location: ' + feature.properties.t2011_csv_B + '<br>End Location: ' + feature.properties.t2011_cs_20 + '<br>Date: ' + feature.properties.t2011_csv_1 + '<br>Time: ' + feature.properties.t2011_csv_2 + '<br>Fujita Scale: ' + feature.properties.t2011_csv_T + '<br>Length: ' + feature.properties.t2011_cs_14 + ' miles<br>Width: ' + feature.properties.t2011_cs_15 + ' feet<br>Source: ' + feature.properties.t2011_cs_13);}
      
    }
  ).addTo(map);
  controlLayers.addOverlay(geojsonLayer, '2011');
});

$.getJSON(url2012, function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
      style: {color: 'green'},
      onEachFeature: function (feature, layer){layer.bindPopup('State: '+feature.properties.t2012_csv_S+'<br>County: ' + feature.properties.t2012_csv_C + '<br>Begin Location: ' + feature.properties.t2012_csv_B + '<br>End Location: ' + feature.properties.t2012_cs_20 + '<br>Date: ' + feature.properties.t2012_csv_1 + '<br>Time: ' + feature.properties.t2012_csv_2 + '<br>Fujita Scale: ' + feature.properties.t2012_csv_T + '<br>Length: ' + feature.properties.t2012_cs_14 + ' miles<br>Width: ' + feature.properties.t2012_cs_15 + ' feet<br>Source: ' + feature.properties.t2012_cs_13);}
      
    }
  ).addTo(map);
  controlLayers.addOverlay(geojsonLayer, '2012');
});

$.getJSON(url2013, function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
      style: {color: 'brown'},
      onEachFeature: function (feature, layer){layer.bindPopup('State: '+feature.properties.t2013_csv_S+'<br>County: ' + feature.properties.t2013_csv_C + '<br>Begin Location: ' + feature.properties.t2013_csv_B + '<br>End Location: ' + feature.properties.t2013_cs_20 + '<br>Date: ' + feature.properties.t2013_csv_1 + '<br>Time: ' + feature.properties.t2013_csv_2 + '<br>Fujita Scale: ' + feature.properties.t2013_csv_T + '<br>Length: ' + feature.properties.t2013_cs_14 + ' miles<br>Width: ' + feature.properties.t2013_cs_15 + ' feet<br>Source: ' + feature.properties.t2013_cs_13);}
      
    }
  ).addTo(map);
  controlLayers.addOverlay(geojsonLayer, '2013');
});

$.getJSON(url2014, function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
      style: {color: 'yellow'},
      onEachFeature: function (feature, layer){layer.bindPopup('State: '+feature.properties.t2014_csv_S+'<br>County: ' + feature.properties.t2014_csv_C + '<br>Begin Location: ' + feature.properties.t2014_csv_B + '<br>End Location: ' + feature.properties.t2014_cs_20 + '<br>Date: ' + feature.properties.t2014_csv_1 + '<br>Time: ' + feature.properties.t2014_csv_2 + '<br>Fujita Scale: ' + feature.properties.t2014_csv_T + '<br>Length: ' + feature.properties.t2014_cs_14 + ' miles<br>Width: ' + feature.properties.t2014_cs_15 + ' feet<br>Source: ' + feature.properties.t2014_cs_13);}
      
    }
  ).addTo(map);
  controlLayers.addOverlay(geojsonLayer, '2014');
});

$.getJSON(url2015, function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
      style: {color: 'cyan'},
      onEachFeature: function (feature, layer){layer.bindPopup('State: '+feature.properties.t2015_csv_S+'<br>County: ' + feature.properties.t2015_csv_C + '<br>Begin Location: ' + feature.properties.t2015_csv_B + '<br>End Location: ' + feature.properties.t2015_cs_20 + '<br>Date: ' + feature.properties.t2015_csv_1 + '<br>Time: ' + feature.properties.t2015_csv_2 + '<br>Fujita Scale: ' + feature.properties.t2015_csv_T + '<br>Length: ' + feature.properties.t2015_cs_14 + ' miles<br>Width: ' + feature.properties.t2015_cs_15 + ' feet<br>Source: ' + feature.properties.t2015_cs_13);}
      
    }
  ).addTo(map);
  controlLayers.addOverlay(geojsonLayer, '2015');
});

$.getJSON(url2016, function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
      style: {color: 'purple'},
      onEachFeature: function (feature, layer){layer.bindPopup('State: '+feature.properties.t2016_csv_S+'<br>County: ' + feature.properties.t2016_csv_C + '<br>Begin Location: ' + feature.properties.t2016_csv_B + '<br>End Location: ' + feature.properties.t2016_cs_20 + '<br>Date: ' + feature.properties.t2016_csv_1 + '<br>Time: ' + feature.properties.t2016_csv_2 + '<br>Fujita Scale: ' + feature.properties.t2016_csv_T + '<br>Length: ' + feature.properties.t2016_cs_14 + ' miles<br>Width: ' + feature.properties.t2016_cs_15 + ' feet<br>Source: ' + feature.properties.t2016_cs_13);}
      
    }
  ).addTo(map);
  controlLayers.addOverlay(geojsonLayer, '2016');
});

$.getJSON(url2017, function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
      style: {color: 'magenta'},
      onEachFeature: function (feature, layer){layer.bindPopup('State: '+feature.properties.t2017_csv_S+'<br>County: ' + feature.properties.t2017_csv_C + '<br>Begin Location: ' + feature.properties.t2017_csv_B + '<br>End Location: ' + feature.properties.t2017_cs_20 + '<br>Date: ' + feature.properties.t2017_csv_1 + '<br>Time: ' + feature.properties.t2017_csv_2 + '<br>Fujita Scale: ' + feature.properties.t2017_csv_T + '<br>Length: ' + feature.properties.t2017_cs_14 + ' miles<br>Width: ' + feature.properties.t2017_cs_15 + ' feet<br>Source: ' + feature.properties.t2017_cs_13);}
      
    }
  ).addTo(map);
  controlLayers.addOverlay(geojsonLayer, '2017');
});

$.getJSON(url2018, function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
      style: {color: 'white'},
      onEachFeature: function (feature, layer){layer.bindPopup('State: '+feature.properties.t2018_csv_S+'<br>County: ' + feature.properties.t2018_csv_C + '<br>Begin Location: ' + feature.properties.t2018_csv_B + '<br>End Location: ' + feature.properties.t2018_cs_20 + '<br>Date: ' + feature.properties.t2018_csv_1 + '<br>Time: ' + feature.properties.t2018_csv_2 + '<br>Fujita Scale: ' + feature.properties.t2018_csv_T + '<br>Length: ' + feature.properties.t2018_cs_14 + ' miles<br>Width: ' + feature.properties.t2018_cs_15 + ' feet<br>Source: ' + feature.properties.t2018_cs_13);}
      
    }
  ).addTo(map);
  controlLayers.addOverlay(geojsonLayer, '2018');
});

$.getJSON(url2019, function (geojson) {
  var geojsonLayer = L.geoJson(geojson, {
      style: {color: 'gray'},
      onEachFeature: function (feature, layer){layer.bindPopup('State: '+feature.properties.t2019_csv_S+'<br>County: ' + feature.properties.t2019_csv_C + '<br>Begin Location: ' + feature.properties.t2019_csv_B + '<br>End Location: ' + feature.properties.t2019_cs_20 + '<br>Date: ' + feature.properties.t2019_csv_1 + '<br>Time: ' + feature.properties.t2019_csv_2 + '<br>Fujita Scale: ' + feature.properties.t2019_csv_T + '<br>Length: ' + feature.properties.t2019_cs_14 + ' miles<br>Width: ' + feature.properties.t2019_cs_15 + ' feet<br>Source: ' + feature.properties.t2019_cs_13);}
      
    }
  ).addTo(map);
  controlLayers.addOverlay(geojsonLayer, '2019');
});