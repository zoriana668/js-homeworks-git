// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r

// formula - S=2πr2 +2πrh


function calc(r, h) {
    let pi = 3.14;
    let baseCylinderArea = 2 * pi * r * r;
    let lateralCylinderArea = 2 * pi * r * h;
    let cylinderArea = baseCylinderArea + lateralCylinderArea;
    return cylinderArea;
}

console.log('The area of cylinder is', calc(3, 7));