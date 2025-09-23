//for loop:
let fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//for…of loop:
for (let fruit of fruits) {
    console.log(fruit);
}

//forEach method:
fruits.forEach(fruit => console.log(fruit));
