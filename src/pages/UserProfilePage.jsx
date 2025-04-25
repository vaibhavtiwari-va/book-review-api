import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserProfilePage = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get('/api/users/1')  // Replace with actual user ID
      .then(res => {
        setUser(res.data);
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch(err => console.error(err));
  }, []);

  const updateProfile = () => {
    axios.put('/api/users/1', { name, email })
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Profile</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={updateProfile}>Update Profile</button>
    </div>
  );
};

export default UserProfilePage;
