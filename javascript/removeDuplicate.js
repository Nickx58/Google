/*
Remove duplicate from array of object
*/

const books = [
    { title: "JS", author: "Nik" },
    { title: "Java", author: "Manu" },
    { title: "JS", author: "Nisha" },
    { title: "HTML", author: "JJ" }
];

const unique = {};

const newArray = books.filter((book) => {
    if (!unique[book.title]) {
        unique[book.title] = true;
        return true;
    }
    return false;
})

console.log(newArray)