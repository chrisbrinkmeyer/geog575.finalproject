/*global L*/
/*global $*/

function createMap() {
    //create the map
    "use strict";
    var map = L.map('map',{
        center: [37, -85],
        zoom: 4
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    }).addTo(map);
    
    
    $.ajax("data/all_tornadoes.geojson", {
        dataType: "json",
        success: function(response){
            L.geoJson(response, {
                onEachFeature: function (feature, layer) {
                layer.bindPopup('State: '+feature.properties.all_tor_19+'<br>County: ' + feature.properties.all_torn_7 + '<br>Begin Location: ' + feature.properties.all_torn_8 + '<br>End Location: ' + feature.properties.all_tor_36 + '<br>Date: ' + feature.properties.all_tor_10 + '<br>Time: ' + feature.properties.all_tor_11 + '<br>Fujita Scale: ' + feature.properties.all_tor_14 + '<br>Length: ' + feature.properties.all_tor_30 + ' miles<br>Width: ' + feature.properties.all_tor_31 + ' feet<br>Source: ' + feature.properties.all_tor_28);
    }
            }).addTo(map);
        }
    });   

}
 

$(document).ready(createMap);