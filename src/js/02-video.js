'use strict';

import throttle from 'lodash.throttle';

const iframeEl = document.querySelector("iframe");
let player = new Vimeo.Player(iframeEl);

let timeToLocalStorage = function(data) {    
    localStorage.setItem('videoplayer-current-time', data.seconds);    
};

player.on('timeupdate', throttle(timeToLocalStorage, 1000));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')).then(function(seconds) { }).catch(function(error) {
    switch (error.name) {
        case 'RangeError':            
            break;
        default:
            break;
    }
});