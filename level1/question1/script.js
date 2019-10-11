document.getElementById('btn').onclick = function(){
    onClickFunction()
};

function onClickFunction(){
    alert('You clicked correctly')
};


// just for fun
document.querySelector('html').onclick = function(){
    wrongClickFunction()
};

function wrongClickFunction(){
    alert('Oops, easy there mate! try clicking the button.')
};