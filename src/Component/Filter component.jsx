import React, { useState } from "react";

const people = [
  { id: 1, name: "Ananya", age: 22, gender: "female" },
  { id: 2, name: "Ravi", age: 30, gender: "male" },
  { id: 3, name: "Meera", age: 18, gender: "female" },
  { id: 4, name: "Amit", age: 40, gender: "male" },
  { id: 5, name: "Tina", age: 27, gender: "female" },
];

const FilterComponent = () => {
  const [ageRange, setAgeRange] = useState("all");
  const [gender, setGender] = useState("all");

  const filteredPeople = people.filter((person) => {
    const matchAge =
      ageRange === "all" ||
      (ageRange === "under25" && person.age < 25) ||
      (ageRange === "25to35" && person.age >= 25 && person.age <= 35) ||
      (ageRange === "above35" && person.age > 35);

    const matchGender = gender === "all" || person.gender === gender;

    return matchAge && matchGender;
  });

  return (
    <div className="p-6 max-w-md mx-auto space-y-6">
      <h2 className="text-xl font-bold">👥 Filter by Age & Gender</h2>

      {/* Age Filter */}
      <div>
        <h3 className="font-semibold mb-2">Age</h3>
        <div className="space-y-1">
          {[
            { label: "All Ages", value: "all" },
            { label: "Under 25", value: "under25" },
            { label: "25 to 35", value: "25to35" },
            { label: "Above 35", value: "above35" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="age"
                value={opt.value}
                checked={ageRange === opt.value}
                onChange={(e) => setAgeRange(e.target.value)}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Gender Filter */}
      <div>
        <h3 className="font-semibold mb-2">Gender</h3>
        <div className="space-y-1">
          {[
            { label: "All", value: "all" },
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ].map((opt) => (
            <label key={opt.value} className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value={opt.value}
                checked={gender === opt.value}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Filtered Result */}
      <ul className="space-y-2">
        {filteredPeople.map((person) => (
          <li
            key={person.id}
            className="border rounded px-3 py-2 flex justify-between"
          >
            <span>{person.name}</span>
            <span className="text-gray-500">
              {person.age} yrs / {person.gender}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
