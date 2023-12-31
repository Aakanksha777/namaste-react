const parent = React.createElement("div", {id:"parent"},  
[
    React.createElement("div", {id : "child1"} , [
        React.createElement("h1", {}, "I'm H1 tag."), 
        React.createElement("h2", {}, "I'm H2 tag.")
    ] 
    ),
    
    React.createElement("div", {id : "child2"} , [
        React.createElement("h1", {}, "I'm H1 tag."), 
        React.createElement("h2", {}, "I'm H2 tag.")
    ] 
    )
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// 2. siblings layout-----

{/* <div id='parent'>
    <div id='child1'>
        <h1>I'm H1 tag.</h1>
        <h2>I'm H2 tag.</h2>
    </div>
     <div id='child2'>
        <h1>I'm H1 tag.</h1>
        <h2>I'm H2 tag.</h2>
    </div>
</div> */}

