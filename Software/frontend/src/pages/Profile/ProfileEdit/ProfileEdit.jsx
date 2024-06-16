import React, { useState } from 'react';
import './ProfileEdit.css';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    firstName: 'Hieu',
    lastName: 'Nguyen Van',
    email: 'nvhieu2402@gmail.com',
    province: 'Ha Noi',
    district: 'Hai Ba Trung',
    ward: 'Bach Khoa',
    address: '1 Dai Co Viet Street',
    phoneNumber: '0897654321',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile saved:', profile);
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Your Profile</h2>
      <form onSubmit={handleSubmit} className="profileForm">
        <div className="name-field">
          <label>
            <span className="form-label">First Name</span>
            
            <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} />
          </label>
          <label>
          <span className="form-label">Last Name</span>
            <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} />
          </label>
        </div>
        
        <label>
          <span>Email</span>
          <input type="email" name="email" value={profile.email} onChange={handleChange} />
        </label>

        <label>
          <span>Province</span>
          <input type="text" name="province" value={profile.province} onChange={handleChange} />
        </label>
        <label>
          <span>District</span>
          <input type="text" name="district" value={profile.district} onChange={handleChange} />
        </label>
        <label>
        <span>Ward</span>
          <input type="text" name="ward" value={profile.ward} onChange={handleChange} />
        </label>
        <label>
        <span>Address Details</span>
          <input type="text" name="address" value={profile.address} onChange={handleChange} />
        </label>
        <label>
        <span>Phone Number</span>
          <input type="text" name="phoneNumber" value={profile.phoneNumber} onChange={handleChange} />
        </label>
        <button type="submit" id="submit-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
