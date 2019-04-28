/*
This is a variable used to count the number of added columns
through user interaction via button click events
*/
let addedCols = 0;
var cookie = document.cookie;

createCookie = function() {
  cookie = "";
  let table = document.getElementById("gradesTable");
  let rows = table.rows;
  let totalRows = table.rows.length;
  cookie += "Rows: " + totalRows + ";\n";

  let tableCells = table.rows[0].cells;
  let totalColumns = tableCells.length;
  cookie += "Columns: " + totalColumns + ";\n";

  for (let i = 0; i <= totalRows; i++) {
    let tableCells = table.rows[i].cells;
    totalColumns = tableCells.length;

    for (let j = 0; j < totalColumns; j++) {
      let cellData = tableCells[j].innerHTML;
      cookie += "Row: " + i + " Cell: " + j + " data: " + cellData + ";\n";
    }
  }
};

deleteCookie = function() {
  cookie = "";
};

readCookie = function() {
  alert(cookie);
};

/*
This function is used to calculate the final average grade for students
*/
calculateGrades = function() {
  let table = document.getElementById('gradesTable');
  let totalRows = table.rows.length;
  for (let i = 1; i < totalRows; i++) {
    let tableCells = table.rows[i].cells;
    let totalColumns = tableCells.length;
    let total = 0;
    let average = 0;

    for (let j = 2; j < totalColumns - 1; j++) {

      let cellVal = parseInt(tableCells[j].innerHTML);
      if (isNaN(cellVal) === true) {
        cellVal = 0;
      } else {
        alignRight(tableCells[j]);
      }
      total += cellVal;

      average = total / ((totalColumns + addedCols) - (j + 1));
      average = Math.round(average);
    }

    tableCells[totalColumns - 1].innerHTML = (average);
    checkPass(average, tableCells[totalColumns - 1]);

    for (let j = 0; j < 1; j++) {
      let cellVal = (tableCells[j].innerHTML);
      if (cellVal === "-") {

      } else {
        alignLeft(tableCells[j]);
      }
    }
    for (let j = 1; j < 2; j++) {
      // get your cell info here
      let cellVal = (tableCells[j].innerHTML);
      if ((cellVal) === "-") {

      } else {
        alignLeft(tableCells[j]);
      }
    }
  }
};

/*
This function takes in to parameters, 'value' the average calculation
of a students grade and 'cell' the cell location that is to
be manipulated according to the boolean condition within
the if/else statement
 */
checkPass = function(value, cell) {
  if (value < 40) {
    cell.style.backgroundColor = "red";
    cell.style.color = "black";
    cell.style.textAlign = "right";
  } else {
    cell.style.backgroundColor = "white";
    cell.style.color = "black";
    cell.style.textAlign = "right";
  }
};

/*
This function is used to add a column at the end of the table
*/
addColumn = function() {
  //Table assigned to a variable
  let table = document.getElementById('gradesTable');
  //How many rows
  let totalRows = table.rows.length;
  //Loop through every row
  for (let i = 0; i < totalRows; i++) {
    //Variable to access cells
    let tableCells = table.rows[i].cells;
    //Variable to hold number of columns
    let totalColumns = tableCells.length;
    //Add new columns after the final column
    table.rows[i].insertCell(totalColumns - 1);
    //Add data to each column, default "-"
    table.rows[i].cells[totalColumns - 1].innerHTML = "";
    //Add a different default value to the heading
    table.rows[0].cells[totalColumns - 1].innerHTML = "Assignment " + (addedCols + 2);
    table.rows[0].cells[totalColumns - 1].style.fontWeight = "bold";
    table.rows[0].cells[totalColumns - 1].style.backgroundColor = "lightgray";
    table.rows[0].cells[totalColumns - 1].style.borderSpacing = "10px";
    table.rows[0].cells[totalColumns - 1].style.padding = "10px";
  }
  addedCols++;
  checkUnsub();
  // calculateGrades()
};

delColumn = function() {
  //Table assigned to a variable
  let table = document.getElementById('gradesTable');
  //How many rows
  let totalRows = table.rows.length;
  //Loop through every row
  for (let i = totalRows - 1; i >= 0; i--) {
    //Variable to access cells
    let tableCells = table.rows[i].cells;
    //Variable to hold number of columns
    let totalColumns = tableCells.length;
    //Add new columns after the final column
    table.rows[i].deleteCell(totalColumns - 2);
    //Add data to each column, default "-"
  }
  addedCols--;
  checkUnsub();
  // calculateGrades()
};

/*
This is a function that adds a a row to the table
 */
addRow = function() {
  //Table assigned to a variable
  let table = document.getElementById('gradesTable');
  //How many rows
  let totalRows = table.rows.length;
  //Insert after last row
  let row = table.insertRow(totalRows);
  //Look at the first column
  let tableCells = table.rows[0].cells;
  /*
  Let the total cols be assigned the val of the number
  of cols as per the first row
  */
  let totalColumns = tableCells.length;
  //Loop through every col to count
  for (let i = 0; i < totalColumns; i++) {
    //Add a new cell for every column
    let cell = row.insertCell(i);
    //Assign the cell an empty value
    cell.innerHTML = "";
    cell.style.borderSpacing = "10px";
    cell.style.padding = "10px";
  }
  checkUnsub();
};

delRow = function() {
  //Table assigned to a variable
  let table = document.getElementById('gradesTable');
  //How many rows
  let totalRows = table.rows.length;
  //Insert after last row
  table.deleteRow(totalRows - 1);
  //Look at the first column

  checkUnsub();
};

checkUnsub = function() {
  //gets table
  let table = document.getElementById('gradesTable');
  //gets rows of table
  let totalRows = table.rows.length;
  //loops through rows
  for (let i = 1; i < totalRows; i++) {
    //gets cells of current row
    let tableCells = table.rows[i].cells;
    //gets amount of cells of current row
    let totalColumns = tableCells.length;
    //Variables for calculations

    for (let j = 2; j < totalColumns - 1; j++) {
      // get your cell info here
      let cellVal = parseInt(tableCells[j].innerHTML);
      if (isNaN(cellVal) === true) {
        cellVal = 0;
        tableCells[j].style.backgroundColor = "yellow";
        tableCells[j].innerHTML = "-";
        tableCells[j].style.textAlign = "center";
        tableCells[totalColumns - 1].innerHTML = "-";
        tableCells[totalColumns - 1].style.textAlign = "center";
      } else {}
    }
  }
};

alignRight = function(cell) {
  cell.style.textAlign = "right";
  cell.style.backgroundColor = "white";
};

alignLeft = function(cell) {
  cell.style.textAlign = "left";
  cell.style.backgroundColor = "white";
};

checkUnsub = function() {
  let table = document.getElementById('gradesTable');
  let totalRows = table.rows.length;
  for (let i = 1; i < totalRows; i++) {
    let tableCells = table.rows[i].cells;
    let totalColumns = tableCells.length;

    for (let j = 2; j < totalColumns - 1; j++) {
      let cellVal = parseInt([j].innerHTML);
      if (isNaN(cellVal) === true) {
        cellVal = 0;
        tableCells[j].style.backgroundColor = "yellow";
        tableCells[j].innerHTML = "-";
        tableCells[j].style.textAlign = "center";
        tableCells[0].innerHTML = "-";
        tableCells[0].style.textAlign = "center";
        tableCells[1].innerHTML = "-";
        tableCells[1].style.textAlign = "center";
        tableCells[totalColumns - 1].innerHTML = "-";
        tableCells[totalColumns - 1].style.textAlign = "center";
      } else {}
    }
  }
};
