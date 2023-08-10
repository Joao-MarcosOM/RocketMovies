import { BrowserRouter  } from "react-router-dom";

import { AuthRouts } from "./auth.routes"
import { AppRoutes } from "./app.routes";

export function Routes(){
    return(
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}