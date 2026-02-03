import React from 'react'

// It receives the current text (value) and the function to update it (onChange)
function SearchBar({ value, onChange }) {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Search users..."
                className="w-full p-2 border rounded"
                value={value} // Controlled Input
                onChange={(e) => onChange(e.target.value)} // Send the text back to Dashboard
            />
        </div>
    )
}

export default SearchBar