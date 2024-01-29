import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


const element={
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },
  children:"Click to open Google"
}
const AnoterElem=(
  <a href="https://www.google.com" target='_blank'>visit google</a>
)

//let see what it expect react create element :
const username='srinibash';
const reactElement=React.createElement(
  'a',
  {href:"https://www.google.com",target:'_blank'},
  'visit Google',
   username  //her we can see that variables store as it is so, we have to give evaluated expression
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    // element - > it doesn't work because it's our custume syntax we don't know what it expect
    // AnoterElem //it works fine because this function returns an html element
    // App()// basically it only a function

    // reactElement  //-> after creating we give it to it remove one step to write code
      <App/>

)
