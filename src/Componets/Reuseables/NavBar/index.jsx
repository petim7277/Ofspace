import DesktopNavbar from "../DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import {useMediaQuery} from "react-responsive"

const NavBar = ()=>{
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    return(
        <div>
            {isDesktopOrLaptop ? <DesktopNavbar /> : <MobileNavbar />}
        </div>

    )
}
export  default NavBar;