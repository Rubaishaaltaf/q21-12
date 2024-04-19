// Q21:
//They think to something you could store in a TypeScript object.Write program that creates
//object containing these items.
var object = {
    Name: "Laptop",
    Generation: 8,
    Speed: "Fast",
    color: "Black",
    price: 75000,
    Instoke: true,
};
console.log(object);
// Q22:
// Intentional Error: if you haven't recevied an array index erroe in one of your programs
// yet, try to make one happen. change an index in one of your programs to produce an
// index erro. Make sure you correct the error before closingthe program.
var friends = ["Ayesha", "Rubab", "Dua", "Fiza", "Aiman"];
friends.slice();
for (var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
}
