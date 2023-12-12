// Implementing custom reactjs-like library

function customReact(reactElement, container){

  // create element for the passed reactElement
   const element = document.createElement(reactElement.type)
   element.innerHTML = reactElement.childen
   for (const prop in reactElement.props) {
    if (prop === 'children') continue
    element.setAttribute(prop, reactElement.props[prop])
   }
  
  // append element to the container
   container.appendChild(element)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com/",
        target: '_blank'     
    },
    childen: 'Google'
}

const rootContainer = document.querySelector('#root')
customReact(reactElement, rootContainer)
