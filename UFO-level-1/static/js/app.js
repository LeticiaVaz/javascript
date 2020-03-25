// from data.js
var tableData = data;


var tbody = d3.select("tbody");
console.log(tbody);


// add filters variables
var filterType = d3.select("#filter-type");
console.log(filterType);
var filterTypeValue = d3.select("#filter-type-value");
console.log(filterTypeValue);
var submit = d3.select("#filter-btn");
console.log(submit);
var tbody = d3.select("tbody");


filterType.on("change", function() {
    var filterValue = filterType.property("value");
    
 ///---   d3.select("#date_filtertype").node().value = '';
    // Setting placeholder values for input text
    switch (filterValue) {
        case 'datetime':
            placeHolder = '1/1/1999';
            break;
        }
        d3.select("input").attr("placeholder", placeHolder);
        d3.select("label")
          .attr("for",filterValue)
          .text(`Enter a value for  ${filterValue.toUpperCase()}`);
    });

function makeTable(data) {

    // clear table
    tbody.html("");
    // add rows to table
    data.forEach((dataRow) => {
        var row = tbody.append("tr");
    // add table data
        Object.values(dataRow).forEach((entries) => {
            var cell = tbody.append("td");
            cell.text(entries);
        });
        
    });

}


// call maketable function to make it to run
makeTable(tableData);







