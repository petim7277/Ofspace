import DesktopNavbar from "../DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import {useMediaQuery} from "react-responsive"

const NavBar = ()=>{
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    let navbar;
    if (isDesktopOrLaptop) {
        navbar = <DesktopNavbar />;
    } else {
        navbar = <MobileNavbar />;
    }

    return (
        <div>
            {navbar}
        </div>
    );


}
export  default NavBar;