import {paths} from "./paths";
import {ContactsPage} from "./contacts";

export const ROUTES = [
    {exact: true, path: paths.home(), component: ContactsPage}
]