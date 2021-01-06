/*
 * @Author: sunyinge
 * @Date: 2020-09-14 10:37:23
 * @LastEditTime: 2020-12-07 11:37:57
 * @LastEditors: Sun yinge
 * @Description: In User Settings Edit
 * @FilePath: \Typescript-base\greeter.ts
 */
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return User;
}());
function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = new User('yinge', 'sun');
console.log(greeter(user));
