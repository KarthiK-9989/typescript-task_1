function check_leapyear() {
    //define variables
    var year;

    //get the entered year from text box 
    year = document.getElementById("input").value;

    //three conditions to find out the leap year
    if ((year % 4 == 0) && (year % 100 == 0) || (year % 400 == 0)) {
        alert(year + " is a leap year");
    } else {
        alert(year + " is not a leap year");
    }
}

check_leapyear();



let str;
let reversedstr = (str) => {
    let newstring = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newstring += str[i];
    }
    return newstring;

}
console.log(reversedstr("hello"));