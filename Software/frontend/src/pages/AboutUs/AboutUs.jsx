import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Sortbar from '../Products/Sortbar/Sortbar'
const AboutUs = () => {
    const [on, setOn] = useState(true)
    const [sortByOption, setSortByOption] = useState(true);

    function handleSetOn() {
        setOn(!on);
        setSortByOption(true);
    }
    function handleSortChange(event) {
        setSortByOption(false);
    }
    return (
        <Container>
            <div>AboutUs</div>
            <button onClick={handleSetOn}>{on ? "on" : "off"}</button>
            <Sortbar sortByOption={sortByOption} handleSortChange={handleSortChange} />
        </Container>
    )
}

export default AboutUs