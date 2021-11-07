/*
 browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
 console.log("Received response: ", response);
 });

 browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
 console.log("Received request: ", request);
 });
 */

console.log('init')
console.log( this )

for(let i = 0; i<localStorage.length; i++) {
    console.log(localStorage.key(i))
}



/*

if (location.href.includes('https://cloud.digitalocean.com/login')) {
  console.log('detect - digitalocean')
  setInterval(() => {
    if (document.querySelector('input[id=code]').getAttribute('autocomplete') != 'one-time-code') {
      document.querySelector('input[id=code]').setAttribute('autocomplete', 'one-time-code')
      document.querySelector('input[id=code]').blur()
      setTimeout(() => {
        document.querySelector('input[id=code]').focus()
      }, 1000)
      console.log('changed one-time-code')
    }
  }, 1000)
} else if (location.href.includes('https://www.udemy.com/course')) {
  console.log('extension - detect - udemy')
  document.addEventListener('contextmenu', e => {
    e.stopImmediatePropagation()
  })
  console.log('activeted PiP')
} else if (location.href.includes('https://www.facebook.com/checkpoint')) {
  console.log('detect - facebook')

  setInterval(() => {
    if (document.querySelector('input[id=approvals_code]').getAttribute('autocomplete') != 'one-time-code') {
      document.querySelector('input[id=approvals_code]').setAttribute('autocomplete', 'one-time-code')
      document.querySelector('input[id=approvals_code]').blur()

      setTimeout(() => {
        document.querySelector('input[id=approvals_code]').focus()
      }, 1000)

      console.log('changed one-time-code')

    }
  }, 1000)
} else if (location.href.includes('https://www.instagram.com/accounts/login/two_factor')) {
  console.log('detect - instagram')

  setInterval(() => {
    if (document.querySelector('input[name=verificationCode]').getAttribute('autocomplete') != 'one-time-code') {
      document.querySelector('input[name=verificationCode]').setAttribute('autocomplete', 'one-time-code')
      document.querySelector('input[name=verificationCode]').blur()

      setTimeout(() => {
        document.querySelector('input[name=verificationCode]').focus()
      }, 1000)

      console.log('changed one-time-code')

    }
  }, 1000)
} else {
  console.log('nothing')
}

*/
