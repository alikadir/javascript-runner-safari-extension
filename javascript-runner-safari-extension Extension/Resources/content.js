/*
 browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
 console.log("Received response: ", response);
 });
 
 browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
 console.log("Received request: ", request);
 });
 */

console.log('init');

if (location.href.includes('https://cloud.digitalocean.com/login')) {
    console.log('detect - digitalocean');
    setInterval(() => {
        if(document.querySelector('input[id=code]').getAttribute('autocomplete') != 'one-time-code' ) {
            document.querySelector('input[id=code]').setAttribute('autocomplete', 'one-time-code');
            document.querySelector('input[id=code]').blur();
            setTimeout(() => {
                document.querySelector('input[id=code]').focus();
            }, 1000);
            console.log('changed one-time-code');
        }
    }, 1000);
} else if (location.href.includes('https://www.udemy.com/course')) {
    console.log('detect - udemy');
    document.addEventListener('contextmenu', e => {
        e.stopImmediatePropagation();
    });
    console.log('activeted PiP');
} else {
    console.log("nothing");
}


