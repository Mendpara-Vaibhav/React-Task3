import { useState } from "react";
import "./App.css";

function App() {
  const [arrList, setArrList] = useState([]);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setArrList([...arrList, { name, type }]);

    setName("");
    setType("");
  };

  const handleShift = (index) => {
    const updatedList = [...arrList];
    updatedList[index].type =
      updatedList[index].type === "Country" ? "City" : "Country";
    setArrList(updatedList);
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter country name"
            required
          />
        </label>
        <br />
        <label>
          Type:
          <select
            name="type"
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="">Select One</option>
            <option value="Country">Country</option>
            <option value="City">City</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Btn</th>
            </tr>
          </thead>
          <tbody>
            {arrList
              .filter((data) => data.type == "Country")
              .map((element, index) => (
                <tr key={index}>
                  <td>{element.name}</td>
                  <td>
                    <button
                      onClick={() => handleShift(arrList.indexOf(element))}
                    >
                      Shift
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Btn</th>
            </tr>
          </thead>
          <tbody>
            {arrList
              .filter((data) => data.type == "City")
              .map((element, index) => (
                <tr key={index}>
                  <td>{element.name}</td>
                  <td>
                    <button
                      onClick={() => handleShift(arrList.indexOf(element))}
                    >
                      Shift
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
