//? Objects

let marvelHero = {
    fullName: "Peter Parker",
    codeName: "Spider-Name",
    age: 25,
    active: true
};
/*
? Object Literal
When our values are written within our keys
- Are HardCoded

? Structure

keyword objectName = {
    key value
}

* Objects are considered Dictionaries

*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: "animated",
    season: {
            "season one" : [
            {
                episodr_title: "Simpsons Roasting on an open fire",
             aired: "1989-12-17",
            },
            {
             episode_title: "Bart the Genius",
             aired: "1990-01-01",
            },
         ],
         "season two": [
             //
            ],
            "season three": [
            //
         ],
    },
    currently_running: true,
}
console.log("")
// Dot notation
//console.log(theSimpsons.genre); // animated
// Square bracket notation
// console.log(theSimpsons["genre"]); // animated

//console.log(theSimpsons.seasons["season one"]);
//console.log(theSimpsons["seasons"]["season one"][0].episode_title); // "Simpsons Roasting on an open fire"

theSimpsons.characters = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];



/* 
    - Use an array method to add another character to the character array
    - console.log just the characters from theSimpsons object
 */

  theSimpsons.characters.push("Ned"); 
  // console.log(theSimpsons.characters);
  
   console.log(theSimpsons);

