// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію,
// які дістає потрібний вам масив з localStorage та додає в нього об'єкт

// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void



function addToLocalStorage(arrayName, objToAdd) {

    let storedArray = localStorage.getItem(arrayName);


    let myArray = [];
    if (storedArray) {
        try {
            myArray = JSON.parse(storedArray);
            if (!Array.isArray(myArray)) {
                console.error(`Error with ${arrayName}. it is not array`);
                return;
            }
        } catch (error) {
            console.error(`Error for ${arrayName}`);
            return;
        }
    }

    if (objToAdd && typeof objToAdd === 'object' && !Array.isArray(objToAdd)) {
        myArray.push(objToAdd);
    } else {
        console.error('Value is not object');
        return;
    }

    try {
        localStorage.setItem(arrayName, JSON.stringify(myArray));
    } catch (error) {
        console.error(`Error in localStorage for ${arrayName}`);
    }
}

localStorage.setItem('sessionsList', JSON.stringify([]));

// Виклик функції
addToLocalStorage('sessionsList', { id: 1, name: 'Session 1' });
addToLocalStorage('sessionsList', { id: 2, name: 'Session 2' });

