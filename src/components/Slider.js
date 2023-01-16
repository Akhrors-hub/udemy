import React from 'react';
import styled from 'styled-components'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

const Container = styled.div`
display: flex;
border: 2px solid black;
width: 80%;
height: 50vh;
align-items: center;
justify-content: space-between;
margin: 0 10%;


`
const Arrow = styled.div`
width:50px;
height:50px;
display: flex;
align-items: center;
justify-content: center;

`

const Slider = ()=>{
    return (
        <Container>
<Arrow>
<IoIosArrowDropleftCircle style={{fontSize:"45"}} />
</Arrow>
<Arrow>
<IoIosArrowDroprightCircle style={{fontSize:"45"}} />
</Arrow>
        </Container>
    )
}

export default Slider;