# ReactJs

ReactJs is one of the most popular javascript libraries for building frontend UI.

Component - React uses Component Based architecture. The whole UI can be de-composed into small, re-usable components.
Below example "Greet" is an example for a component.

Props and State - Props (Properties) is data which is passed from Parent Component to Child. 
State is maintained by the component itself. Component re-renders if State or Props changes.

JSX - Syntax extension to JavaScript. Most React projects use JSX for its convenience. It makes defining components easier. 
Ex: 
function Greet (){
return ( <div>
<p>Hello World</p>
</div>)
}

Virtual DOM - A virtual light weight represntation of actual DOM. React update the state changes in Virtual DOM first and then it syncs with Real DOM.
Runs diffing algorithm to compare the previous created component tree with the new one and does Reconciliation.

Hooks - Hooks let you use different React features from your components. Ex: useState, useEffect etc
