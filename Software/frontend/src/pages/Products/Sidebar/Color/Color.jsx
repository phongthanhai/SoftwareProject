import React from 'react'
import Sidecard from '../Sidecard/Sidecard'
const Color = ({handleColorChange}) => {
    const colors = ['black','white','green','blue','red','yellow','brown','pink','grey'];
    return (
        <div className='sidebar-filter bebas-neue-regular'>
            <h3>Color</h3>
            {colors.map(color => <Sidecard key={color} handleChange={handleColorChange} value={color} title={color} name='color' color={color}/>)}
        </div>
    )
}

export default Color