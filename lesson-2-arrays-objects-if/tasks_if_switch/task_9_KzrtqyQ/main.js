// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).


let day = +prompt('Enter a number of day of the week');

switch(day) {
    case 1:
    console.log(`On ${day} of the week - Monday you need to go to the groomer with the dog`);
    break;

    case 2:
        console.log(`On ${day} of the week - Tuesday you need to go to the dentist`);
    break;

    case 3:
        console.log(`On ${day} of the week - Wednesday you need to go to the office`);
    break;

    case 4:
        console.log(`On ${day} of the week - Thursday you need to submit a declaration for the account`);
    break;

    case 5:
        console.log(`On ${day} of the week - Friday you need to clean the flat after work`);
    break;

    case 6:
        console.log(`On ${day} of the week - Saturday you go with your dog to the forest`);
    break;

    case 7:
        console.log(`On ${day} of the week - Sunday you visit your parents`);
    break;

    default:
        console.log('Please check if you type the correct value');
}