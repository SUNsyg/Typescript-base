/*
 * @Author: sunyinge
 * @Date: 2020-09-14 10:37:23
 * @LastEditTime: 2020-12-07 11:37:57
 * @LastEditors: Sun yinge
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-base\greeter.ts
 */
class User {
    fullName:string
    firstName: string
    lastName: string

    constructor(firstName:string,lastName:string) {
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = firstName + ' ' +lastName
    }
}

interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName
}

let user = new User('yinge', 'sun')

console.log(greeter(user))
