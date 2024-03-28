//console.log("hello world");
// var x;
// x='leman';
// console.log(x);

// var netice;
// const x=60;
// const y=12;
// let z = 7
// netice=x%y;  //qalan qaliq
// netice = z++ ; //artiri ama ekrana yazmir
// netice = +z;// artirir ve ekrana yazdiri
// console.log(netice);


// let main ="hello world";
// console.log('hello "world"');

// console.log(`Hello

// world`);

// User:
// let name = "Mikhail";
// let surname = "Tal";
// let age = 55;
// let data = `My name is ${name} ${surname}. I am ${age}`;
// console.log(data);
// console.log(`Hesabla: ${7 + 7}`);

// console.log(main.length);
// console.log(main.toUpperCase());
// console.log(main.toLowerCase())
// console.log(main.indexOf('o'));//herfin necenci indeks oldugunu gosterir
// console.log(main.substring(0,5));
// console.log(main.slice(5));
// console.log(main.replace('Hello' , 'salam')); //sozu evez edir
// console.log(main.charAt(0));//herfleri yazir
// console.log(main.at(-1)); //en sondaki herfi yazir
// console.log(main.charAt(main.length - 1));//en sondaki herfi yazir
// console.log(main.includes("Helz")); //true false deyeri
// console.log(main.startsWith("hello")); 
// console.log(main.endsWith("world"));
// console.log(main.charCodeAt(0)); //her herfin ozununn reqemini godterir
// console.log(String.fromCharCode(72));//reqeme gore herfi teyin edir
// console.log(main.replaceAll("world", "Dunya")); 
// let main ="hello world world World";
// console.log(main.replace(/world/gi, "dunya"));//byoklu kicikli hamisni yerine yazir
// console.log(main.replace(/[^a-z]/gi, ""));
// console.log(main.replace(/\s/g, "-"));butun aralara boqluq qoyur
// console.log(main);
// console.log(main.trim());


// let min = 65;
// let max = 90;

// let random1 = Math.floor(Math.random() * (max - min + 1) + min);
// let random2 = Math.floor(Math.random() * (max - min + 1) + min);
// let random3 = Math.floor(Math.random() * (max - min + 1) + min);
// let random4 = Math.floor(Math.random() * (max - min + 1) + min);
// let random5 = Math.floor(Math.random() * (max - min + 1) + min);

// console.log(
//   String.fromCharCode(random1) +
//     String.fromCharCode(random2) +
//     String.fromCharCode(random3) +
//     String.fromCharCode(random4) +
//     String.fromCharCode(random5)
// );

//concat  birlesdirir
// let d ="hello world";
// let c ="hello world";
// let net = c.concat(d)
// console.log(net);


//repeat tekrar tekrar yazir
// let main ="hello world";
// let main2 = main.repeat(4);
// console.log(main2);

//match
// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match('rain')
// console.log(result);

//test



// let eded1 = +prompt('1c-i ededi daxil edin');
// let eded2 = + prompt('2c-i ededi daxil edin');
// let netice = eded1+eded2;
// if (netice %2===0){
// console.log(`${eded1} ve ${eded2}  ededlerin cemi ${netice}`);
// }else{
//     console.log('tekdir');
// }


// let eded = +prompt(' ededi daxil edin');
// for(let  i = 1 ;i <= eded ; i++){
//     if(eded%1===0 && eded%eded===0){
//         console.log(i);
//     }
// }













// Array methods
// let numbers = [1, 3, 5, 6];
// console.log(numbers);

// const numbers_map = numbers.map((x) => (x ** 2)); //ededlerin hamsini kvadarat yukseldir
// console.log(numbers_map);

// const numbers_filter = numbers.filter((x) => (x % 2 === 0)); //cut ededelri cixardir
// console.log(numbers_filter);

// const numbers_find = numbers.find((x) => x % 2 === 0);  // bu serti odeyen ilk ededi cixardir
// console.log(numbers_find);

// const numbers_some = numbers.some((x) => x % 2 === 0);  // biri duzduse true flase qaytarir
// console.log(numbers_some);

// const numbers_every = numbers.every((x) => x % 2 === 0);// hamsini yoxlayir true false qaytarir
// console.log(numbers_every);

// let data = ["Hello","world","Demo","happy"]
// //                                       D                  D
// const data_filter = data.filter((x) => x.charAt(0) === x.charAt(0).toUpperCase()) //ilk herfi boyuk olanlari caxrti
// console.log(data_filter);


// let numbers = [11111, 1, 2, 3, 4, 5, "a1"];
// console.log(numbers);

// let data = ["A", "C", "B", 1, 2, "1a", 111];
// console.log(data);

// const numbers_sort = numbers.sort((a, b) => a - b); kicikden boyuye duzur
// console.log(numbers);

// data.sort(); // siralayir
// console.log(data);

//            index, silme, added
// numbers.splice(4, 0, "salam") // 4cu indexden sonra silmeden elave edir
// console.log(numbers);

// numbers.push(10)  //  sonuna elave edir
// console.log(numbers);

// let removeElement = numbers.pop()  // basa elave edir
// console.log(numbers);
// console.log(removeElement);

// numbers.shift(); // ilki silir
// console.log(numbers);

// numbers.unshift("salam");// basa elave edir
// console.log(numbers);
// console.log(numbers.join("-"));
