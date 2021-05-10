import React, { useState, useEffect } from 'react'
import Pdf from "react-to-pdf";
import './App.css';
const ref = React.createRef();

export default function App() {
  useEffect(() => {
    document.getElementById("printBtn").click();
  }, []);
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <div onClick={toPdf} id="printBtn"></div>}
      </Pdf>
      <div ref={ref}>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job Title</th>
              <th>Twitter</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-column="First Name">Ankit</td>
              <td data-column="Last Name">Saxena</td>
              <td data-column="Job Title">Frontend Developer</td>
              <td data-column="Twitter">@ankitsaxena21</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr><tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr>
            <tr>
              <td data-column="First Name">James</td>
              <td data-column="Last Name">Matman</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@james</td>
            </tr>
            <tr>
              <td data-column="First Name">Andor</td>
              <td data-column="Last Name">Nagy</td>
              <td data-column="Job Title">Designer</td>
              <td data-column="Twitter">@andornagy</td>
            </tr>
            <tr>
              <td data-column="First Name">Tamas</td>
              <td data-column="Last Name">Biro</td>
              <td data-column="Job Title">Game Tester</td>
              <td data-column="Twitter">@tamas</td>
            </tr>
            <tr>
              <td data-column="First Name">Zoli</td>
              <td data-column="Last Name">Mastah</td>
              <td data-column="Job Title">Developer</td>
              <td data-column="Twitter">@zoli</td>
            </tr>
            <tr>
              <td data-column="First Name">Szabi</td>
              <td data-column="Last Name">Nagy</td>
              <td data-column="Job Title">Chief Sandwich Eater</td>
              <td data-column="Twitter">@szabi</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
