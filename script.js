


console.log(typeof(String(4)));

console.log('22' + '2ww');

console.log('2' + false);

console.log('http://vk.com/catalog/' + 5);

console.log(typeof(Number('5')));

console.log(typeof(5 + +'5'));

console.log(typeof(parseInt('15px',10)));

let ans = +prompt("Hello?", '');

//0, ' ', null, undefined, NaN - false

let swither = null;

if(swither) {
    console.log('Working..');
}

swither = 1;

if(swither) {
    console.log('Working..');
}

console.log(typeof(Boolean('5')));

console.log(typeof(!!'5'));