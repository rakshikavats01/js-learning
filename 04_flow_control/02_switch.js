// Switch-syntax
//switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const day=7
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    default:
        console.log("weekend")
        break;
}
//if we didn't use break entire code except default will be executed after match,break simply break the control flow after match