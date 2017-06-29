//var elem = document.querySelector('p');
var elem = document.getElementById('test');

console.log( 'Element:' );
console.log( elem );

/**
 * removeAllSpans -  функция, которая удаляет все элементы span со страницы
 */

function removeAllSpans () {

    var allSpans = document.querySelectorAll('span');

    for (var i = allSpans.length - 1; i >= 0; i--) {
        var span = document.querySelector('span');
        span.parentNode.removeChild(span);
    }

}

// removeAllSpans();

/**
 * firstChild -  функция, которая будет кроссбразурено возвращать firstChild (не текстовую ноду).
 *
 * @param {Node} parent node
 * @return {Node}
 */

function firstChild (parent) {

    var children = parent.childNodes;
    var i = 0;

    do { i++ } while (children[i - 1].nodeType !== 3);

    return parent.childNodes[i];

}

console.log( 'First child:' );
console.log( firstChild( elem ) );

/**
 * lastChild -  функция, будет кроссбраузерно возвращать lastChild (не текстовую ноду).
 *
 * @param {Node} parent node
 * @return {Node}
 */

function lastChild (parent) {

    var children = parent.childNodes;
    var i = children.length;

    do { i-- } while (children[i - 1].nodeType !== 3);

    return parent.childNodes[i];

}

console.log( 'Last child:' );
console.log( lastChild( elem ) );

/**
 * next -  функция, которая будет кроссбраузерно возвращать следующий элемент
 * (не текстовую ноду, работа наподобие next() в jQuery).
 *
 * @param {Node} node
 * @return {Node}
 */

function next (node) {

    var sibling = node.nextSibling;

    while (sibling !== null) {
        if ( sibling.nodeType !== 3 ) {
            break;
        } else {
            sibling = sibling.nextSibling;
        }
    }

    return sibling;

}

console.log( 'Next sibling:');
console.log( next( elem ) );

/**
 * prev -  функция, которая будет кроссбраузерно возвращать предыдущий элемент
 * (не текстовую ноду, работа наподобие prev() в jQuery).
 *
 * @param {Node} node
 * @return {Node}
 */

function prev (node) {

    var sibling = node.previousSibling;

    while (sibling !== null) {
        if ( sibling.nodeType !== 3 ) {
            break;
        } else {
            sibling = sibling.previousSibling;
        }
    }

    return sibling;

}

console.log( 'Previous sibling:');
console.log( prev( elem ) );

//=================================================================================

/**
 * OPTIONAL
 * closest -  функция, которая будет идти вверх по DOM (по родительским елементам) от переданного ей элемента в первом
 * аргументе пока не найдет элемент переданный во втором аргументе в эту функцию и вернёт этот элемент (то есть второй).
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 *
 * Example:
 * closest(document.querySelector('[data-url="http://google.ru"]'), 'aside'); // return <aside>...</aside>
 *
 * @param {Node} node
 * @param {String} selector
 * @return {Node}
 */

function closest (node, selector) {

}






