function wordBlank(myNoun, myAdj, myVerb, myAdverb){
    var result = "";

    result += "The " + myAdj +" "+ myNoun +" " + myVerb + " to the store " + myAdverb + "!";

    return result;
}

console.log(wordBlank("dog", "big","ran","quicky"))
console.log(wordBlank("bike", "slow","flew","slowly"))
