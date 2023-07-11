// Récupération du body
const body = document.querySelector('body');

// Créer la structure calculatrice

// Créer la div container dans le body
const calculatrice = document.createElement('div');
calculatrice.classList.add('calculatrice');
body.appendChild(calculatrice);

// Créer l'input de l'écran
const screen = document.createElement('input');
screen.setAttribute('type', 'text');
calculatrice.appendChild(screen);

// Créer la div du pad
const pad = document.createElement('div');
pad.classList.add('pad');
calculatrice.appendChild(pad);

// Créer la div des chiffres
const chiffres = document.createElement('div');
chiffres.classList.add('chiffres');
pad.appendChild(chiffres);

// Créer la div des operateurs
const operators = document.createElement('div');
operators.classList.add('operators');
pad.appendChild(operators);

// Créer les boutons des chiffres
for (let i = 1; i < 10; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    chiffres.appendChild(btn);
}

const btn0 = document.createElement('button');
btn0.textContent = 0;
chiffres.appendChild(btn0);

// Créer les boutons des operateurs
const btnPlus = document.createElement('button');
btnPlus.textContent = '+';
operators.appendChild(btnPlus);

const btnMoins = document.createElement('button');
btnMoins.textContent = '-';
operators.appendChild(btnMoins);

const btnDiv = document.createElement('button');
btnDiv.textContent = '/';
operators.appendChild(btnDiv);

const btnMult = document.createElement('button');
btnMult.textContent = '*';
operators.appendChild(btnMult);

const btnEqual = document.createElement('button');
btnEqual.textContent = '=';
operators.appendChild(btnEqual);

const btnClear = document.createElement('button');
btnClear.textContent = 'C';
operators.appendChild(btnClear);

// Clic sur un btn le mettre dans l'input
const btns = document.querySelectorAll('button');
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        screen.value += btn.textContent;
    });
});

// Clic sur le btn C effacer l'input
btnClear.addEventListener('click', () => {
    screen.value = '';
});

// BtnEqual ne s'affiche pas sur le screen
btnEqual.addEventListener('click', () => {
    screen.value = screen.value.replace('=', '');
});

//Opérateur ne peut pas être le premier caractère
operators.addEventListener('click', () => {
    if (screen.value === '') {
        screen.value = '';
    }
});

// Clic sur le btn = calculer l'opération
btnEqual.addEventListener('click', () => {
    const operation = screen.value;
    const result = eval(operation);
    screen.value = result;

    if (screen.value === 'undefined') {
        screen.value = '';
    }
});

// Si on appuie sur entrée calculer l'opération
body.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const operation = screen.value;
        const result = eval(operation);
        screen.value = result;

        if (screen.value === 'undefined') {
            screen.value = '';
        }
    }
});

// Transformer les x par des *
body.addEventListener('keypress', (e) => {
    if (e.key === 'x') {
        screen.value = screen.value.replace('x', '*');
    }
});

// Interdire les lettres
body.addEventListener('keypress', (e) => {
    if (isNaN(e.key)) {
        screen.value = screen.value.replace(e.key, '');
    }
}); 

// Activer le input avec le clavier
body.addEventListener('keypress', (e) => {
    // if screen est active
    if (screen != document.activeElement) {
        if (e.key === '0') {
            screen.value += e.key;
        }
        if (e.key === '1') {
            screen.value += e.key;
        }
        if (e.key === '2') {
            screen.value += e.key;
        }
        if (e.key === '3') {
            screen.value += e.key;
        }
        if (e.key === '4') {
            screen.value += e.key;
        }
        if (e.key === '5') {
            screen.value += e.key;
        }
        if (e.key === '6') {
            screen.value += e.key;
        }
        if (e.key === '7') {
            screen.value += e.key;
        }
        if (e.key === '8') {
            screen.value += e.key;
        }
        if (e.key === '9') {
            screen.value += e.key;
        }
        if (e.key === '/') {
            screen.value += e.key;
        }
        if (e.key === '*') {
            screen.value += e.key;
        }
        if (e.key === '-') {
            screen.value += e.key;
        }
        if (e.key === '+') {
            screen.value += e.key;
        }
        if (e.key === 'Backspace') {
            screen.value = screen.value.slice(0, -1);
        }
        if (e.key === '(') {
            screen.value += e.key;
        }
        if (e.key === ')') {
            screen.value += e.key;
        }
    }
});