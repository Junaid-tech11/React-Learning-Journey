import { useEffect, useState } from 'react';
import './App.css';

const API_URL = 'http://127.0.0.1:53002/api/Employees.cfc?method=getAllEmployees';

function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load employees');
        setLoading(false);
      });
  }, []);

  const filtered = employees.filter((e) =>
    `${e.FIRSTNAME} ${e.LASTNAME} ${e.ROLE} ${e.DEPARTMENT} ${e.LOCATION}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Team Directory</h1>

      <input
        type="text"
        placeholder="Search by name, role, department or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <div className="grid">
        {filtered.map((emp) => (
          <div key={emp.ID} className="card">
            <h2>{emp.FIRSTNAME} {emp.LASTNAME}</h2>
            <p className="role">{emp.ROLE}</p>
            <p className="meta">
              {emp.DEPARTMENT} · {emp.LOCATION}
            </p>
            <p className="email">{emp.EMAIL}</p>
            <p className="skills">Skills: {emp.SKILLS}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;