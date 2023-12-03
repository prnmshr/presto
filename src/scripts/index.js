import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/tablet.css'
import '../styles/mobile.css'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import App from './views/app'
import swRegister from './utils/sw-register'

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('#drawer'),
  drawer: document.querySelector('#drawer-menu'),
  content: document.querySelector('#main')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
