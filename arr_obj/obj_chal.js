let house = {
    rooms: [
        {
            name: "bedroom",
            doors: 3,
            windows: 4,
            flooring: "carpet",
            current_occupants: []
        },{
            name: "bath",
            doors: 3,
            windows: 4,
            flooring: "carpet",
            current_occupants: []
        },{
            name: "kitchen",
            doors: 3,
            windows: 4,
            flooring: "carpet",
            current_occupants: []
        }],
        people: [{
            name: "Lauren",
            age: 26
        }, {
            name: "Steven",
            age: 27
        }]
}

console.log(house.rooms[1].name);
console.log(house.rooms.map((room) => room.name)); // ["bedroom", "bath", "kitchen"]


house.rooms[2].current_occupants = house.people

console.log(house.rooms[2]);

/* 
name: 'kitchen',
  doors: 3,
  windows: 4,
  flooring: 'carpet',
  current_occupants: [ {
            name: "Lauren",
            age: 26
        }, {
            name: "Steven",
            age: 27
        }]
    ]
*/