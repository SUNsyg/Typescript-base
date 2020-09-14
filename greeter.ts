/*
 * @Author: sunyinge
 * @Date: 2020-09-14 10:37:23
 * @LastEditTime: 2020-09-14 11:13:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-base\greeter.ts
 */
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string,
    lastName: string;
}

function greeter(person: Person) {
    return "Hello," + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User")

document.body.innerHTML = greeter(user);