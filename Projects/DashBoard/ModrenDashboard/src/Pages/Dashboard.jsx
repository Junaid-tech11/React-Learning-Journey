import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import UserTable from '../Components/UserTable';
import SearchBar from '../Components/SearchBar';

function Dashboard() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState();
    const [searchTerm, setSearchTerm] = useState('')
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(4)

    useEffect(() => {
        async function fetchUsers() {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json()
                setUsers(data)
            } catch (error) {
                setError(error.message)

            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedUsers = [...filteredUsers].sort((a, b) => {
        // If we aren't sorting anything, just keep the order
        if (!sortConfig.key) return 0;

        const aValue = a[sortConfig.key]; // e.g., "Leanne"
        const bValue = b[sortConfig.key]; // e.g., "Ervin"

        if (aValue < bValue) {
            return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
            return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'asc';

        // If we are ALREADY sorting by this column and it's 'asc', flip it to 'desc'
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        // Update the state with the new target
        setSortConfig({ key, direction });
    };


    // 1. Calculate the indices
    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;

    // 2. Slice the array (This is what goes to the Table!)
    const currentUsers = sortedUsers.slice(indexOfFirstUser, indexOfLastUser);

    // 3. Calculate total pages (for the Next button logic)
    const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

    // Reset to page 1 whenever the user types in the search bar
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);


    return (
        <div className="p-6">
            <h1>User Dashboard</h1>

            {/* 1. Search Bar (Stays the same) */}
            <SearchBar value={searchTerm} onChange={setSearchTerm} />

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <>
                    {/* 2. THE TABLE: Pass the SLICE (currentUsers), not the full list */}
                    <UserTable
                        data={currentUsers}
                        onSort={requestSort}
                        loading={loading}
                    />

                    {/* 3. THE PAGINATION CONTROLS (New Section!) */}
                    <div className="flex justify-center mt-4 gap-4">

                        {/* PREVIOUS BUTTON */}
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1} // Can't go back from page 1
                        >
                            Previous
                        </button>

                        <span className="self-center">
                            Page {currentPage} of {totalPages}
                        </span>

                        {/* NEXT BUTTON */}
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages} // Can't go past the last page
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Dashboard