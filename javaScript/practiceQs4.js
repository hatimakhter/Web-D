// use switch statement to print the day of the week using a number variable 'day' with values 1 to 7.
// 1 = Monday, 2 = tuesday & so on

console.log("1 to 7 days weekly charts:");
let day = 12;
switch(day){
    
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("wrong day!");
}