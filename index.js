window.addEventListener('load', () => { //empieza a escuchar al cargar el doc

    const display = document.querySelector('.calcu');
    const resultView = document.querySelector('.result');
    //crea un html collection con todos los botones
    const buttons = document.getElementsByClassName('button');
    //creamos un array del html collection
    const buttonsArray = Array.from(buttons);

    //iterar el nuevo array
    buttonsArray.forEach((button) => {
        button.addEventListener('click', () => {
            options(button, display, resultView);
        });
    })

    options = (button, display, resultView) => {
        switch (button.innerHTML) {
            case 'AC':
                cleanView(display, resultView);
                break;
            case '%':
                percent(display);
                break;
            case '+/-':
                postNeg(display)
                break;
            case '=':
                result(display,resultView)
                break;
            default:
                uptdate(display,button)
                break;
        }
    }

    result = (display, resultView) => {
        let value = display.innerHTML;
        let result = eval(value.toString());
        display.innerHTML = result;
        resultView.innerHTML = value;
    }

    uptdate = (display, button) => {
        if (display.innerHTML == 0) display.innerHTML = '';
        display.innerHTML += button.innerHTML;
    }

    cleanView = (display, resultView) =>{
        display.innerHTML = '';
        resultView.innerHTML  = '';
    }

    percent = (display ) => {
        if(display.innerHTML !== 0){
            display.innerHTML = parseFloat(display.innerHTML/100);
        };
    }
    postNeg = (display) =>{
        display.innerHTML = - display.innerHTML;
    }

})