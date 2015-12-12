var elem = document.getElementById('r1'),
    i1 = document.getElementById('i1'),
    square = document.getElementById('square'),
    door = document.getElementById('door');



function fun1() {
    i1.value = elem.value;
}

function addFloor() {
    var fragment = document.createDocumentFragment();
    // число этажей которой будем рендерить
    var floorsNumber = elem.value;
    // почистим все этажи перед вставкой новых
        square.innerHTML = '';

    // идем циклом по всем этажам, если они вообще есть
    for (var i = 0; i < floorsNumber; i++) {
        // создали этаж
        var floor = document.createElement('div');
        // создали 1 окно - 2 вставим его же копией
        var win = document.createElement('div');
        // добавили классы
        floor.classList.add('floor');
        win.classList.add('win');
        // добавили 1 окно
        floor.appendChild(win);
        // добавили 2
        floor.appendChild(win.cloneNode(true));
        // рендерим этажи во бафферный фрагмент
        fragment.appendChild(floor);
    }
    // вставляме в square fragment
    square.appendChild(fragment);
}

elem.addEventListener('input', function(e) {
    addFloor();
    fun1();
});

addFloor();