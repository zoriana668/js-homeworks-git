// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
//  Відобразити всі поля кожної корзини.


let cartsItems = document.querySelector('.carts');


fetch('https://dummyjson.com/carts')
    .then( response => response.json())
    .then(cartsObject => {
        console.log(cartsObject);
        let carts = cartsObject.carts;
        console.log(carts);

        for(const cart of carts) {
            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            let cartItemContent = document.createElement('div');

            cartItemContent.innerText = `
                                    ID - ${cart.id}
                                    total - ${cart.total}
                                    discounted Total - ${cart.discountedTotal}
                                    user ID - ${cart.userId}
                                    total Products - ${cart.totalProducts}
                                    total Quantity - ${cart.totalQuantity}`


            let arrProducts = cart.products;
            let list = document.createElement('ol');

            for (const product of arrProducts) {
                let li = document.createElement('li');
                let p = document.createElement('p');

                let img= document.createElement('img');
                img.src = product.thumbnail;
                img.alt = product.title;

                p.textContent = `discount Percentage - ${product.discountPercentage}
                                 discounted Total - ${product.discountedTotal}
                                 product ID - ${product.id}
                                 product price - ${product.price}
                                 quantity - ${product.quantity}
                                 title - ${product.title}
                                 total - ${product.total}
                                `

                li.append(p, img);
                list.appendChild(li);

                cartItemContent.appendChild(list);

            }

            cartItemContent.appendChild(list);

            cartItem.appendChild(cartItemContent);

            cartsItems.appendChild(cartItem);
        }
    })