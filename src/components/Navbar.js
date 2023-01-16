import React from 'react'
import styled from 'styled-components'
import { HiOutlineSearch } from 'react-icons/hi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { GrLanguage } from 'react-icons/gr'

const Container = styled.div`
height: 75px;
box-shadow: 0px 0px 8px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;

`
const Left = styled.div`
display: flex;

align-items: center;
padding: 10px;
width: 180px;

`
const Logo = styled.div`
width: 90%;

cursor: pointer;
`
const Menu = styled.div`
cursor: pointer;
padding:0px 11px;
font-size:14px;
`
const Center = styled.div`
flex:1;
display: flex;
align-items: center;

`

const SearchContainer = styled.div`
border-radius: 25px;
width: 108vh;;
height: 25px;
display:flex;
border: 1px solid black;
padding:10px;
align-items: center;
`
const Input = styled.input`
border:none;
width: 100vh;;
height: 25px;
outline: none;
padding: 0 15px;


`

const Right = styled.div`
width:33%;

display: flex;
padding 10px;
align-items: center;
`
const Button = styled.button`
  background-color: white;
  color: black;
 border:1px solid black;
  padding: 8px 16px;
  width: 83px;
  height: 40px;
    cursor: pointer;
    margin-right: 10px;
    &:hover{
        background-color: whitesmoke;
    }
`
const Language = styled.button`
background-color: white;
color: black;
padding: 5px 5px;
width: 45px;
height: 40px;
  cursor: pointer;
 
  border:1px solid black;
  &:hover{
    background-color: whitesmoke;
}
`

;

const Navbar = ()=> {
    return (
        <Container>
<Wrapper>
    <Left>
        <Logo>
        <img src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'></img>
        </Logo>
<Menu> Catagories</Menu>

    </Left>
<Center>
<SearchContainer>
            <HiOutlineSearch style={{color:"gray", fontSize:20}} />
            <Input placeholder="Search for anything" />
        </SearchContainer>
</Center>
<Right>
<Menu> Udemy Business</Menu>
<Menu> Teach on Udemy</Menu>
<MdOutlineShoppingCart style={{fontSize:25, paddingLeft:"4px",paddingRight:"15px", cursor:"pointer"}}/>
<Button>Log in</Button>
<Button style={{backgroundColor:"black", color:"white"}}>Sign up</Button>
<Language><GrLanguage style={{fontSize:20}}/></Language>

</Right>
</Wrapper>
        </Container>
    )
}
export default Navbar;