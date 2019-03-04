;
(function () {
    'use strict';

    function offNameJS_var1() {
        if (document.querySelector('input').value === 'ECMAScript')
            alert('Верно!');
        else
            alert('Не знаете? «ECMAScript»!');
    }

    function offNameJS_var2() {
        document.querySelector('input').value === 'ECMAScript' ? alert('Верно!') : alert('Не знаете? «ECMAScript»!');
    }

    document.querySelector('[name="btn-if"]').addEventListener('click', offNameJS_var1);
    document.querySelector('[name="btn-?"]').addEventListener('click', offNameJS_var2);
})();