const body = document.getElementsByTagName("body");

const KEY_COUNT_ROW = [ ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
                        ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
                        ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
                        ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
                        ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']];

const KEY_CHANGE = ['caseDown', 'caseUp', 'caps', 'shiftCaps'];

const KEY_ENG = [   ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '\[', '\]', '\\', 'Del'], 
                    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, 'Enter'],
                    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
                    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',]
               ];

const KEY_ENG_UP = [    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
                        ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'], 
                        ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', `"`, 'Enter'],
                        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
                        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',]
                    ];

const KEY_ENG_CAPS = [  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                        ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '\[', '\]', '\\', 'Del'], 
                        ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', `'`, 'Enter'],
                        ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift'],
                        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',]
                    ];

const KEY_ENG_SHIFT_CAPS = [    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
                                ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '\[', '\]', '\\', 'Del'], 
                                ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', `'`, 'Enter'],
                                ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
                                ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',]
                            ];


const KEY_RUS = [   ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'], 
                    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', `э`, 'Enter'],
                    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
                    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',]
               ];

const KEY_RUS_UP = [    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
                        ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'], 
                        ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', `Э`, 'Enter'],
                        ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
                        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',]
                    ];

const KEY_RUS_CAPS = [  ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
                        ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'], 
                        ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', `Э`, 'Enter'],
                        ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
                        ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',]
                    ];        

const KEY_RUS_SHIFT_CAPS = [    ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
                                ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'], 
                                ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', `э`, 'Enter'],
                                ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
                                ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl',]
                            ];
                    
let capsOn = false;
let ctrlLeft = false;
let altLeft = false;
                
let lang;
              
// create container
const container = document.createElement('div')
document.body.append(container);
container.className = "container";

// create title
const title = document.createElement('p');
container.append(title);
title.className = 'title';
title.innerText = 'virtual-keyboard task';

// create textarea
const textArea = document.createElement('textarea');
container.append(textArea);
textArea.className = 'textarea';
textArea.id = 'textarea';
textArea.rows = 5;
textArea.cols = 50;
textArea.placeholder = 'переключение языка ввода: левый Ctrl + левый Alt';

function setLocalStorage() {
    localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
    }
}
window.addEventListener('load', getLocalStorage)


function createKeyboard(language) {

    // create keybourd
    const bodyKeyboard = document.createElement("div");
    container.append(bodyKeyboard);
    bodyKeyboard.className = "keyboard";

    // fill keybourd
    for (let n = 0; n < 5; n++) {
    const bodyRow = document.createElement('div');
    bodyKeyboard.append(bodyRow);
    bodyRow.className = 'row';

        for (let i = 0; i < KEY_COUNT_ROW[n].length; i++) {
            
            const bodyKey = document.createElement('div');
            bodyRow.append(bodyKey);
            bodyKey.className = `key ${KEY_COUNT_ROW[n][i]}`;

            const spanRus = document.createElement('span');
            bodyKey.append(spanRus);
            // spanRus.className = `rus hidden`;

            for (let y = 0; y < 4; y++) {
                const spanChange = document.createElement('span');
                spanRus.append(spanChange);

                if (y == 0) {
                    spanChange.innerText = KEY_RUS[n][i];
                    spanChange.className = `${KEY_CHANGE[y]}`;
                } else if (y == 1) {
                    spanChange.innerText = KEY_RUS_UP[n][i];
                    spanChange.className = `${KEY_CHANGE[y]}`;
                    spanChange.className = `${KEY_CHANGE[y]} hidden`;
                } else if (y == 2) {
                    spanChange.innerText = KEY_RUS_CAPS[n][i];
                    spanChange.className = `${KEY_CHANGE[y]}`;
                    spanChange.className = `${KEY_CHANGE[y]} hidden`;
                } else if (y == 3) {
                    spanChange.innerText = KEY_RUS_SHIFT_CAPS[n][i];
                    spanChange.className = `${KEY_CHANGE[y]}`;
                    spanChange.className = `${KEY_CHANGE[y]} hidden`;
                }
            }

            const spanEng = document.createElement('span');
            bodyKey.append(spanEng);
            // spanEng.className = `eng`;

            for (let y = 0; y < 4; y++) {
                const spanChange = document.createElement('span');
                spanEng.append(spanChange)

                if (y == 0) {
                    spanChange.innerText = KEY_ENG[n][i];
                    spanChange.className = `${KEY_CHANGE[y]}`;
                } else if (y == 1) {
                    spanChange.innerText = KEY_ENG_UP[n][i];
                    spanChange.className = `${KEY_CHANGE[y]}`;
                    spanChange.className = `${KEY_CHANGE[y]} hidden`;
                } else if (y == 2) {
                    spanChange.innerText = KEY_ENG_CAPS[n][i];
                    spanChange.className = `${KEY_CHANGE[y]}`;
                    spanChange.className = `${KEY_CHANGE[y]} hidden`;
                } else if (y == 3) {
                    spanChange.innerText = KEY_ENG_SHIFT_CAPS[n][i];
                    spanChange.className = `${KEY_CHANGE[y]}`;
                    spanChange.className = `${KEY_CHANGE[y]} hidden`;
                }
            }

            setTimeout(() => {
                if (lang == 'rus') {
                    console.log('RUS')
                    spanRus.className = `rus`;
                    spanEng.className = `eng hidden`;
    
                } else if (lang == 'eng') {
                    console.log('ENG')
                    spanRus.className = `rus hidden`;
                    spanEng.className = `eng`;
    
                } else {
                    console.log(`AAA ${lang} ${language}`);
    
                    // lang = 'eng'
                    spanRus.className = `rus hidden`;
                    spanEng.className = `eng`;
    
                }
              }, "500");


        }
    }
  
}

createKeyboard(lang);

const KEY = document.querySelectorAll('.key');

for(let key of KEY){

    const CASE_DOWN = document.querySelectorAll('.caseDown');
    const CASE_UP = document.querySelectorAll('.caseUp');
    const CAPS = document.querySelectorAll('.caps');
    const SHIFT_CAPS = document.querySelectorAll('.shiftCaps');

    key.addEventListener('mousedown', function(event) {

        const rus = key.querySelector(`.rus:not(.hidden)`);
        const eng = key.querySelector(`.eng:not(.hidden)`);
    
        const keyEngValue = key.querySelector(`.eng > :not(.hidden)`);
        const keyRusValue = key.querySelector(`.rus > :not(.hidden)`);


        if (key.classList.contains('ShiftLeft') && capsOn == true || key.classList.contains('ShiftRight') && capsOn == true) {

            CASE_DOWN.forEach(item => item.classList.add('hidden'));
            CASE_UP.forEach(item => item.classList.add('hidden'));
            CAPS.forEach(item => item.classList.add('hidden'));
            SHIFT_CAPS.forEach(item => item.classList.remove('hidden'));
    
        } else if (key.classList.contains('ShiftLeft') && capsOn == false || key.classList.contains('ShiftRight') && capsOn == false) {
    
            CASE_DOWN.forEach(item => item.classList.add('hidden'));
            CASE_UP.forEach(item => item.classList.remove('hidden'));
            CAPS.forEach(item => item.classList.add('hidden'));
            SHIFT_CAPS.forEach(item => item.classList.add('hidden'));
    
        } else if (key.classList.contains('CapsLock') && capsOn == false) {
    
            capsOn = true;
    
            CASE_DOWN.forEach(item => item.classList.add('hidden'));
            CASE_UP.forEach(item => item.classList.add('hidden'));
            CAPS.forEach(item => item.classList.remove('hidden'));
            SHIFT_CAPS.forEach(item => item.classList.add('hidden'));
    
        } else if (key.classList.contains('CapsLock') && capsOn == true) {
    
            capsOn = false;
    
            CASE_DOWN.forEach(item => item.classList.remove('hidden'));
            CASE_UP.forEach(item => item.classList.add('hidden'));
            CAPS.forEach(item => item.classList.add('hidden'));
            SHIFT_CAPS.forEach(item => item.classList.add('hidden'));

    
        } else if (key.classList.contains('Backspace')) {

            textArea.innerHTML = textArea.innerHTML.slice(textArea.selectionStart, -1);
    
        } else if (key.classList.contains('Enter')) {
    
            textArea.innerHTML += '\n';
    
        } else if (key.classList.contains('Tab')) {
    
            event.preventDefault();
            textArea.innerHTML += '\t';
    
        } else if (key.classList.contains('Delete')) {
    
            textArea.innerHTML.slice(0, textArea.selectionStart) + textArea.innerHTML.slice(textArea.selectionStart - 1);
    
        } else if (!key.classList.contains('ControlLeft') && !key.classList.contains('ControlRight') && !key.classList.contains('AltLeft') && !key.classList.contains('AltRight') && !key.classList.contains('MetaLeft')) {
    
            if (rus) {
                textArea.textContent += keyRusValue.textContent;
            } else if (eng) {
                textArea.textContent += keyEngValue.textContent;
            }
    
        };
    
        key.classList.toggle('active');
      });

    key.addEventListener('mouseup', function(event){

        const CASE_DOWN = document.querySelectorAll('.caseDown');
        const CASE_UP = document.querySelectorAll('.caseUp');
        const CAPS = document.querySelectorAll('.caps');
        const SHIFT_CAPS = document.querySelectorAll('.shiftCaps');
    
    
        if (key.classList.contains('ShiftLeft') && capsOn == true || key.classList.contains('ShiftRight') && capsOn == true) {
    
            CASE_DOWN.forEach(item => item.classList.add('hidden'));
            CASE_UP.forEach(item => item.classList.add('hidden'));
            CAPS.forEach(item => item.classList.remove('hidden'));
            SHIFT_CAPS.forEach(item => item.classList.add('hidden'));

            key.classList.remove('active');
    
        } else if (key.classList.contains('ShiftLeft') && capsOn == false || key.classList.contains('ShiftRight') && capsOn == false) {
    
            CASE_DOWN.forEach(item => item.classList.remove('hidden'));
            CASE_UP.forEach(item => item.classList.add('hidden'));
            CAPS.forEach(item => item.classList.add('hidden'));
            SHIFT_CAPS.forEach(item => item.classList.add('hidden'));
    
            key.classList.remove('active');
    
        } else if (key.classList.contains('CapsLock')) {
    
        } else {
            key.classList.remove('active');
        }

    });
};


document.addEventListener('keydown', function(event) {

    event.preventDefault();

    const key = event.key;
    const keyCode = event.code;
    const keyStyle = document.querySelector(`.${keyCode}`);
    const rus = document.querySelector(`.${keyCode} > .rus:not(.hidden)`);
    const eng = document.querySelector(`.${keyCode} > .eng:not(.hidden)`);

    const CASE_DOWN = document.querySelectorAll('.caseDown');
    const CASE_UP = document.querySelectorAll('.caseUp');
    const CAPS = document.querySelectorAll('.caps');
    const SHIFT_CAPS = document.querySelectorAll('.shiftCaps');

    const keyEngValue = document.querySelector(`.${keyCode} > .eng > :not(.hidden)`);
    const keyRusValue = document.querySelector(`.${keyCode} > .rus > :not(.hidden)`);

    
    textArea.focus();

    if (key == 'Shift' && capsOn == true) {

        CASE_DOWN.forEach(item => item.classList.add('hidden'));
        CASE_UP.forEach(item => item.classList.add('hidden'));
        CAPS.forEach(item => item.classList.add('hidden'));
        SHIFT_CAPS.forEach(item => item.classList.remove('hidden'));

    } else if (key == 'Shift' && capsOn == false) {

        CASE_DOWN.forEach(item => item.classList.add('hidden'));
        CASE_UP.forEach(item => item.classList.remove('hidden'));
        CAPS.forEach(item => item.classList.add('hidden'));
        SHIFT_CAPS.forEach(item => item.classList.add('hidden'));

    } else if (key == 'CapsLock' && capsOn == false) {

        capsOn = true;

        CASE_DOWN.forEach(item => item.classList.add('hidden'));
        CASE_UP.forEach(item => item.classList.add('hidden'));
        CAPS.forEach(item => item.classList.remove('hidden'));
        SHIFT_CAPS.forEach(item => item.classList.add('hidden'));

    } else if (key == 'CapsLock' && capsOn == true) {

        capsOn = false;

        CASE_DOWN.forEach(item => item.classList.remove('hidden'));
        CASE_UP.forEach(item => item.classList.add('hidden'));
        CAPS.forEach(item => item.classList.add('hidden'));
        SHIFT_CAPS.forEach(item => item.classList.add('hidden'));

    } else if (key == 'Backspace') {

        textArea.innerHTML = textArea.innerHTML.slice(textArea.selectionStart, -1);

    } else if (key == 'Enter') {

        textArea.innerHTML += '\n';

    } else if (key == 'Tab') {

        event.preventDefault();
        textArea.innerHTML += '\t';

    } else if (key == 'Delete') {

        textArea.innerHTML.slice(0, textArea.selectionStart) + textArea.innerHTML.slice(textArea.selectionStart - 1);

    } else if (key != 'Control' && key != 'Alt' && key != 'Meta') {

        if (rus) {
            textArea.textContent += keyRusValue.textContent;
        } else if (eng) {
            textArea.textContent += keyEngValue.textContent;
        }

    };
    
    if (keyCode == 'ControlLeft') {
        ctrlLeft = true;
    } else if (keyCode == 'AltLeft') {
        altLeft = true;
    };

    if (ctrlLeft && altLeft) {
        if (lang == 'rus') {
            lang = 'eng';
        } else if (lang == 'eng') {
            lang = 'rus'
        } else {
            lang = 'eng';
        }
        document.querySelectorAll('.rus').forEach(item => item.classList.toggle('hidden'));
        document.querySelectorAll('.eng').forEach(item => item.classList.toggle('hidden'));
    } 

    keyStyle.classList.toggle('active');
});

document.addEventListener('keyup', function(event) {
    const key = event.key;
    const keyCode = event.code;
    const keyStyle = document.querySelector(`.${keyCode}`);

    const CASE_DOWN = document.querySelectorAll('.caseDown');
    const CASE_UP = document.querySelectorAll('.caseUp');
    const CAPS = document.querySelectorAll('.caps');
    const SHIFT_CAPS = document.querySelectorAll('.shiftCaps');


    if (key == 'Shift' && capsOn == true) {

        CASE_DOWN.forEach(item => item.classList.add('hidden'));
        CASE_UP.forEach(item => item.classList.add('hidden'));
        CAPS.forEach(item => item.classList.remove('hidden'));
        SHIFT_CAPS.forEach(item => item.classList.add('hidden'));

        keyStyle.classList.remove('active');

    } else if (key == 'Shift' && capsOn == false) {

        CASE_DOWN.forEach(item => item.classList.remove('hidden'));
        CASE_UP.forEach(item => item.classList.add('hidden'));
        CAPS.forEach(item => item.classList.add('hidden'));
        SHIFT_CAPS.forEach(item => item.classList.add('hidden'));

        keyStyle.classList.remove('active');

    } else if (key == 'CapsLock') {

    } else {
        keyStyle.classList.remove('active');
    }

    ctrlLeft = false;
    altLeft = false;

});