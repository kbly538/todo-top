/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const Todo_list = function(){{
    this.todos = [];
    Todo_list['id'] = 123;
}};


let x = new Todo_list();

console.log(x);


function AdvancedTodos(){
    proto = new Todo_list();
    let advancedprops = 3;

    advancedprops++;

    return Object.assign(Object.create(proto), {advancedprops})
}


console.log(AdvancedTodos.id)

x = new AdvancedTodos();
let y = new AdvancedTodos();
let z = x;

console.log(x)
console.log(y)
console.log(z)


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnREFBZ0QsY0FBYztBQUM5RDs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRvZG9fbGlzdCA9IGZ1bmN0aW9uKCl7e1xuICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICBUb2RvX2xpc3RbJ2lkJ10gPSAxMjM7XG59fTtcblxuXG5sZXQgeCA9IG5ldyBUb2RvX2xpc3QoKTtcblxuY29uc29sZS5sb2coeCk7XG5cblxuZnVuY3Rpb24gQWR2YW5jZWRUb2Rvcygpe1xuICAgIHByb3RvID0gbmV3IFRvZG9fbGlzdCgpO1xuICAgIGxldCBhZHZhbmNlZHByb3BzID0gMztcblxuICAgIGFkdmFuY2VkcHJvcHMrKztcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUocHJvdG8pLCB7YWR2YW5jZWRwcm9wc30pXG59XG5cblxuY29uc29sZS5sb2coQWR2YW5jZWRUb2Rvcy5pZClcblxueCA9IG5ldyBBZHZhbmNlZFRvZG9zKCk7XG5sZXQgeSA9IG5ldyBBZHZhbmNlZFRvZG9zKCk7XG5sZXQgeiA9IHg7XG5cbmNvbnNvbGUubG9nKHgpXG5jb25zb2xlLmxvZyh5KVxuY29uc29sZS5sb2coeilcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9