import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        setLists(data.data);
      });
  }, []);

  return (
    <>
      <table>
        <tbody>
          {lists.map((person) => (
            <tr key={person.id}>
              <td>{person.first_name}</td>

              <td>{person.last_name}</td>

              <td>{person.email}</td>

              <td>
                <img src={person.avatar} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default App;
