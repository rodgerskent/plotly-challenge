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

      // Samples stuff narrowed to users selection
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

      // Metadata stuff narrowed to users selection
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

      // OTU ID results for bar and bubble chart use
      // var axisy = sampleSelected.map(samples => samples.otu_ids.slice(0,10).reverse());
      console.log("bar chart y-axis stuff")
      var onesampleSelected = sampleSelected[0]
      console.log(onesampleSelected)
      var yyy = onesampleSelected.otu_ids.slice(0,10)
      console.log(yyy)
      var otuforY = yyy.map(item => `OTU ${item}`).reverse()
      console.log('otuforY here')
      console.log(otuforY)
      var bubbleX = sampleSelected.map(samples => samples.otu_ids);
      console.log("bubble x-axis stuff")
      console.log (bubbleX)

      // Sample Value results for bar and bubble chart use
      var axisx = sampleSelected.map(samples => samples.sample_values.slice(0,10).reverse());
      console.log("bar chart x-axis stuff")
      console.log (axisx)
      var bubbleY = sampleSelected.map(samples => samples.sample_values);
      console.log("bubbly y axis stuff")
      console.log (bubbleY)
     
      // OTU Labels for bar and bubble chart use
      var labels = sampleSelected.map(samples => samples.otu_labels.slice(0,10));
      console.log("bar labels stuff")
      console.log (labels)
      var bubbleL = sampleSelected.map(samples => samples.otu_labels);
      console.log("bubble labels stuff")
      console.log (bubbleL)
    
      // Bar chart stuff
      var trace = {
        x: axisx[0],
        y: otuforY,
        text: labels,
        // name: yy[0],
        type: "bar",
        orientation: "h"
        
      };

      var data = [trace];

      var layout = {
        title: "Top 10 OTU results for Selected Study Participant",
        xaxis: { title: "Sample Value" },
        // yaxis: { title: "OTU"}
      };

      Plotly.newPlot("bar", data, layout);
      // End of bar chart stuff

      // Bubble chart stuff
      var bubbletrace = {
        x: bubbleX[0],
        y: bubbleY[0],
        text: bubbleL[0],
        mode: 'markers',
        marker: {
          size: bubbleY[0],
          sizemode: 'area',
          color: bubbleX[0],
        }
      };
            
      var bubbledata = [bubbletrace];
      
      var layout = {
        title: 'All OTU Results for Selected Research Participant',
        xaxis: { title: "OTU" },
        yaxis: { title: "Sample Value"},
        showlegend: false,
        height: 600,
        width: 750
      };
      
      Plotly.newPlot('bubble', bubbledata, layout);
      // End bubble chart stuff
  
      // Demographics display stuff
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