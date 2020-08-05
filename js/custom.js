'use strict';

var mijnSpan = document.getElementById('mijnSpan'),
    mijnLi = document.getElementById('mijnLi');

mijnSpan.onclick = function(){
    mijnLi.classList.toggle('mijn-bar');
}