document.querySelector('.result-line').onclick = function(){
    x = document.querySelector('.salary').value;
    y = document.querySelector('.ill').value;
    document.querySelector('.result-line').innerHTML = ((x+y)/50*100);
}