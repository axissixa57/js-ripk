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
function addEngine(obj, model, type, weight, power, torque) {
    obj.engine = {
        model: model,
        type: type,
        weight: weight,
        power: power,
        torque: torque
    };

    return obj;
}

function addBattery(obj, config, cells, energy, mass) {
    obj.battery = {
        config: config,
        cells: cells,
        energy: energy,
        mass: mass
    };

    return obj;
}

function addController(obj, model, current, power, voltage, prechargeCircuit) {
    obj.controller = {
        model: model,
        current: current,
        power: power,
        voltage: voltage,
        prechargeCircuit: prechargeCircuit
    };

    return obj;
}

function addCharger(obj, model, input, output, algorithm, efficiency) {
    obj.charger = {
        model: model,
        input: input,
        output: output,
        algorithm: algorithm,
        efficiency: efficiency
    };

    return obj;
}

function addConverter(obj, type, inputCurrent, outputCurrent, isolated) {
    obj.converter = {
        type: type,
        inputCurrent: inputCurrent,
        outputCurrent: outputCurrent,
        isolated: isolated
    };

    return obj;
}

function addWheels(obj, motor, drumBrake, rim, tire, size) {
    obj.wheels = {
        motor: motor,
        drumBrake: drumBrake,
        rim: rim,
        tire: tire,
        size: size
    };

    return obj;
}

function addBody(obj, doors, color, glass, bumper, interior) {
    obj.body = {
        doors: doors,
        color: color,
        glass: glass,
        bumper: bumper,
        interior: interior
    };
    return obj;
}

function manufactureCar_sep(obj)
{
    addEngine(obj, "AMR-250-90", "AC", 150, 210, 280);
    addBattery(obj, "40S-10P", 400, 24.5, 267);
    addController(obj, "Evnetics Shiva", 3000, 1.275, "8-425 Volts", true);
    addCharger(obj, "Elcon PFC5000 Charger", "0.2 to 30A AC", "16A to 80A DC", "programmable", 92);
    addConverter(obj, "DC-DC", " 0-3 Amps / 120 volts", "0-30 Amps / 12 volts", "Selectabel");
    addWheels(obj, "M700", "standart", 15, "265/45-R20", "20/20");
    addBody(obj, 4, "red", "laminated", "S3E6-7", "black");
    return obj;
}

let Factory = {};
let result = manufactureCar_sep(Factory);

for(key in result)
{
    //console.log(`Ключ: ${key} значение: ${plusEngine[key]}`)
    console.log(key);
    console.log(result[key]);
}




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
        let sortByAscendingYear = constlibrary.map(v => v).sort((a,b) => { return a.year - b.year }).forEach(element => {console.log(element)});
        console.log("Sort by descending year");
        let sortByDescendingYear = constlibrary.map(v => v).sort((a,b) => { return b.year - a.year }).forEach(element => {console.log(element)});
        console.log("Sort by ascending pages");
        let sortByAscendingPages = constlibrary.map(v => v).sort((a,b) => { return a.pages - b.pages }).forEach(element => {console.log(element)});
        console.log("Sort by autor");
        let sortByAuthor = constlibrary.map(v => v).sort((a,b) => { return a.author > b.author }).forEach(element => {console.log(element)});
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