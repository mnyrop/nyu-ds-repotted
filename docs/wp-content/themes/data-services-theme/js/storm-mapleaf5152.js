var map = new L.Map('storm-map', {
        zoomControl: true,
        center: [37.09, -95.712],
        zoom: 4
      });

      L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {   
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data provided by NOAA <a href="http://www.ncdc.noaa.gov/stormevents/details.jsp">Storms Events Database</a>.'
      }).addTo(map);

var myStyle1950 = {
    "color": "#cc0000",
    "weight": 2,
    "opacity": 0.65
};

var myStyle1960 = {
    "color": "#cc0000",
    "weight": 2,
    "opacity": 0.65
};

var myStyle1970 = {
    "color": "#cc0000",
    "weight": 2,
    "opacity": 0.65
};

var myStyle1980 = {
    "color": "#cc0000",
    "weight": 2,
    "opacity": 0.65
};


var popup = L.popup();


function zoomToFeature(e) {
     popup.setLatLng(e.latlng).setContent('<p><span style="color:#cc0000;">Year: </span>' + e.target.feature.properties.year.toString() + '</p><p><span style="color:#cc0000;">Event: </span>' + e.target.feature.properties.eventtype.toString() + '</p><p><span style="color:#cc0000;">County: </span>' + e.target.feature.properties.county.toString() + '</p>').openOn(map);
}


function yourOnEachFeatureFunction(feature, layer) {
    layer.on({
        click: zoomToFeature
    });
}



var lyr1950 = L.geoJson(line1950, {style: myStyle1950, onEachFeature: yourOnEachFeatureFunction});
var lyr1960 = L.geoJson(line1960, {style: myStyle1960, onEachFeature: yourOnEachFeatureFunction});
var lyr1970 = L.geoJson(line1970, {style: myStyle1970, onEachFeature: yourOnEachFeatureFunction});
var lyr1980 = L.geoJson(line1980, {style: myStyle1980, onEachFeature: yourOnEachFeatureFunction});


function layer1950() { map.removeLayer(lyr1960); map.removeLayer(lyr1970); map.removeLayer(lyr1980); lyr1950.addTo(map); document.getElementById("mapleafheader").innerHTML="Storm Events: The 1950s"; document.getElementById("bn1950").style.backgroundColor = "#cc0000"; document.getElementById("bn1960").style.backgroundColor = "#1a1a1a"; document.getElementById("bn1970").style.backgroundColor = "#1a1a1a"; document.getElementById("bn1980").style.backgroundColor = "#1a1a1a";}
function layer1960() { map.removeLayer(lyr1950); map.removeLayer(lyr1970); map.removeLayer(lyr1980); lyr1960.addTo(map); document.getElementById("mapleafheader").innerHTML="Storm Events: The 1960s"; document.getElementById("bn1950").style.backgroundColor = "#1a1a1a"; document.getElementById("bn1960").style.backgroundColor = "#cc0000"; document.getElementById("bn1970").style.backgroundColor = "#1a1a1a"; document.getElementById("bn1980").style.backgroundColor = "#1a1a1a";}
function layer1970() { map.removeLayer(lyr1950); map.removeLayer(lyr1960); map.removeLayer(lyr1980); lyr1970.addTo(map); document.getElementById("mapleafheader").innerHTML="Storm Events: The 1970s"; document.getElementById("bn1950").style.backgroundColor = "#1a1a1a"; document.getElementById("bn1960").style.backgroundColor = "#1a1a1a"; document.getElementById("bn1970").style.backgroundColor = "#cc0000"; document.getElementById("bn1980").style.backgroundColor = "#1a1a1a";}
function layer1980() { map.removeLayer(lyr1950); map.removeLayer(lyr1960); map.removeLayer(lyr1970); lyr1980.addTo(map); document.getElementById("mapleafheader").innerHTML="Storm Events: The 1980s"; document.getElementById("bn1950").style.backgroundColor = "#1a1a1a"; document.getElementById("bn1960").style.backgroundColor = "#1a1a1a"; document.getElementById("bn1970").style.backgroundColor = "#1a1a1a"; document.getElementById("bn1980").style.backgroundColor = "#cc0000";}
function removeline(){ map.removeLayer(lyr1950); map.removeLayer(lyr1960); map.removeLayer(lyr1970); map.removeLayer(lyr1980); document.getElementById("mapleafheader").innerHTML="Storm Events"; }

layer1950()

function thornton() {
    map.fitBounds([[39.925360, -105.085523],[39.701710, -104.762113]]);
    layer1980();
    var marker = L.marker([39.728978, -105.025333]).addTo(map);
}
