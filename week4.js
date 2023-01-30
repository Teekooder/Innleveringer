// Task 1

let people = ["Benedict Thompson", "Lennon Kline", "Trinity Cox", "Angela Willis", "Oliwia Walter", "Halle Orozco", "Gregory Carrillo", "Leyla Dalton", "Roosevelt Harrington", "Antonia Aguilar"];

// Task 2

for (let i=0;i<people.length;i=i+1){
    console.log (people[i])
}

// Task 3

let longestName =""
for (let i=0;i<people.length;i=i+1){
   if(longestName.length<people[i].length){
    longestName=people[i]
    }
}
console.log (longestName);

// Task 4

let alphabetical =people.sort();

for (let i=0;i<alphabetical;i=i+1){
    console.log (alphabetical[i])
}

// Task 5

function sortByLastName (a,b) {
  return a.LastName,length -b.lastName;
}

// Task 6

people = f(people);

const sortedPeople = f(people);

function f(sortedPeople) {
    let o = [];
    for (let i = 0; i < 10; i++) 
      o.push({ firstName: sortedPeople[i].split(" ")[0], lastName: sortedPeople[i].split(" ")[1] });
    return o;
  }
  
  console.log(sortedPeople);