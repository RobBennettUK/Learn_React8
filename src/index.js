// import React from "react";
// import ReactDOM from "react-dom";
// import Heading from "./components/Heading";
// import List from "./components/List";

// // It is convention to give every function we create a capital letter to start with
// // This allows the React to differentiate ours from the native HTML
// // What we actually do, is create a jsx file with the same name as the component and then import it
// // Remember, in the jsx file we must import React and then export the function without ()
// // function Heading() {
// //   return <h1>My Favourite Foods</h1>;
// // }

// // For best practices, see https://github.com/airbnb/javascript/tree/master/react

// ReactDOM.render(
//   <div>
//     <Heading />
//     <List />
//   </div>,
//   document.getElementById("root")
// );

// What you will see in many websites is no HTML within the HTML, it will just Say
// There would be a separate App.jsx file that would render all the components and export App as shown in the App.jsx file
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));
