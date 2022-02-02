
const content = document.querySelectorAll('p');

content.forEach( p => {
 
    if(p.textContent.includes('success')){

        p.classList.add('success');
        }
    if(p.textContent.includes('error')){
        p.classList.add('error');
        

    }
    
});

const title = document.querySelector('.test');

title.classList.toggle('title');
title.classList.toggle('title');






console.log(content);




// const link = document.querySelector('a');

// console.log(link.getAttribute('href'));

// console.log(link.setAttribute('href','www.youtube.com'),link.getAttribute('href'));
// console.log(link.innerText ='Click here for Youtube')

// const p = document.querySelector('p');

// console.log(p.getAttribute('class'));

// p.setAttribute('style','Color:Red;font-size:24px;font-style:bold;')
// p.innerText ='Hi this is changed through innertext';



















//  const paras = document.querySelectorAll('p');

// paras.forEach(para => console.log(para.innerText += ' New added Text'));


// const headContent = document.querySelector('.content');

// headContent.innerHTML += `<h2>This is new Text</h2>`
// console.log(headContent);


// let people = ['Daya','Mahesh','Naresh','Mayyu'];

// people.forEach( peo => {
//     console.log('People')
//     headContent.innerHTML = `<h3>${peo}</h3>`

//     console.log(headContent);
// });




//  console.log(paras[1].innerText = ' New text added');


// const paras = document.querySelector('p');
// console.log(paras.innerText+= ' New text added');






// const para = document.getElementById('page-title');




// console.log(para);


























// const para = document.querySelector('p'); // logs first paragraph tags

//const para = document.querySelector('.error'); //logs p tag with class error

//const para = document.querySelector('div.error');// 

//const para = document.querySelector('body > p');


// const para = document.querySelectorAll('p');

// const error =document.querySelectorAll('.error');


// para.forEach(par => console.log(par));




// console.log(para[0],error);







// let marksOne = 50;

// let marksTwo = marksOne;

// console.log(`marks one : ${marksOne}, marks Two : ${marksTwo}`);

//  marksOne = 10;

// console.log(`marks one : ${marksOne}, marks Two : ${marksTwo}`);



// let markslist ={tcs :11, accenture : 50};

// let markslist_two = markslist;
// console.log(markslist_two)

// console.log(`markslist ${markslist.accenture}, markslistTwo ${markslist_two.accenture}`);

// markslist.accenture =10;

// console.log(`markslist after changing ${markslist.accenture}, markslistTwo ${markslist_two.accenture}`);





















// console.log(Math);
// console.log(Math.PI);
// console.log(Math);


// let number = 18.7;
// console.log(`number is ${number}`);
// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));
// console.log(Math.trunc(number));



// let random = Math.random();

// console.log(Math.round(random * 100))











// let user = {
//     name :"Mahesh Chakpelly",
//     age :24,
//     role :'SE',
//     technology :['java','HTML','javascript','css'],
//     logBlogs :function (){
//         var html = '';

//       console.log(this.technology); 
//       this.technology.forEach(tech =>{
//           html =`<h1>${tech}</h1>`;
//           console.log(html);
//           console.log(tech)
//       }) 
//     },
//     login(){
//         console.log('logged in')
//     },
//     logout(){
//         console.log('logged out ')

//     },
//     // blogs:['Love','Life','Leave'],
//     blogs:[{title:'Love',likes:100,comments:20},{title:'Life',likes:100,comments:10},{title:'Goal',likes:500,comments:44}],
//     logBlogs :function(){

//         console.log(this.blogs);
//         this.blogs.forEach((blog,index) =>{

//             console.log(`${blog.title},likes${blog.likes},comment ${blog.comments}, ${index}`);

//         });

//     }
// };

// user.logBlogs();
// user.login();

// console.log(this);












// const ul = document.querySelector('.employe');


// let employee = ['Mahesh','Padma','srimanth','hemanth','daya'];

// let html =``;

// employee.forEach((employename) =>{

//     html += `<li style ="color :purple">${employename}</li>`;

// })

// console.log(html)


// ul.innerHTML = html;



























// let persons =['person one','person two','person three','person four'];


// persons.forEach((person,index) =>{

//     console.log(index, person);
// }
// );
// const callfunc = (value,index) =>{

//     console.log(`Callback values ${index} ${value}`);

// }
// persons.forEach(callfunc);





// const myFunction = (callBackFun) =>{

//     let myName = 'Mahesh';

//     callBackFun(myName);


// }

// myFunction( value =>{

//     console.log(value);

// }
// );












// let names = ['mayyu','arjun','aadya'];

// for (var i=0;i<names.length; i++){
//     console.log(names[i]);
//     let result = `<div>${names[i]}</div>`;
//     console.log(result);
// }









// let result =Number(email);
// let email ='mahesh.chakpelly23@gmail.com;';

// console.log(result);

// let resultbool = Boolean(true);

// console.log(resultbool, typeof resultbool);


// let res = Boolean(1);

// console.log(res, typeof res);






// let result = email.includes('@');

// console.log(result);
// let family = ['mahesh','aadhya','arjun','swetha','karuna']

// let result_fam = family.includes('mahhs');

// console.log(result_fam);

// let name ='mahesh';

// console.log(name == 'mahesh' );
// console.log( name <='Mahesh');

// console.log();

// console.log();





























/*
let age;

console.log(age, age+25,`the age value is ${age}`);

let salutation =null;

console.log(salutation, salutation+"   mrs",`the salutation is ${salutation}`);




let family = ['mahesh','aadhya','arjun','swetha','karuna'];

console.log(family.join('*'));




let ages =[24,6,1,22,27];
console.log(ages);




let result = family.concat(ages);

let result1 = family + ages;

console.log(` ${result1}`);
console.log(`result is ${result}`)

let index = result.indexOf('aadhya');

console.log(`index of mahesh is  ${index}`);
*/

// let family = ['mahesh','aadhya','arjun','swetha','karuna'];


// let push = family.push("pushpa");

// console.log(family);
// console.log("push is  ", push);

// let popup = family.pop();

// console.log("pup",popup);
// console.log("family is", family);










// const title = "My life";
// const author ="Mahesh Chakpelly";

// let likes = 300;

// let result = 'The Blog ' + title + ' of ' + author +' has '+ likes;

// console.log(result);

// let result1 = `The Blog ${title} of ${author} has ${likes}`;

// console.log(result1);

// let htmls = `
// <h1>This Blog ${title}</h1>
// <p> of ${author}</p>
// <span>has ${likes}</span>

// `;

// console.log(htmls);

// document.getElementById('temp').innerHTML = result;


/*let likes =10;

// console.log(`likes+=2 ${likes +=2}`);
console.log(`likes -=2 ${likes -=2}`);
console.log(`likes /=2 ${likes /=2}`);
console.log(`likes *=2 ${likes *=2}`);


console.log('this page has '+likes + 'likes');

*/


// order operation B I D M A S  BRACKETS INDICES DIVISION MULTIPLICATION ADDITION SUBSTRACTION 


// let result = 5 * (10-3)**2;
// console.log(result);

// let result += 1;

// console.log(result)

/*let radius = 10;
let pi = 3.14;

console.log(`dividion of r and pi ${radius / 3}`);

console.log(`remainder of r and pi ${radius % 3}`);


let area =  pi * radius**2;

console.log(`area ${area}`);

*/

/* let email ='mahesh.chakpelly@gmail.com';
let emails ='mahesh.chakpelly@gmail.com';




let result = email.slice(5,11);
console.log(`result from 5,11 is ${result}`);

let result1 = emails.substr(5,11);
console.log(` substr from  5,11 is ${result1} `);

let resultrep = email.replace('m','c');
let resultrepall = email.replaceAll('m','c');


console.log(` replace method of m to c  ${resultrep}`);
console.log(` replace method of m to c  ${resultrepall}`);
*/

//let result = email.lastIndexOf('g');




// console.log(`email length ${email.length}`);
// console.log(`last index of g is ${result}`);
// console.log(`length of result is ${result.length}`)
























































/*let email ="mahesh.c@gmail.com";
console.log(email);

let firstname = "Mahesh";
let lastname = "kumar";


let fullname = firstname +" "+ lastname;

console.log(`full name is ${fullname}`);

console.log(`Getting character    ${fullname[3]}`);

console.log(`length of my name is ${fullname.length}`)

console.log(`uppercase method ${fullname.toUpperCase()}`);

console.log(`lower case${fullname.toLowerCase()}`);

console.log(`index of @  ${email.indexOf('@')}`);

console.log(`last index of a ${fullname.lastIndexOf('a')}`) 
*/