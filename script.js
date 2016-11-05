// var ingridient1 = ['sugar','flour','egg'];
// var ingridient2 = ['water','sugar','salt'];
// var ingridient3 = ['flour','milk','sugar'];
// var mergeIngridient = [];

// function mergeArray(ingr1,ingr2,ingr3) {
//     for(var i=0 ; i < ingr1.length ; i++ ) {
//         if(mergeIngridient.indexOf(ingr1[i]) == -1) {
//         mergeIngridient.push(ingr1[i]);
//     }
// }
//     for(var i=0 ; i < ingr2.length ; i++ ) {
//         if(mergeIngridient.indexOf(ingr2[i]) == -1) {
//         mergeIngridient.push(ingr2[i]);
//     }
// }
//     for(var i=0 ; i < ingr3.length ; i++ ) {
//         if(mergeIngridient.indexOf(ingr3[i]) == -1 ) {
//         mergeIngridient.push(ingr3[i]);
//     }
// }
// alert(mergeIngridient);
// }


// mergeArray(ingridient1,ingridient2,ingridient3);



// setTimeout(function(){
//     alert("Hello")
// },3000);


// setInterval(function(){
//     alert("Hello")
// },3000);

var sec = 0;
var min = 0;
 

function stop(){
    sec++;
    document.getElementById('stopWatch').innerHTML = sec;
}

setInterval(stop,1000)

 