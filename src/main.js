import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const importFlowbiteFunc = function (flowbitePathStr) {
  const flowbiteScriptEl = document.createElement('script')
  flowbiteScriptEl.setAttribute('src', flowbitePathStr)
  document.body.appendChild(flowbiteScriptEl)
}
importFlowbiteFunc('./node_modules/flowbite/dist/flowbite.js') // here goes your path to a local flowbite.js you want to import

createApp(App).mount('#app')
