'use strict';

var mijnSpan = document.getElementById('mijnSpan'),
    mijnLi = document.getElementById('mijnLi'),
    mijnSection = document.getElementById('mijnSection');

mijnSpan.onclick = function(){
    mijnLi.classList.toggle('mijn-bar');
    mijnSection.classList.toggle('mijnS');
}