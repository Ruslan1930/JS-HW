const language = prompt('en');

switch (language) {
    case 'en':
        console.log ('Hello');
        break;
    case 'de':
        console.log ('Gutten tag');
        break;
    case 'fr':
        console.log('Bonjorno')
        break;
    default:
        console.log('Язык не выбран')
}
