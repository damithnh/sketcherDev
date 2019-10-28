 var plan = document.getElementById('viewer').getContext('2d');
    // //const ctx1 = canvases[0].getContext('2d');


    //ctx1.setTransform(1, .2, .8, 1, 0, 0);
    
    var base_image = new Image();
    base_image.src = 'img/back.png';
    base_image.onload = function(){
    plan.drawImage(base_image, 0, 0)