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

      //var axisy = [1,2,3,4]
      var axisy = sampleSelected.map(samples => samples.otu_ids.slice(0,10));
      console.log("bar chart y-axis stuff")
      console.log(axisy)
      // var yy = [axisy.toString()]
      var yy = [axisy]
      console.log("yy should be here")
      console.log(yy)
      
      //var axisx = [1,2,3,4]
      var axisx = sampleSelected.map(samples => samples.sample_values.slice(0,10));
      console.log("bar chart x-axis stuff")
      console.log (axisx)
      // var xx = [axisx.toString()]
      var xx = [axisx]
      console.log("xx should be here")
      console.log(xx)

      var labels = sampleSelected.map(samples => samples.otu_labels.slice(0,10));
      console.log("bar labels stuff")
      console.log (labels)

      var trace = {
        x: xx,
        y: yy,
        //text: labels,
        type: "bar",
        orientation: "h"
        
      };

      var data = [trace];

      var layout = {
        title: "Research Results for Selected Study Participant",
        xaxis: { title: "Sample Value" },
        yaxis: { title: "OTU"}
      };

      Plotly.newPlot("bar", data, layout);


      // Bubble chart stuff
      // var bubbletrace = {
      //   x: axisy,
      //   y: axisx,
      //   text: labels,
      //   mode: 'markers',
      //   marker: {
      //     size: axisx,
      //     sizemode: 'area'
      //   }
      // };
      
      
      // sizeref using above forumla
      // var desired_maximum_marker_size = 40;
      // var size = [400, 600, 800, 1000];
      // var trace4 = {
      //   x: [1, 2, 3, 4],
      //   y: [26, 27, 28, 29],
      //   text: ['A</br>size: 40</br>sixeref: 1.25', 'B</br>size: 60</br>sixeref: 1.25', 'C</br>size: 80</br>sixeref: 1.25', 'D</br>size: 100</br>sixeref: 1.25'],
      //   mode: 'markers',
      //   marker: {
      //     size: size,
      //     //set 'sizeref' to an 'ideal' size given by the formula sizeref = 2. * max(array_of_size_values) / (desired_maximum_marker_size ** 2)
      //     sizeref: 2.0 * Math.max(...size) / (desired_maximum_marker_size**2),
      //     sizemode: 'area'
      //   }
      // };
      
      // var bubbledata = [bubbletrace];
      
      // var layout = {
      //   title: 'Bubble Chart Size Scaling',
      //   showlegend: false,
      //   height: 600,
      //   width: 600
      // };
      
      // Plotly.newPlot('myDiv', bubbledata, layout);
      // End bubble chart stuff
  
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