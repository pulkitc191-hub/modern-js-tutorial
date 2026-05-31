// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "March";

switch (month) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("February");
        break;
    case "March":
        console.log("March");
        break;
    default:
        console.log("Default case");
        break;
}


//?? nullish coalescing operator , return left value if both are not null or undefined else returns right value

const price = 80
price <= 90 ? console.log("true") : console.log("False");