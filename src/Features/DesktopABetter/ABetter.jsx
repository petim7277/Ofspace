import {useMediaQuery} from "react-responsive";
import DesktopABetter from "./index";
import MobileABetter from "../MobileABetter";


const ABetter = ()=>{

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    let component;
    if (isDesktopOrLaptop) {
        component = <DesktopABetter />;
    } else {
        component = <MobileABetter />;
    }

    return (
        <div>
            {component}
        </div>
    );
}
export  default ABetter