var item1 = document.getElementById('item-1');
var item2 = document.getElementById('item-2');
var item3 = document.getElementById('item-3');
var item4 = document.getElementById('item-4');
var item5 = document.getElementById('item-5');
var item6 = document.getElementById('item-6');
var item7 = document.getElementById('item-7');
var item8 = document.getElementById('item-8');
var item9 = document.getElementById('item-9');
var item10 = document.getElementById('item-10');
var item11 = document.getElementById('item-11');
var item12 = document.getElementById('item-12');
var item13 = document.getElementById('item-13');
var item14 = document.getElementById('item-14');
var item15 = document.getElementById('item-15');
var item16 = document.getElementById('item-16');
var item17 = document.getElementById('item-17');
var item18 = document.getElementById('item-18');
var item19 = document.getElementById('item-19');
var item20 = document.getElementById('item-20');

var empty = "";
var result;
var calculation = 1;
var operand1 ="";
var operand2 ="";
var operator = "";

// handling numbers


item6.addEventListener('click', function () {
    // if (operand1 == 0) {
      
    if(operator==""){
        operand1 += "7";
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1');
    }
    // }
    // else if (operand2 == 0) {
       else if(operator!=""){
        operand2 += "7";
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
        }
    // }
});

item7.addEventListener('click', function () {
    if (operator=="") {
        operand1 +="8";
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1')
    }
    else if (operator!="") {
        operand2 += "8";
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
    }
});

item8.addEventListener('click', function () {
    if (operator=="") {
        operand1 +="9";
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1')
    }
    else if (operator!="") {
        operand2 += "9";
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
    }
});

item10.addEventListener('click', function () {
    if (operator=="") {
        operand1 += "4";
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1')
    }
    else if (operator!="") {
        operand2 += "4";
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
    }
});


item11.addEventListener('click', function () {
    if (operator=="") {
        operand1 += "5";
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1')
    }
    else if (operator!="") {
        operand2 += "5";
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
    }
});


item12.addEventListener('click', function () {
    if (operator=="") {
        operand1  += "6";
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1')
    }
    else if (operator!="") {
        operand2 += "6";
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
    }
});

item14.addEventListener('click', function () {
    if (operator=="") {
        operand1 += "1";
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1')
    }
    else if (operator!="") {
        operand2 += "1";
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
    }
});


item15.addEventListener('click', function () {
    if (operator=="") {
        operand1 += "2";
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1')
    }
    else if (operator!="") {
        operand2 += "2";
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
    }
});

item16.addEventListener('click', function () {
    if (operator=="") {
        operand1 += "3";
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1')
    }
    else if (operator!="") {
        operand2 += "3";
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
    }
});


item18.addEventListener('click', function () {
    if (operator=="") {
        operand1 += 0;
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1')
    }
    else if (operator!="") {
        operand2 += 0;
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
    }
});


item2.addEventListener('click', function () {
    operand1 = "";
    operand2 = "";
    result = "";
    item1.innerText = empty;
    var html = "<h1>" + result + "</h1>";
    item1.innerHTML = html;
});
// handling operator click 
item17.addEventListener('click', function () {
    if (result) {
        operand1 = result;
    }
    operator = '+';
});
item9.addEventListener('click', function () {
    if (result) {
        operand1 = result;
    }
    operator = '*';
});
item4.addEventListener('click', function () {
    if (result) {
        operand1 = result;
    }
    operator = '%';
})

item5.addEventListener('click', function () {
    if (result) {
        operand1 = result;
    }
    operator = '/';
});
item13.addEventListener('click', function () {
    if (result) {
        operand1 = result;
    }
    operator = '-';
});

// dot handling
item19.addEventListener('click',function(){
    if(operator==""){
        operand1+=".";
        var html = "<h1>" + operand1 + "</h1>"
        item1.innerHTML = html;
        console.log('opr1');
    }
    else if(operator!=""){
        operand2+=".";
        var html = "<h1>" + operand2 + "</h1>"
        item1.innerHTML = html;
        console.log('opr2')
    }
});

item20.addEventListener('click', function () {
    console.log('res')
    if (operand1 != 0 || operand2 != 0) {
        
        result = eval(operand1 + " " + operator + " " + operand2);
    }
    item1.innerText = empty;
    var html = "<h1>" + result + "</h1>";
    item1.innerHTML = html;
    operand1="";
        operand2="";
})
