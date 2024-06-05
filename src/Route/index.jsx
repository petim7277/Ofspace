import Layout from "../Componets/Layout/Layout";
import Features from "../Features";

export const Routes = [
    {
        path:"",
        element:<Layout/>,
        children:[

            {
             path:"",
             element:<Features/>
            },
        ]
    }
]