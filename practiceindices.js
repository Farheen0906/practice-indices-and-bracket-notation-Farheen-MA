/*
Task 1: Create a multi-dimensional array with nine books and/or movies of your
choice.
*/

let librarySystem = [
    ["Home Alone", "Finding Nemo", "The Lion King" ],
    ["Frozen", "Snow white", "Beauty and the beast"],
    ["Superman", "Spider-Man", "The Batman"]
];

/*
Task 2: Access and log all the elements in the array using bracket notation with
numbers.
*/
console.log("All the elements in the first sub-array are:");
console.log(librarySystem[0]);
console.log("All the elements in the second sub-array are:");
console.log(librarySystem[1]);
console.log("All the elements in the third sub-array are:");
console.log(librarySystem[2]);

/*
Task 3: Access and log all the elements in the array using bracket notation with
variables as indices. Use the variables row and item.
*/

for(let row=0; row<librarySystem.length; row++ ){
    console.log("items at row " +row);
    for(let item=0; item<librarySystem[row].length; item++ )
        {
            console.log(librarySystem[row][item]);
        }
}
/*
Task 4: Write a loop that prints all the items on the second shelf.
*/

let i =2;
console.log("Items on the second shelf are: " );//printing elements from second shelf/row
for(let j =0; j<librarySystem[i].length; j++){
    console.log(librarySystem[i][j]);
}