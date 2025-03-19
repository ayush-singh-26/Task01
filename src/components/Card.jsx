import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Card = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUserData(response.data);
        };
        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-6 p-4">
            {userData.map(user => (
                <div key={user.id} className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-semibold">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
                            <p className="text-gray-500">@{user.username}</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-700"><span className="font-semibold">Email:</span> {user.email}</p>
                        <p className="text-gray-700"><span className="font-semibold">Phone:</span> {user.phone}</p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Website:</span>{' '}
                            <a href={`http://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                                {user.website}
                            </a>
                        </p>
                        <p className="text-gray-700"><span className="font-semibold">Company:</span> {user.company.name}</p>
                        <p className="text-gray-700"><span className="font-semibold">Catchphrase:</span> <em>{user.company.catchPhrase}</em></p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-lg">
                        <p className="text-gray-700 font-semibold mb-1">Address:</p>
                        <p className="text-gray-600 text-sm">{user.address.suite}, {user.address.street}</p>
                        <p className="text-gray-600 text-sm">{user.address.city}, {user.address.zipcode}</p>
                        <p className="text-gray-600 text-sm">Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
