

import Header from "../components/Hearder/Button";
import { Outlet } from "react-router-dom";
function DefaultLayout(){

            return (
             <>
             <Header/>
             <Outlet/>
             </>
            )


}

       export default DefaultLayout