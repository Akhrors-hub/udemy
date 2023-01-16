import React from 'react';
import styled from 'styled-components'
import { IoIosArrowDroprightCircle } from 'react-icons/io'
import { IoIosArrowDropleftCircle } from 'react-icons/io'

const Container = styled.div`
display: flex;
border: 2px solid black;
width: 80%;
height: 50vh;


margin: 0 10%;
background-color: coral;
position: relative;

`
const Arrow = styled.div`
width:50px;
height:50px;
display: flex;
align-items: center;
justify-content: center;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
top:0;
bottom:0;
margin:auto;
position: absolute;
cursor:pointer;

&:hover{
    opacity: 0.5;
}

`

const Wrapper = styled.div`
height:100%`
const Slide = styled.div`
display: flex;
align-items: center;
`
const ImgContainer = styled.div`
flex:1;
height: 100%;
`
const InfoContainer = styled.div`
flex:1;
`

const Image = styled.img`
width: 168.5vh;
`

const Slider = ()=>{
    return (
        <Container>
<Arrow direction="left">
<IoIosArrowDropleftCircle style={{fontSize:"45"}} />
</Arrow>
<Wrapper>
    <Slide>
    <ImgContainer>
<Image src="https://img-c.udemycdn.com/notices/web_banner/slide_2_image_udlite/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg" />
    </ImgContainer>
    <InfoContainer>

    </InfoContainer>
    </Slide>
</Wrapper>
<Arrow direction="right">
<IoIosArrowDroprightCircle style={{fontSize:"45"}} />
</Arrow>
        </Container>
    )
}

export default Slider;