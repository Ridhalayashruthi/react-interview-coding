import React from 'react';
import './EmployeeSearch.css';

const employees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Bob Brown' },
  { id: 5, name: 'Charlie Davis' },
];

export default function EmployeeSearch() {
  const [search, setSearch] = React.useState('');

  const filteredList = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className='container'>
      <input
        type='search'
        placeholder='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredList.length === 0 ? (
        <p>No Employees found</p>
      ) : (
        <ul>
          {filteredList.map((employee) => (
            <li key={employee.id}>{employee.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
