import React from 'react'
import styled from 'styled-components'

const Container= styled.div`
background-color: #9900ff;
color: white;
height:40px;
display: flex;
justify-content: center;
align-items: center;
`
const Announcement = ()=> {
    return (
        <Container>
     <p> <b> Future-ready skills on your schedule  |  Learn why Udemy is trusted by 12.5K+ companies around the world</b></p>

        </Container>
    )
}
export default Announcement