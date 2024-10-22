/*
|-----------------------------------------
| setting up Middleware for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: auth-pwa, October, 2024
|-----------------------------------------
*/

import { auth } from '@/auth'

export default auth((req) => {
    if (!req.auth && req.nextUrl.pathname !== '/login') {
        {
            const newUrl = new URL('/login', req.nextUrl.origin)
            return Response.redirect(newUrl)
        }
    }
})

export const config = {
    matcher: ['/private'],
}
