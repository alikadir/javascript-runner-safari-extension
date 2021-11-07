console.log('extension - started', browser)

const pageLoad = () => {
  console.log('window loaded')
  const txtDomain = document.querySelector('#txtDomain')
  const txtJS = document.querySelector('#txtJS')
  const btnSubmit = document.querySelector('#btnSubmit')
  const btnRestore = document.querySelector('#btnRestore')


  listLoad()
  btnSubmit.addEventListener('click', () => addItem(txtDomain, txtJS))
  btnRestore.addEventListener('click', loadDefaultStore);
}

const addItem = (txtDomain, txtJS) => {
  console.log('deneme')

  const domain = txtDomain.value
  const js = txtJS.value
  console.log({ domain, js })
  localStorage.setItem(domain, js)

  txtDomain.value = ''
  txtJS.value = ''

  listLoad();
}

const listLoad = () => {
  const divList = document.querySelector('#divList')
  let template = `
      <div class="ui small message green">
          <i class="edit outline icon" style="float: right; margin-right:0; cursor: pointer"  data-update-btn="{key}"></i>
          <i class="trash alternate outline icon" style="float: right; cursor: pointer" data-delete-btn="{key}"></i>
          <div class="header">
              {key}
          </div>
          <pre lang="javascript">{value}</pre>
      </div>
`

  let html = ''
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    const value = localStorage.getItem(key)
    html += template.replaceAll('{key}', key).replaceAll('{value}', value)
  }

  divList.innerHTML = html

  document.querySelectorAll('[data-update-btn]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = e.target.getAttribute('data-update-btn')
      updateItem(key);
    })
  })

  document.querySelectorAll('[data-delete-btn]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const key = e.target.getAttribute('data-delete-btn')
      deleteItem(key);
    })
  })

}

window.addEventListener('load', pageLoad)


const deleteItem = (key) => {
  localStorage.removeItem(key)
  listLoad()
}

const updateItem = (key) => {
  const value = localStorage.getItem(key)
  const txtJS = document.querySelector('#txtJS')
  txtJS.value = value

  const txtDomain = document.querySelector('#txtDomain')
  txtDomain.value = key
  document.querySelector('.container').scrollTop = 0;
}

const loadDefaultStore = () => {
  localStorage.setItem('https://www.udemy.com/course', `
  
    console.log('extension - detect - udemy');
    document.addEventListener('contextmenu', e => {
        e.stopImmediatePropagation();
    });
    console.log('activated PiP');
  
  `)

  localStorage.setItem('https://cloud.digitalocean.com/login', `
  
    console.log('extension - detect - digitalocean');
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
  
  `)

  localStorage.setItem('https://www.facebook.com/checkpoint', `
  
  console.log('extension - detect - facebook');
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
  
  `)

  localStorage.setItem('https://www.instagram.com/accounts/password/reset/', `
  
  console.log('extension - detect - instagram');
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
  
  `)

}
