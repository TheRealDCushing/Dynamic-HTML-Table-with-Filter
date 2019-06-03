var tbody = d3.select("tbody");
var row = tbody.append("tr");

row.append("td").text(newGrade[i])
// Actually, [i] will be the column-wise 2nd operator



data.forEach(function(ufoReport) {
console.log(ufoReport);
var row = tbody.append("tr");
Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(key,value)
})
});

data.forEach(function(ufoReport) {
console.log(ufoReport);
var row = tbody.append("tr");
Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = tbody.append("td");
    cell.text(value);
});
});
