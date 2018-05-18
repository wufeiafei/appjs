
/*
console.log(__dirname);
console.log(__filename);
console.log("hello world");

setTimeout(() => {
    console.log("3 seconds have passed");
}, 3000);

var time = 0;

var timer = setInterval(function(){
    time += 2;
    console.log(time + " seconds have passed");
    if (time >5) {
        clearInterval(timer);
    }
}, 2000);


function sayHi(name) {
    console.log(name + 'Hi');
}

sayHi('hello');

var sayBye = function() {
    console.log('Bye');
}

sayBye();


function callFunction(fun, name) {
   fun(name);
}

callFunction(sayHi, 'rail365');


var stuff = require('./count');

console.log(stuff.counter(['ruby','nodejs','react']));
console.log(stuff.adder(3,2));
console.log(stuff.pi);



//event 
var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(message){
//     console.log(message);
// })

// myEmitter.emit('someEvent','the event was emitted');

var util = require('util');

var Person = function(name) {
    this.name = name
}

util.inherits(Person, events.EventEmitter);

var xiaoming = new Person('xiaoming');
var lili = new Person('lili');
var lucy = new Person('lucy');

var person = [xiaoming, lili, lucy];

person.forEach(function(person) {
    person.on('speak', function(message) {
        console.log(person.name + " said:" + message);
    })

    person.on('eat', function(message) {
        console.log(person.name + " eat:" + message);
    })
});

xiaoming.emit('speak', 'hi');
lucy.emit('speak', 'I want a curry');
lili.emit('eat', 'hello eat');

*/

/*
// 读取文件
var fs = require('fs');

var readMe = fs.readFileSync("readMe.txt","utf8");
console.log(readMe);

fs.writeFileSync("writeMe.txt", readMe);
fs.writeFileSync("writeMe.txt", 'hello world');

//异步读取文件和异步写文件
var read = fs.readFile("readMe.txt","utf8", function(err,data){
    console.log( " 异步： "+ data);
    fs.writeFile("writeMe.txt",data, function() {
        console.log("writeMe has finished");
    })
});

console.log("finished");
*/


//web
var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle = {};
handle['/'] = handler.home;
handle["/home"] = handler.home;
handle['/review'] = handler.review;
handle['/api/v1/records'] = handler.api_records;

server.startServer(router.route, handle);



