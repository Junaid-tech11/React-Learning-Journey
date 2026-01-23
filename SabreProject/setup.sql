-- Delete table if it already exists
DROP TABLE IF EXISTS Employees;

-- Create the Employees table (SQLite style)
CREATE TABLE Employees (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    FirstName TEXT NOT NULL,
    LastName  TEXT NOT NULL,
    Role      TEXT NOT NULL
);

-- Insert some dummy data
INSERT INTO Employees (FirstName, LastName, Role) VALUES
('Michael', 'Scott', 'Regional Manager'),
('Jim',     'Halpert', 'Sales Representative'),
('Pam',     'Beesly', 'Receptionist'),
('Dwight',  'Schrute', 'Assistant to the Regional Manager'),
('Stanley', 'Hudson',  'Sales Representative');