import { Admin } from './admin/admin'
import { Basket } from './basket/basket'
import { ItemPage } from './card/itemPage'
import { Home } from './home/home'
import { Login } from './log/login'
import { Registration } from './log/registration'
import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE } from './utils/const'

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ItemPage
    }
]