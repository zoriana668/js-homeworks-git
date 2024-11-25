// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let mainBlock = document.createElement('div');

document.body.appendChild(mainBlock);

mainBlock.classList.add('main-block');

for(let item of coursesAndDurationArray) {
    let itemElement = document.createElement('div');

    let itemBlockTitle = document.createElement('p');
    let itemBlockDuration = document.createElement('p');

    itemBlockTitle.innerHTML = `Course titile: ${item.title}`;

    itemBlockDuration.innerHTML = `Course duration: ${item.monthDuration}`;

    itemElement.append(itemBlockTitle, itemBlockDuration);

    mainBlock.append(itemElement);
}
