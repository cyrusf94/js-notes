function leapYear (year) {
    
    if (year % 100 != 0 && year % 4 == 0  || year % 400 == 0) {
        console.log("thats a leap year");
    } else {
        console.log("thats not a leap year");
    }
}

leapYear(2000);