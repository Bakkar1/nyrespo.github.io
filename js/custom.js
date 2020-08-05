'use strict';

var mijnSpan = document.getElementById('mijnSpan'),
    mijnLi = document.getElementById('mijnLi'),
    mijnSection = document.getElementById('mijnSection'),
    mijnButton1 = document.getElementById('sButton1');

mijnSpan.onclick = function(){
    mijnLi.classList.toggle('mijn-bar');
    mijnSection.classList.toggle('mijnS');
    mijnButton1.setAttribute('disabled', 'disabled')
}