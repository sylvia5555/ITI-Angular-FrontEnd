
function lightCircle() {
    let number = document.getElementById('inputNumber').value;

    document.getElementById('circle1').classList.remove('ready');
    document.getElementById('circle2').classList.remove('steady');
    document.getElementById('circle3').classList.remove('go');


    if (number == 1) {
        document.getElementById('circle1').classList.add('ready');
    } else if (number == 2) {
        document.getElementById('circle2').classList.add('steady');
    } else if (number == 3) {
        document.getElementById('circle3').classList.add('go');
    }

    
}
