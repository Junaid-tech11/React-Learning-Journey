import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API endpoint - adjust port if needed
  const API_URL = 'http://127.0.0.1:8080/rest/employee/list';

  // Fetch employees from ColdFusion REST API
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Handle both array and query object formats
        const employeeData = Array.isArray(data) ? data : data.DATA || [];

        setEmployees(employeeData);
        setFilteredEmployees(employeeData);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching employees:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Filter employees based on search term
  useEffect(() => {
    if (searchTerm === '') {
      setFilteredEmployees(employees);
    } else {
      const filtered = employees.filter(emp => {
        const searchLower = searchTerm.toLowerCase();
        return (
          emp.FIRSTNAME?.toLowerCase().includes(searchLower) ||
          emp.LASTNAME?.toLowerCase().includes(searchLower) ||
          emp.ROLE?.toLowerCase().includes(searchLower) ||
          emp.DEPARTMENT?.toLowerCase().includes(searchLower)
        );
      });
      setFilteredEmployees(filtered);
    }
  }, [searchTerm, employees]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm('');
  };

  if (loading) {
    return (
      <div className="app-container">
        <div className="loading">Loading employees...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="error">
          <h2>Error Loading Data</h2>
          <p>{error}</p>
          <p>Make sure your ColdFusion server is running on port 8080</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Team Directory</h1>
        <p className="subtitle">Sabre Software Intern Project</p>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, role, or department..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        {searchTerm && (
          <button onClick={clearSearch} className="clear-btn">
            Clear
          </button>
        )}
      </div>

      <div className="results-info">
        Showing {filteredEmployees.length} of {employees.length} employees
      </div>

      <div className="employee-grid">
        {filteredEmployees.length === 0 ? (
          <div className="no-results">No employees found matching "{searchTerm}"</div>
        ) : (
          filteredEmployees.map((emp) => (
            <div key={emp.ID} className="employee-card">
              <div className="employee-avatar">
                {emp.FIRSTNAME?.charAt(0)}{emp.LASTNAME?.charAt(0)}
              </div>
              <h3 className="employee-name">
                {emp.FIRSTNAME} {emp.LASTNAME}
              </h3>
              <p className="employee-role">{emp.ROLE}</p>
              <div className="employee-details">
                <p className="employee-department">
                  <span className="label">Department:</span> {emp.DEPARTMENT}
                </p>
                <p className="employee-email">
                  <span className="label">Email:</span> {emp.EMAIL}
                </p>
                {emp.HIREDATE && (
                  <p className="employee-hire">
                    <span className="label">Hired:</span> {new Date(emp.HIREDATE).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;