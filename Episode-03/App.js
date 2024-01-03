import React from "react"
import ReactDOM from "react-dom/client";

const jsxHeading=(<h1 id="heading">
    Namaste React using JSX🚀🚀
    </h1>);

const Title=()=>(<h1 className="title">Mein toh title hoon</h1>)


// we can write or use javascript inside jsx using {} curly brakets
const FunctionalComponent=()=>{
    return (
        <div>
            <Title/>
            {jsxHeading}
            {Title()}
            <h1 id="function">I am a Functional Component</h1>
        </div>
    )
}

const heading=React.createElement("h1",{id:"heading"},"Namaste React🚀🚀");

const root=ReactDOM.createRoot(document.getElementById('root'));

console.log(jsxHeading)
root.render(<FunctionalComponent/>)