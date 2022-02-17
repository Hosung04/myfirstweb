

function nightDayHandler(self){
    target = document.querySelector('body');
    if (self.value == 'night'){
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';
        var links = document.querySelectorAll('a');
        for(var i = 0; i < links.length; i ++){
            links[i].style.color = 'powderblue';
        }
    }
    else{
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';
        var links = document.querySelectorAll('a');
        for(var i = 0; i < links.length; i ++){
            links[i].style.color = 'blue';
        }
    }
}