import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationSelect = ({ onProvinceChange, onDistrictChange, onWardChange }) => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then(response => setProvinces(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleProvinceChange = (e) => {
        const provinceName = e.target.value;
        setSelectedProvince(provinceName);
        setDistricts([]);
        setWards([]);
        if (provinceName) {
            const selectedProvince = provinces.find(province => province.Name === provinceName);
            setDistricts(selectedProvince.Districts);
        }
        // this should be the name of the province same thing for districts and wards , fix this later
        onProvinceChange(provinceName);
    };

    const handleDistrictChange = (e) => {
        const districtName = e.target.value;
        setSelectedDistrict(districtName);
        setWards([]);
        if (districtName) {
            const selectedDistrict = districts.find(district => district.Name === districtName);
            setWards(selectedDistrict.Wards);
        }
        onDistrictChange(districtName);
    };

    const handleWardChange = (e) => {
        const wardName = e.target.value;
        onWardChange(wardName);
    };

    return (
        <>
            <div className="checkout-form-group">
                <label>Province *</label>

                <select id="city" onChange={handleProvinceChange} required>
                    <option value="" selected>Please select a province</option>
                    {provinces.map(province => (
                        <option key={province.Id} value={province.Name}>{province.Name}</option>
                    ))}
                </select>
            </div>

            <div className="checkout-form-group">
                <label>District *</label>

                <select id="district" onChange={handleDistrictChange} disabled={!selectedProvince} required>
                    <option value="" selected>Please select a district</option>
                    {districts.map(district => (
                        <option key={district.Id} value={district.Name}>{district.Name}</option>
                    ))}
                </select>
            </div>

            <div className="checkout-form-group">
                <label>Ward *</label>

                <select id="ward" onChange={handleWardChange} disabled={!selectedDistrict} required>
                    <option value="" selected>Please select a ward</option>
                    {wards.map(ward => (
                        <option key={ward.Id} value={ward.Name}>{ward.Name}</option>
                    ))}
                </select>
            </div>

        </>
    );
};

export default LocationSelect;
