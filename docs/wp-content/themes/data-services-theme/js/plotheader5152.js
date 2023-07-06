function plothd() {

var val1 = Math.floor(Math.random()*11);
var val2 = Math.floor(Math.random()*11);  
var val3 = Math.floor(Math.random()*11);
var val4 = Math.floor(Math.random()*11);  
var val5 = Math.floor(Math.random()*11);
var val6 = Math.floor(Math.random()*11);  
var val7 = Math.floor(Math.random()*11);
var val8 = Math.floor(Math.random()*11);
var val9 = Math.floor(Math.random()*11);  
var val10 = Math.floor(Math.random()*11);  
var val11 = 10;  
var val12 = Math.floor(Math.random()*11);  
var val13 = Math.floor(Math.random()*11);  
var val14 = 10;    

var trace1 = {
  x: [val1, val2, val3, val4, val9, val10, val11],
  y: [val5, val6, val7, val8, val12, val13, val14],
  mode: 'markers',
  type: 'scatter',
  marker: {color: '#660033'}
};

var val1 = Math.floor(Math.random()*11);
var val2 = Math.floor(Math.random()*11);  
var val3 = Math.floor(Math.random()*11);
var val4 = Math.floor(Math.random()*11);  
var val5 = Math.floor(Math.random()*11);
var val6 = Math.floor(Math.random()*11);  
var val7 = Math.floor(Math.random()*11);
var val8 = Math.floor(Math.random()*11);
var val9 = Math.floor(Math.random()*11);  
var val10 = Math.floor(Math.random()*11);  
var val11 = 10;  
var val12 = Math.floor(Math.random()*11);  
var val13 = Math.floor(Math.random()*11);  
var val14 = 10;

var trace2 = {

  x: [val1, val2, val3, val4, val9, val10, val11],
  y: [val5, val6, val7, val8, val12, val13, val14],
  mode: 'markers',
  type: 'scatter',
  marker: {color: '#ff4d4d'}
};

var val1 = Math.floor(Math.random()*11);
var val2 = Math.floor(Math.random()*11);  
var val3 = Math.floor(Math.random()*11);
var val4 = Math.floor(Math.random()*11);  
var val5 = Math.floor(Math.random()*11);
var val6 = Math.floor(Math.random()*11);  
var val7 = Math.floor(Math.random()*11);
var val8 = Math.floor(Math.random()*11);
var val9 = Math.floor(Math.random()*11);  
var val10 = Math.floor(Math.random()*11);  
var val11 = 10;  
var val12 = Math.floor(Math.random()*11);  
var val13 = Math.floor(Math.random()*11);  
var val14 = 10;


var trace3 = {
  x: [val1, val2, val3, val4, val9, val10, val11],
  y: [val5, val6, val7, val8, val12, val13, val14],
  mode: 'markers',
  type: 'scatter',
  marker: {color: '#ffb3b3'}
};

var layout = {
  // title: 'Real Time Updates',
  hovermode: false,
  showlegend: false,
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  width: 300,
  height: 200,
  xaxis: {tickfont: {color: '#fff'}, zerolinecolor: '#fff', showgrid: false, rangemode: 'tozero', title: 'randint()', titlefont: {color: '#fff', size: 12}, autorange: true, fixedrange:true },
  yaxis: {tickfont: {color: '#fff'}, zerolinecolor: '#fff', showgrid: false, rangemode: 'tozero', autorange: true, fixedrange:true },
  margin: {t: 40, b:60, pad: 0, autoexpand: false}
};

var data = [trace1, trace2, trace3];

Plotly.newPlot('bannerplot', data, layout, {displayModeBar: false});

}


setTimeout(plothd, 0)
setTimeout(plothd, 300)
setTimeout(plothd, 600)