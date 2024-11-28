// #whXxOBlYS0H
// - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути у вигляді списку під час відображення.

let recipesItems = document.querySelector('.recipes');


fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(recipesObject => {
        console.log(recipesObject);
        let recipes = recipesObject.recipes;
        console.log(recipes);

        for(let recipe of recipes) {
            console.log(recipe);

            let recipeItem = document.createElement('div');
            recipeItem.classList.add('recipe-item');

            for(let recipeKey in recipe) {
                if(Array.isArray(recipe[recipeKey])) {
                    let recipeInfo = document.createElement('div');
                    let title = document.createElement('div');
                    title.innerText = `${recipeKey}`;

                    let numberedList = document.createElement('ol');

                    let array = recipe[recipeKey];
                    for(let itemArr of array) {
                        let liElem = document.createElement('li');
                        liElem.innerText = itemArr;
                        numberedList.appendChild(liElem);
                    }

                    recipeInfo.append(title, numberedList);
                    recipeItem.appendChild(recipeInfo);
                } else {
                    if(recipeKey !== 'image') {
                        let description = document.createElement('div');
                        description.innerText = `${recipeKey} : ${recipe[recipeKey]}`
                        recipeItem.appendChild(description);
                    }
                }
            }

            let img = document.createElement('img');

            img.src = recipe.image;
            recipeItem.append(img);

            recipesItems.appendChild(recipeItem);
        }
    });





