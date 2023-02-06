// Convert inches to millimeters/centimeters/meters

const mm = "25,4";
const cm = "2,54";
const m = "0,254";


function convertFromInches(length){
    let output = "mm";
    if (length > "25,4") {
        output = "cm";
    } 
    return output;
    }
    
    if (convertFromInches(mm) === "25,4"){
        console.log("👍 Success mm = 25,4"); 
    } else {
        console.log("👎 Error mm != 25,4"); 
    }
    if (convertFromInches(cm) === "2,54"){
        console.log("👍 Success cm = 2,54"); 
    } else {
        console.log("👎 Error cm != 2,54"); 
    }
    if (convertFromInches(m) === "0,254"){
        console.log("👍 Success m = 0,254"); 
    } else {
        console.log("👎 Error m != 0,254"); 
    }
