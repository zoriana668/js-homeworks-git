// #Kx1xgoKy8
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'>,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


let mainBlock = document.createElement('div');
document.body.append(mainBlock);

for(let itemArr of coursesAndDurationArray) {
    let item = document.createElement('div');
    item.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerHTML = itemArr.title;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerHTML = itemArr.monthDuration;


    item.append(h1, p);

    mainBlock.append(item);
}