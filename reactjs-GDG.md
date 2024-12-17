# React JS 
## Why to use to use React JS
- Example of created product card using html
- Example of  created product card using JS
- Disadvantages
  - Repetitive Code
  - Limited Reusability:
  - JavaScript Functions Complexity:
## What is React JS
-  React js is a frontend library use for creating dynamic UI component. It was developed and maintain  by Facebook
-  [React.dev](https://react.dev/) is a offical website for react
-  A component is a individual peace of code which is reusable and UI for screen
-  Just like funciton is resusable a react Component is a also a  like funciotion use to render component on screen

## Installation  
1.  NPM
2.  Node JS
## Set up Local Environment
1. Clone git repo
2. Create  our first react APP
  - npm create reactapp@latest appname
  - npm create vite@latest
    -   project Name, pacage, React JS, js
  - npm install  
  - npm run dev

## Understanding folder structure
<pre>
my-vite-app/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── yarn.lock / package-lock.json  
</pre>
- Understand default react home page
- purpose of folder
## Installation of react dev too on chorme 
## Unnderstanding of  JSX
## Bambel
## Understanding Component 
- Basic of Components
- Hierarchy of Componets (Nested Components)
- Creating Compoenet Product (activity)
## Import / Export  of component
- export defualt
- export named
## React Fragment 
## Adding style to component using CSS file  and JS object 
#Inline Styling 
```jsx
import React from 'react';

function InlineStyleExample() {
  return (
    <div>
      <h1 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>
        Inline Styling Example
      </h1>
      <p style={{ backgroundColor: 'lightgray', padding: '10px' }}>
        This paragraph is styled using inline CSS in React.
      </p>
    </div>
  );
}

export default InlineStyleExample;
````
# External Css
```jsx
import React from 'react';
import './App.css'; // Importing the external CSS file

function ExternalStyleExample() {
  return (
    <div>
      <h1 className="header">External Styling Example</h1>
      <p className="paragraph">
        This paragraph is styled using an external CSS file in React.
      </p>
    </div>
  );
}

export default ExternalStyleExample;
```
```Css
/* App.css */
.header {
  color: green;
  font-size: 24px;
  text-align: center;
}

.paragraph {
  background-color: lightyellow;
  padding: 10px;
}
```

## Understanding of Props 
-  Need of props
-  Component with props
-  Handling Props
-  Passing array and object
-  using Map
-  Updating Product Componenet (activity)
## Conditional rendering of component 
## Event handling 
-  click
-  non click
-  event Object

## Understanding need of react state.
1.  Usestate
  - Example on use state
  - counter app (activity)
2.  useref
    Example and small activity
3. useEffect
    Example and small activit
## Form in react js ( Activity  3 ) 

