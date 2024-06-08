// Part1: Refactoring old code
let parseString =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let rows = parseString.split("\n");
for (let row of rows) {
  let cells = row.split(",");
  console.log(cells);
}

//Part2: Expanding Functionality
let rawData =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//Spliting the string by rows
let rows1 = rawData.split("\n");
//Extracting the headers
let headers = rows[0].split(",");
//Storing the number of columns
let numberOfColumns = headers.length;
//Parsing the remaining rows into arrays
let dataArray = rows.map((row) => row.split(","));
console.log(dataArray);

//Pasrt 3: Transforming Data
let rawData1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// spliting the string into rows
let rows2 = rawData.split("\n");
//Extracting the headers
let cells = rows[0].split(",");
//parsing the remaining rows into objects
let data = rows.slice(1).map((row) => {
  let values = row.split(",");
  let object = {};
  cells.forEach((head, index) => {
    object[head] = values[index];
  });

  return object;
});
console.log(data);

//Part4: Sorting and manipulating Data
//removing the last element from the sorted array.
data.pop();
console.log(data);
//Inserting the object at index 1
let addElement = { ID: "48", name: "Barry", occupation: "Runner", age: "25" };
data.splice(1, 0, addElement);
console.log(data);
//Adding the object at the end of the array
let addAtTheEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
data.push(addAtTheEnd);
//Calculating the average age of the group
let calculateAvrgAge = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
//initializing a variable that will hold the sum of ages
let someAge = 0;
for (let i = 0; i < calculateAvrgAge.length; i++) {
  someAge += parseInt(calculateAvrgAge[i].age);
}
let averageAge = someAge / calculateAvrgAge.length;
console.log(averageAge);

//Part 5: Full Circle
//Transforming the final set of Data back into CSV format
//Considering the variable calculateAvrgAge as the array on objects.
//Creating a string for the CSV header
let headers1 = "ID,name,occupation,age\n";
let rows3 = "";
for (let i = 0; i < calculateAvrgAge.length; i++) {
  let row1 = `${calculateAvrgAge[i].id},${calculateAvrgAge[i].name},${calculateAvrgAge[i].occupation},${calculateAvrgAge[i].age}\n`;
  rows3 += row1;
}
//Combining the headers an rows into a single CSV string
let CSV = headers1 + rows3;
console.log(CSV);
