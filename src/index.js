/**
 * Created by presoft-00 on 2018/4/9.
 */
import _ from 'lodash'
import printMe from './print.js'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.click = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());