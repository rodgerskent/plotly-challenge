// Fetch the JSON data and console log it
d3.json("samples.json").then(function(object) {
    console.log("Full research data OBJECT")
    console.log(object);
    // console.log("Object Keyes at first level")
    // console.log(Object.keys(object));
    // console.log("Subject Array");
    // console.log(object.names);
    var subject = object.names;
    // console.log("Subject Variable");
    // console.log(subject);
    

    // menu.html("");

    var menuList = subject;
    console.log("stuff for drop down menu")
    console.log(menuList);
    var menu = d3.select("#selDataset")
    subject.forEach((menuList) => {
        // menu.html("");
        var row = menu.append("option");
        Object.values(menuList).forEach(([value]) => {
          var cell = row.append("option");
          cell.text(value);
        });
    });

});


var button = d3.select("#selDataset");
var form = d3.select("form");
form.on("submit", optionChanged);

function optionChanged() {
    
    d3.json("samples.json").then(function(object) {
      
      console.log("stuff for bar chart")
      // console.log(object.samples)
      console.log("full bar chart array below")
      var samples = object.samples
      console.log(samples)

      function fnSamples(samples) {
        //d3.event.preventDefault();
        var inputElement1 = d3.select("#selDataset");
        // console.log('Selected Samples Input Element')
        // console.log(inputElement1);
        var inputValue1 = inputElement1.property("value");
        // console.log('Selected Samples Input Values')
        // console.log(inputValue1);
        return samples.id === inputValue1;
      }

      var sampleSelected = samples.filter(fnSamples);
      console.log("selected bar chart array")
      console.log(sampleSelected)

      console.log("stuff for demographics section");
      // console.log(object.metadata);
      console.log("full demographics array below");
      var metadata = object.metadata;
      console.log(metadata)

      function fnsampleMeta(metadata) {
        //d3.event.preventDefault();
        var inputElement = d3.select("#selDataset");
        // console.log('Selected Subject ID Element')
        // console.log(inputElement);
        var inputValue = inputElement.property("value");
        // console.log('selected stuff for demographics array below')
        // console.log(inputValue);
        return metadata.id === parseInt(inputValue);
      }

      var sampleMeta = metadata.filter(fnsampleMeta);
      console.log("selected demographics array below")
      console.log(sampleMeta)

      var axisx = sampleSelected.map(samples => samples.otu_ids[9]);
      console.log("bar chart x-axis stuff")
      console.log(axisx)
      var axisy = sampleSelected.map(samples => samples.sample_values[9]);
      console.log("bar chart y-axis stuff")
      console.log (axisy)

      var trace = {
        x: axisx,
        y: axisy,
        type: "bar"
      };

      var definition = [trace];

      var layout = {
        title: "Research Results for Selected Study Participant",
        xaxis: { title: "Otu_Ids" },
        yaxis: { title: "Sample_Values"}
      };

      Plotly.newPlot("bar", definition, layout);
  

      // menu.html("");

      var demographics = d3.select("#sample-metadata")
      sampleMeta.forEach((buttonpicker) => {
          demographics.html("");
          var row = demographics.append("tr");
          Object.entries(buttonpicker).forEach(([key, value]) => {
            var cell = row.append("tr");
            cell.text(key + ":" + "  " + value);
          });
      });
  });
} 