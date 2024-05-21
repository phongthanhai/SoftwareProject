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
        const provinceId = e.target.value;
        setSelectedProvince(provinceId);
        setDistricts([]);
        setWards([]);
        if (provinceId) {
            const selectedProvince = provinces.find(province => province.Id === provinceId);
            setDistricts(selectedProvince.Districts);
        }
        // this should be the name of the province same thing for districts and wards , fix this later
        onProvinceChange(provinceId);
    };

    const handleDistrictChange = (e) => {
        const districtId = e.target.value;
        setSelectedDistrict(districtId);
        setWards([]);
        if (districtId) {
            const selectedDistrict = districts.find(district => district.Id === districtId);
            setWards(selectedDistrict.Wards);
        }
        onDistrictChange(districtId);
    };

    const handleWardChange = (e) => {
        const wardId = e.target.value;
        onWardChange(wardId);
    };

    return (
        <>
            <div className="checkout-form-group">
                <label>Province *</label>

                <select id="city" onChange={handleProvinceChange} required>
                    <option value="" selected>Please select a province</option>
                    {provinces.map(province => (
                        <option key={province.Id} value={province.Id}>{province.Name}</option>
                    ))}
                </select>
            </div>

            <div className="checkout-form-group">
                <label>District *</label>

                <select id="district" onChange={handleDistrictChange} disabled={!selectedProvince} required>
                    <option value="" selected>Please select a district</option>
                    {districts.map(district => (
                        <option key={district.Id} value={district.Id}>{district.Name}</option>
                    ))}
                </select>
            </div>

            <div className="checkout-form-group">
                <label>Ward *</label>

                <select id="ward" onChange={handleWardChange} disabled={!selectedDistrict} required>
                    <option value="" selected>Please select a ward</option>
                    {wards.map(ward => (
                        <option key={ward.Id} value={ward.Id}>{ward.Name}</option>
                    ))}
                </select>
            </div>

        </>
    );
};

export default LocationSelect;
