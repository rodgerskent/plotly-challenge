// Fetch the JSON data and console log it
d3.json("samples.json").then(function(object) {
    console.log("You have an OBJECT to work with")
    console.log(object);
    console.log("Object Keyes at first level")
    console.log(Object.keys(object));
    console.log("Array of Subject ID's");
    console.log(object.names);
    var subject = object.names;
    console.log("subject Variable with array of Subject ID's");
    console.log(subject);
    

    // menu.html("");

    var menuList = subject;
    console.log("menuList Variable with array of subjects staged for drop down menu")
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


// Starter from UFO Level 1 to act on a change in the drop down menu
var button = d3.select("#selDataset");
var form = d3.select("form");
form.on("submit",runEnter);

function optionChanged() {
    

    d3.json("samples.json").then(function(object) {
             
      console.log("metadata drill");
      console.log(object.metadata);
      console.log("metadata variable below");
      var metadata = object.metadata;
      console.log(metadata)

      function fnsampleMeta(metadata) {
        //d3.event.preventDefault();
        var inputElement = d3.select("#selDataset");
        console.log('Selected Subject ID Element')
        console.log(inputElement);
        var inputValue = inputElement.property("value");
        console.log('Selected Subject ID Value')
        console.log(inputValue);
        return metadata.id === parseInt(inputValue);
      }

      var sampleMeta = metadata.filter(fnsampleMeta);
      console.log("sampleMeta variable below")
      console.log(sampleMeta)

      // menu.html("");

      var demographics = d3.select("#sample-metadata")
      sampleMeta.forEach((buttonpicker) => {
          // menu.html("");
          var row = demographics.append("tr");
          Object.entries(buttonpicker).forEach(([key, value]) => {
            var cell = row.append("tr");
            cell.text(key + ":" + "  " + value);
          });
      });
});
       
}

// // From Day 2 Activity 9
// d3.selectAll("#selDataset").on("change", optionChanged);

// function optionChanged() {
//   var dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a variable
//   var dataset = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   var data = [];

//   if (dataset == '940') {
//       data = 'x940';
//   }
//   else if (dataset == '941') {
//       data = 'x941';
//   }
//   else if (dataset == '942') {
//       data = 'x942';
//   }
 
// }




// function unpack(rows, index) {
//   return rows.map(function(row) {
//     return row[index];
//   });
// }

// function getMonthlyData() {

  
//   d3.json("samples.json").then(function(data) {
//     // @TODO: Unpack the dates, open, high, low, close, and volume
//     var name = data.name;
//     var subjectid = unpack(data.samples.id, 0);
//     var otuid = unpack(data.dataset.otu_id, 0);
//     console.log("subjectid")
//     console.log("Subject id")
//     buildTable(subjectid, otuid);
//   });
// }

// function buildTable(dates, openingPrices, highPrices, lowPrices, closingPrices, volume) {
//   var table = d3.select("#summary-table");
//   var tbody = table.select("tbody");
//   var trow;
//   for (var i = 0; i < 12; i++) {
//     trow = tbody.append("tr");
//     trow.append("td").text(dates[i]);
//     trow.append("td").text(openingPrices[i]);
//     trow.append("td").text(highPrices[i]);
//     trow.append("td").text(lowPrices[i]);
//     trow.append("td").text(closingPrices[i]);
//     trow.append("td").text(volume[i]);
//   }
// }

// function buildPlot() {
//   var url = `https://www.quandl.com/api/v3/datasets/WIKI/XOM.json?start_date=2017-01-01&end_date=2018-11-22&api_key=${apiKey}`;

//   d3.json(url).then(function(data) {

//     // @TODO: Grab Name, Stock, Start Date, and End Date from the response json object to build the plots
//     console.log(data)
//     // @TODO: Unpack the dates, open, high, low, and close prices
//     var name = data.dataset.name;
//     var stock = data.dataset.dataset_code;
//     var startDate = data.dataset.start_date;
//     var endDate = data.dataset.end_date;
//     var dates = unpack(data.dataset.data, 0);
//     var openingPrices = unpack(data.dataset.data, 1);
//     var highPrices = unpack(data.dataset.data, 2);
//     var lowPrices = unpack(data.dataset.data, 3);
//     var closingPrices = unpack(data.dataset.data, 4);
//     console.log(openingPrices)

//     getMonthlyData();

//     // Closing Scatter Line Trace
//     var trace1 = {
//       type: "scatter",
//       mode: "lines",
//       name: name,
//       x: dates,
//       y: closingPrices,
//       line: {
//         color: "#17BECF"
//       }
//     };

//     // Candlestick Trace
//     var trace2 = {
//       type: "candlestick",
//       x: dates,
//       high: highPrices,
//       low: lowPrices,
//       open: openingPrices,
//       close: closingPrices
//     };

//     var data = [trace1, trace2];

//     var layout = {
//       title: `${stock} closing prices`,
//       xaxis: {
//         range: [startDate, endDate],
//         type: "date"
//       },
//       yaxis: {
//         autorange: true,
//         type: "linear"
//       },
//       showlegend: false
//     };

//     Plotly.newPlot("plot", data, layout);

//   });
// }

// buildPlot();





// // var researchData = data

// // var filteredData = researchData.filter(data.name === "940")
// // console.log('Filtered Data Exists')
// // console.log(filteredData)







// // function buildPlot() {
// //   var url = "samples.json";

// //   d3.json(url).then(function(data) {

// //     // Grab values from the response json object to build the plots
// //     var name = data.name;
// //     console.log(name)
// //   }



// // // new shit ...
// // // 1. Use the filter method to create a custom filtering function
// // //  that returns the cities with a population increase greater than 15,000.
// // function filterSubjects(subject) {
// //   return parseInt(data.metadata.id) === "940";
// // }

// // // 2. Use filter() to pass the function as its argument
// //     var filteredSubjects = data.filter(item => data.metadata.id === "940");

// // //  Check to make sure your filtered your cities.
// //   console.log(filteredSujects);

// // // 3. Use the map method with the arrow function to return all the filtered cities.
// //   var samples = filteredSubjects.map(item => data.metadata.id.otul_id === "940";

// // //  Check your filtered cities
// //   console.log(samples);

// // // 4. Use the map method with the arrow function to return all the filtered cities population.
// // var population = filteredCities.map(city => city.population);

// // //  Check the populations of your filtered cities
// // console.log(population);


// // // 5. Create your trace.
// // var trace = {
// //   x: cities,
// //   y: population,
// //   type: "bar"
// // };

// // // 6. Create the data array for our plot
// // var data = [trace];

// // // 7. Define our plot layout
// // var layout = {
// //   title: "Cities that added more than 15,000 people in 2017",
// //   xaxis: { title: "City" },
// //   yaxis: { title: "2017 Population"}
// // };

// // // 8. Plot the chart to a div tag with id "bar-plot"
// // Plotly.newPlot("bar-plot", data, layout);