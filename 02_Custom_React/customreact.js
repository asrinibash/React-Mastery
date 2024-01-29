
const element={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:"Click to open Google"
}

  function render(reactElement,mainContainer){

    //  Version- 1 (problem is if properties is more than 2 then)
    /*
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    mainContainer.appendChild(domElement);
    */

    //Version-2 (Solved above problem using loop based code)
    const domElement= document.createElement(reactElement.type);

    domElement.innerHTML=reactElement.children;

    for (const prop in reactElement.props) {
        if(prop==='children') continue;

        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);

}

const mainContainer=document.querySelector('#root');

render(element,mainContainer);