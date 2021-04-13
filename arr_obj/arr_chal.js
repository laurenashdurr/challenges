
let start = [
    "Justin",
    "Jenn",
    "Andy",
    "Zach",
    "Scott"
]

// Console.log a sub array containing only "J" names

console.log(start.filter((name) => {
    return name[0] === "J"
}
));

// Find the average of all the students grades

let students = [
    {
        name: "Andy",
        grade: 3.0
    },
    {
        name: "Bill",
        grade: 2.8
    },
    {
        name: "Jackie",
        grade: 3.0
    },
    {
        name: "Eli",
        grade: 4.0
    },
    {
        name: "Zach",
        grade: 2.1
    },
]

let total = 0
for (let student of students){
    console.log(student.grade);
    total += student.grade;
}

let average = total / students.length;

console.log(average);