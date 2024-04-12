import React from 'react'
import Sidecard from '../Sidecard/Sidecard'
const Gender = ({handleGenderChange}) => {
    const genders = ['men','women','toddler','child','preschool','infant','youth'];
    return (
        <div className='sidebar-filter bebas-neue-regular'>
            <h3>Gender</h3>
            {genders.map(gender => <Sidecard key={gender} handleChange={handleGenderChange} value={gender} title={gender} name='gender' />)}

        </div>
    )
}

export default Gender