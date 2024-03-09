import React from "react";
import ReactDom from "react-dom/client";

const elem = (
    <h1>Test</h1>
)

//React Functional component
const HeadingComponent = () => (
    <div id = "container">
        <h1 className = "heading">Namaste React using Functinal Component</h1>
    </div>
);

const Title = () =>(
    <h1 className="head" tabIndex="5">
        {1+1}
       Namaste React using JSX
       </h1>
   );  

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Title/>);