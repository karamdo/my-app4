import React from "react";
import Head from "./comp/Head";
import Main from "./comp/Main";
import "./index.css";

// function TextInput() {
//   const [text, setText] = useState("");

//   const handleInputChange = (e) => {
//     setText(e.target.value);
//     console.log(text);
//   };

//   return (
//     <div>
//       <input type="text" value={text} onChange={handleInputChange} />
//       <p>Text entered: {text}</p>
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      <Head />
      <Main />
      {/* <TextInput /> */}
    </div>
  );
}
