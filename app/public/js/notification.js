export function note(settings) {

    /**
     * Настройки по умолчанию
     */
    settings = Object.assign({},{
        callback:    false,
        content:     "",
        time:        2,
        type:        "info"
    }, settings);

    if(!settings.content.length) return;

    /**
     * Функция создания элементов
     * @param {String} name - название DOM-элемента
     * @param {Object} attr - объект с атрибутами
     * @param {Object} append - DOM-элемент, в который будет добавлен новый узел
     * @param {String} [content] - контент DOM-элемента
     */
    var create = function(name, attr, append, content) {
        var node = document.createElement(name);
        for(var val in attr) { if(attr.hasOwnProperty(val)) node.setAttribute(val, attr[val]); }
        if(content) node.insertAdjacentHTML("afterbegin", content);
        append.appendChild(node);
        if(node.classList.contains("note-item-hidden")) node.classList.remove("note-item-hidden");
        return node;
    };

    /**
     * Генерация элементов
     */
    var noteBox = document.getElementById("notes") || create("div", { "id": "notes" }, document.body);
    var noteItem = create("div", {
            "class": "note-item",
            "data-show": "false",
            "role": "alert",
            "data-type": settings.type
        }, noteBox),
        noteItemText = create("div", { "class": "note-item-text" }, noteItem, settings.content),
        noteItemBtn = create("div", {
            "class": "note-item-btn",
            "content":"✘",
            "aria-label": "Скрыть"
        }, noteItem);

    /**
     * Функция проверки видимости алерта во viewport
     * @returns {boolean}
     */
    var isVisible = function() {
        var coords = noteItem.getBoundingClientRect();
        return (
            coords.top >= 0 &&
            coords.left >= 0 &&
            coords.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            coords.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    /**
     * Функция удаления алертов
     * @param {Object} [el] - удаляемый алерт
     */
    var remove = function(el) {
        el = el || noteItem;
        el.setAttribute("data-show","false");
        window.setTimeout(function() {
            el.remove();
        }, 250);
        if(settings.callback) settings.callback(); // callback
    };

    /**
     * Удаление алерта по клику на кнопку
     */
    noteItemBtn.addEventListener("click", function() { remove(); });

    /**
     * Визуальный вывод алерта
     */
    window.setTimeout(function() {
        noteItem.setAttribute("data-show","true");
    }, 250);


    /**
     * Проверка видимости алерта и очистка места при необходимости
     */
    if(!isVisible()) remove(noteBox.firstChild);

    /**
     * Автоматическое удаление алерта спустя заданное время
     */
    window.setTimeout(remove, settings.time * 400);

};
