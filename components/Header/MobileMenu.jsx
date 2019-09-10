import styled from "styled-components"
import theme from "../_theme"

export const Button = styled.button`
    font-weight: bold;
    color: white;
    border: none;
    background: none;
    font-size: 1em;
    cursor: pointer;
    &:focus{
        outline: 3px solid ${theme.focus};
        background: ${theme.focus};
        color: ${theme.darkText};
        border-bottom-color: ${theme.darkText};
    }
    @media screen and (min-width: ${theme.tablet}){
        display: none;
    }
`

export const Container = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    li{
        margin-top: 10px;
        margin-right: 0px;
    }
`

// const MobileMenu = ({children}) => {
//     const [menuOpen, toggleMenu] = useState(false)

//     return(
//         <Outer aria-live="polite">
//             <Button onClick={()=> toggleMenu(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</Button>
//             {menuOpen && <Container>{children}</Container>}
//         </Outer>
//     )
// }

// export default MobileMenu