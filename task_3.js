function eql(a, b) {
    if (a == null || typeof (a) != "object" ||
        b == null || typeof (b) != "object") {
        return false;
    }
    let result;
    for (let key in a) {
        if (key in a && key in b)
            result = true;
        else
            return false;
    }
    return result;
}
//---------------------------------------------------------
function deleteProps(obj, ...props) {
    for (let i = 0; i < props.length; i++) {
        if (props[i] in obj)
            delete obj[props[i]];
    }
    return obj;
}
//---------------------------------------------------------
constlibrary = [{
    year: 1995,
    pages: 286,
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254
}, {
    year: 2015,
    pages: 656,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    libraryID: 4264
}, {
    year: 2008,
    pages: 464,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    libraryID: 3245
}, {
    year: 2015,
    pages: 706,
    title: "Cracking the Coding Interview: 189 Programming Questions and Solutions",
    author: "Gayle Laakmann McDowell",
    libraryID: 2748
}, {
    year: 1997,
    pages: 672,
    title: "The Art of Computer Programming, Vol. 1: Fundamental Algorithms, 3rd Edition",
    author: "Donald E. Knuth",
    libraryID: 2748
}];
//---------------------------------------------------------
function addEngine(obj) {
    obj.engine = {
        model: "AMR-250-90",
        type: "AC",
        weight: 150,
        power: 210,
        torque: 280,
        defect: function() { return Math.random() }
    };

    return obj;
}

function addBattery(obj) {
    obj.battery = {
        config: "40S-10P",
        cells: 400,
        energy: 24.5,
        mass: 267
    };

    return obj;
}

function addController(obj) {
    obj.controller = {
        model: "Evnetics Shiva",
        current: 3000,
        power: 1.275,
        voltage: "8-425 Volts",
        prechargeCircuit: true
    };

    return obj;
}

function addCharger(obj) {
    obj.charger = {
        model: "Elcon PFC5000 Charger",
        input: "0.2 to 30A AC",
        output: "16A to 80A DC",
        algorithm: "programmable",
        efficiency: 92
    };

    return obj;
}

function addConverter(obj) {
    obj.converter = {
        type: "DC-DC",
        inputCurrent: "0-3 Amps / 120 volts",
        outputCurrent: "0-30 Amps / 12 volts",
        isolated: "Selectabel"
    };

    return obj;
}

function addWheels(obj) {
    obj.wheels = {
        motor: "M700",
        drumBrake: "standart",
        rim: 15,
        tire: "265/45-R20",
        size: "20/20"
    };

    return obj;
}

function addBody(obj) {
    obj.body = {
        doors: 4,
        color: "red",
        glass: "laminated",
        bumper: "S3E6-7",
        interior: "black"
    };
    return obj;
}

function manufactureCar_sep() {
    let obj = {};
    addEngine(obj);
    addBattery(obj);
    addController(obj);
    addCharger(obj);
    addConverter(obj);
    addWheels(obj);
    addBody(obj);
    return obj;
}

function manufactureCar_chain() {
    return addBody(addWheels(addConverter(addCharger(addController(addBattery(addEngine({})))))));
}
//---------------------------------------------------------
function controlQuality(obj) {

    return true;
}

console.log(Math.random().toFixed(1));
































//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
let x;

switch (x) {
    case 1:
        let objA = {
            name: "a",
            year: 1993,
            height: 188
        };
        let objB = {
            name: "a",
            year: 1993
        };
        console.log(eql(objA, objB));
        break;
    case 2:
        let obj = {
            a: 2,
            mambo: 43,
            zelda: 10,
            lock: "333"
        };
        let test = deleteProps(obj, "mambo", "knight", "loop", "lock", "rest", "a", "b");
        console.log(test);
        break;
    case 3:
        console.log("Sort by ascending year");
        let sortByAscendingYear = constlibrary.map(v => v).sort((a, b) => {
            return a.year - b.year
        }).forEach(element => {
            console.log(element)
        });
        console.log("Sort by descending year");
        let sortByDescendingYear = constlibrary.map(v => v).sort((a, b) => {
            return b.year - a.year
        }).forEach(element => {
            console.log(element)
        });
        console.log("Sort by ascending pages");
        let sortByAscendingPages = constlibrary.map(v => v).sort((a, b) => {
            return a.pages - b.pages
        }).forEach(element => {
            console.log(element)
        });
        console.log("Sort by autor");
        let sortByAuthor = constlibrary.map(v => v).sort((a, b) => {
            return a.author > b.author
        }).forEach(element => {
            console.log(element)
        });
        break;
    case 4:
        let Factory = {};
        Factory.manufactureCar = manufactureCar_sep;
        console.log(manufactureCar_chain());
        break;
    default:
        //console.log("Enter the value of the existing task number in the variable 'x'!");
}
//---------------------------------------------------------
//---------------------------------------------------------
//---------------------------------------------------------
// function eql(a, b) {
//     let eql = JSON.stringify(a) === JSON.stringify(b);
//     return eql;
// }

// let user1 = {
//     name: "a",
//     year: 1993
// };
// let user2 = {
//     name: "a",
//     year: 1993
// };

// console.log(eql(user1, user2));
//---------------------------------------------------------
// function deepEqual(a, b) {
//     if (a === b) {
//         return true;
//     }

//     if (a == null || typeof(a) != "object" ||
//         b == null || typeof(b) != "object")
//     {
//         return false;
//     }

//     let propertiesInA = 0, propertiesInB = 0;

//     for (let property in a) {
//         propertiesInA++;
//     }

//     for (let property in b) {
//         propertiesInB++;
//         if (!(property in a) || !deepEqual(a[property], b[property])) {
//             return false;        
//         }
//     }        
//     return propertiesInA == propertiesInB;
// }

// let objA = {
//     prop1: 'value1',
//     prop2: 'value2',
//     prop3: 'value3',
//     prop4: {
//         subProp1: 'sub value1',
//         subProp2: {
//             subSubProp1: 'sub sub value1',
//             subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
//         }
//     },
//     prop5: 1000,
// };

// let objB = {
//     prop5: 1000,
//     prop3: 'value3',
//     prop1: 'value1',
//     prop2: 'value2',
//     prop4: {
//         subProp2: {
//             subSubProp1: 'sub sub value1',
//             subSubProp2: [1, 2, {prop2: 1, prop: 2}, 4, 5]
//         },
//         subProp1: 'sub value1'
//     }  
// };

//console.log(deepEqual(objA, objB));
//---------------------------------------------------------