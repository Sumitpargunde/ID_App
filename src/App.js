import './App.css';
import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  if (!user) {
    return <div className="flex justify-center items-center h-screen text-lg font-semibold">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex justify-center items-center p-4">
      <div className="max-w-2xl w-full bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 rounded-lg shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl flex">
        {/* Image Section */}
        <div className="w-1/3 overflow-hidden">
          <img
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="w-2/3 p-6 flex flex-col justify-between bg-white">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Gender:</span> {user.gender}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Phone:</span> {user.phone}
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <span className="font-semibold">Address:</span> {`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} - ${user.location.postcode}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
