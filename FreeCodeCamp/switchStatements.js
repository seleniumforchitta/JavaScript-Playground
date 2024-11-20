function caseInSwitch(val){
    var result = "";
    switch(val){
        case 1:
            result = "Alpha";
            break;
        case 2:
            result = "Beta";
            break;
        case 3:
            result = "Gamma";
            break;
        case 4:
            result = "Delta";
            break;
        default:
            result = "You have entered an invalid input. Please give input between 1-4";
    }
    return result;
}

console.log(caseInSwitch(5));

function sequentialSwitch(val){
    var result = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            result = "Low";
            break;
        case 4:
        case 5:
        case 6:
            result = "Mid"
            break;
        case 7:
        case 8:
        case 9:
            result = "High"
            break;
        default:
            result = "You have entered an invalid input. Please give input between 1-9";
    }
    return result;
}

console.log(sequentialSwitch(1));  




