
// এখানে নিউ কি-ওয়ার্ড ব্যবহার কোন একটি ক্লাস থেকে অনেক অবজেক্ট তৈরী করা হলো-
// Attribute, Property, Key কাছাকাছি টাইপের জিনিস-
// Making a class for making many object :- 
// Class Dstructor new keyword are used for making similar object from a class
// New কি করে ? - New ক্লাস থেকে একটি নতুন অবজেক্ট তৈরী করে---
class Person {
    constructor(x, y, salary){
        this.firstName = x;
        this.lastName = y;
        this.salary = this.salary;
    }
}
const heroPerson = new Person("Mizan", "Zahin", 2000);
console.log(heroPerson);
const friendlyPerson = new Person("Mahabub", "Hassan", 23608);
console.log(friendlyPerson);
