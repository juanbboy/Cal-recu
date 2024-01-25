// import jsPDF from 'jspdf';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';

// // const Home = () => {
// const document = new jsPDF();

// const Shiv = <b>You have Downlaoded a component from react</b>;

// export default function App() {
//     const save = () => {
//         document.html(ReactDOMServer.renderToStaticMarkup(Shiv), {
//             callback: () => {
//                 document.save("yourDoc.pdf");
//             },
//         });
//     };

//     return (
//         <div>
//             <button onClick={save}>React Component to pdf</button>
//             <button onClick={window.print()}>Download PDF</button>
//         </div>
//     );


















import React from 'react'
import omm from "../omm.jpg"
import logo from "../logo.png"
const Home = () => {
    return (
        <div>
            <div className='container p-3'>
                <img src={logo} alt="" />
            </div>
            <div className='p-5'>
                <img src={omm} alt="" />
            </div>
        </div>
    )
}

export default Home 