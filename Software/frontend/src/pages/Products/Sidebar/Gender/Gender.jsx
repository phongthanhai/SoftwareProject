import React from 'react'
import Sidecard from '../Sidecard/Sidecard'
const Gender = ({handleGenderChange}) => {
    const genders = ['men','women','toddler','child','preschool','infant','youth'];
    return (
        <div>
            <h2>Gender</h2>
            {genders.map(gender => <Sidecard key={gender} handleChange={handleGenderChange} value={gender} title={gender} name='gender' />)}

        </div>
    )
}

export default Gender