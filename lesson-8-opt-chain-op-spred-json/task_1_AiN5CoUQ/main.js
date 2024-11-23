// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.


function deepCloner(obj) {
    if(obj) {       // тут перевірка на undefined, null, NaN
        let functions = [];     // масив для збереження функцій з об'єкту
        for(let key in obj) {
            if(typeof obj[key] === 'function') {            // шукаємо за типом чи властивість об'єкту є масивом
                let functionClone = obj[key].bind({});
                functions.push({functionClone, key});
            }
        }
        let cloneObj = JSON.parse(JSON.stringify(obj));

        for(let func of functions) {
            cloneObj[func.key] = func.functionClone;
        }

        console.log(cloneObj);
        return cloneObj;
    }

    throw new Error('please pass the object to copy to the function');
}

const clone = deepCloner({id: 123, name: 'Ostap', greeting() {console.log('hello')}, foo() {console.log('my friends')}});
clone.greeting();
clone.foo();


// ================================================================================================


let myObj = {
    id: 234,
    name: 'Ivan',
    surname: 'Franko',
    userCredo() {
        console.log(`today is perfect day for writing something`);
    }
};


let cloneMyObj = deepCloner(myObj);

cloneMyObj.userCredo();