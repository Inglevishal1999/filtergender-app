import React, { useState } from "react";

const ChartComponent = () => {
  const [gender, setGender] = useState("all");

  const people = [
    { id: 1, name: "Ananya", age: 22, gender: "female" },
    { id: 2, name: "Ravi", age: 30, gender: "male" },
    { id: 3, name: "Meera", age: 18, gender: "female" },
    { id: 4, name: "Amit", age: 40, gender: "male" },
    { id: 5, name: "Tina", age: 27, gender: "female" },
  ];

  const filterPeople = gender === "all"
            ? people
            : people.filter((person) => person.gender === gender)

  return (
    <>
      <div className="w-full h-10 p-2">
        <div className="w-full flex gap-12">
            {["all","male","female"].map((g) =>(
          <div key={g}>
            <input
              type="radio"
              id={g}
              name="gender" // same name for all
              value={g}
              checked={gender === g}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor={g} className="capitalize">{g}</label>
          </div>
           ))}
        </div>
      </div>

      <table className="w-full border text-left">
      <thead className="bg-black text-white h-10">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        </thead>
        <tbody>
        {filterPeople.map((person) => (
          <tr key={person.id} className="border-t">
            <td>
              <img
                src={`https://robohash.org/${person.name}`}
                alt={person.name}
                className="w-14"
              />
            </td>
            <td>{person.name}</td>
            <td>{person.name.toLowerCase()}@example.com</td>
            <td>{person.age}</td>
            <td>{person.gender}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </>
  );
};

export default ChartComponent;
