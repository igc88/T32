$(function () {
    var max = 6;
    var min = 1;
    
    var num1 = Math.floor(Math.random() * (max - min) + min);
    var num2 = Math.floor(Math.random() * (max - min) + min);

    var suma = num1 + num2;
    var apariciones = 0;

    for (i = 0; i < 36000; i++) {
        var num1R = Math.floor(Math.random() * (max - min) + min);
        var num2R = Math.floor(Math.random() * (max - min) + min);

        if (num1R + num2R === suma) {
            apariciones += 1;
        }
    }
    
    console.log("La suma " + suma + " ha aparecido " + apariciones + " lanzando 36000 veces dos dados.");
});