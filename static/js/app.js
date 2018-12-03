var sightings = data;

var tbody = d3.select("tbody");


function tableBuilder(data) {
    data.forEach(function(sighting) {
        //console.log(weatherReport);
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
          console.log(value);
          // Append a cell to the row for each value
          // in the weather report object
          var cell = row.append("td");
          cell.text(value);
        });
      });
}

tableBuilder(sightings);
// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {
  d3.select("tbody").html("")
  d3.event.preventDefault();
  // Prevent the page from refreshing

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(sightings);

  var filteredData = sightings.filter(sightings => sightings.datetime === inputValue);

  var displayData = filteredData;
  console.log(displayData);
  tableBuilder(displayData); 
});
