import React from 'react';

// The Skeleton Component (Internal)
function SkeletonRow() {
    return (
        <tr className="animate-pulse border-b">
            <td className="p-3">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </td>
            <td className="p-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </td>
            <td className="p-3">
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            </td>
        </tr>
    );
}

// The Main Component
function UserTable({ data, onSort, loading }) {
    return (
        <div className="overflow-x-auto shadow-md rounded-lg mt-4">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th
                            className="p-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-gray-200"
                            onClick={() => onSort('name')}
                        >
                            Name ↕
                        </th>
                        <th
                            className="p-3 text-left font-semibold text-gray-700 cursor-pointer hover:bg-gray-200"
                            onClick={() => onSort('email')}
                        >
                            Email ↕
                        </th>
                        {/* We kept City static since we skipped the advanced sort logic */}
                        <th className="p-3 text-left font-semibold text-gray-700">
                            City
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (
                        // 💀 SHOW SKELETONS WHEN LOADING
                        [...Array(5)].map((_, index) => <SkeletonRow key={index} />)
                    ) : (
                        // 👤 SHOW REAL DATA WHEN LOADED
                        data.map((user) => (
                            <tr key={user.id} className="border-t hover:bg-gray-50 transition">
                                <td className="p-3 text-gray-800">{user.name}</td>
                                <td className="p-3 text-gray-600">{user.email}</td>
                                <td className="p-3 text-gray-600">{user.address.city}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;