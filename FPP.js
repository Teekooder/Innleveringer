
const persons = [
    { "name": "Paula Key", "age": 23 },
    { "name": "Riya Dickerson", "age": 99 },
    { "name": "Layne Colon", "age": 53 },
    { "name": "Pranav Giles", "age": 51 },
    { "name": "Kamryn Davis", "age": 27 },
    { "name": "Taniyah Yu", "age": 17 },
    { "name": "Brendon Porter", "age": 23 },
    { "name": "Jordin Hancock", "age": 86 },
    { "name": "Shawn Vargas", "age": 88 },
    { "name": "Sawyer Copeland", "age": 14 },
    { "name": "Gustavo Baldwin", "age": 7 },
    { "name": "Renee Wilson", "age": 29 }
]

const age = [23, 99, 53, 51, 27, 17, 23, 86, 88, 14, 7, 29];
const names = ["Paula Key", "Riya Dickerson", "Layne Colon", "Pranav Giles", "Kamryn Davis", "Taniyah Yu", "Brendon Porter", "Jordin Hancock", "Shawn Vargas", "Sawyer Copeland", "Gustavo Baldwin", "Renee Wilson"]

//1
const overFifty = age.reduce((accumulator, currentValue) => {
    if (currentValue > 50) {
        const old = currentValue;
        return [...accumulator, old];
    }
    return accumulator;
}, []);

console.log(overFifty.length);


//2
names.forEach(skrivUtHei);

function skrivUtHei(names) {
    console.log(" Hi " + names);
}

//3

const map1 = age.map(x => x + 1);

console.log(map1);

//4
function isOldEnough(value) {
    return value >= 18;
}

const filtered = [23, 99, 53, 51, 27, 17, 23, 86, 88, 14, 7, 29].filter(isOldEnough);


console.log(filtered)

//5

function sumPrint() {
    const sum = persons.reduce(
        (accumulator, currentValue) => accumulator + currentValue.age,
        0,
    );

    console.log(sum);
}
sumPrint();

// 6

function averagePrint() {
    const sum = persons.reduce(
        (accumulator, currentValue) => accumulator + currentValue.age,
        0,
    );

    console.log(sum / (persons.length));
}
averagePrint();


