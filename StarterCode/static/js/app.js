// Fetch the JSON data and console log it
d3.json("samples.json").then(function(data) {
    console.log(data);
});

function buildPlot() {
  var url = "samples.json";

  d3.json(url).then(function(data) {

    // Grab values from the response json object to build the plots
    var name = data.name;
    console.log(name)
  }
