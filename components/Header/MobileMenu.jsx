import {
    useMenuState,
    Menu,
    MenuDisclosure
} from "reakit/Menu";
import MenuItem from './MenuItem'

const MobileMenu = ({menuItems}) => {
    const menu = useMenuState();
    console.log(menu.visible)
    return (
        <>
            <MenuDisclosure {...menu} className="site-header__button">{(menu.visible)? "Close menu": "Menu"}</MenuDisclosure>
            <Menu {...menu} aria-label="Menu" className="mobile-menu">
                <ul className="mobile-menu__items" >
                    {(menuItems.map((menuItem, i)=>
                        <MenuItem href={menuItem.href} text={menuItem.text} key={i}/>    
                    ))}
                </ul>
            </Menu>
        </>
    )
}

export default MobileMenu