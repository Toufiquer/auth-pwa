/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: auth-pwa, October, 2024
|-----------------------------------------
*/

import Private from '@/components/private/private'
import Public from '@/components/public/public'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <h2>Home Page</h2>
            <div className="w-full flex items-center justify-center flex-col gap-4">
                <Private />
                <Public />
            </div>
        </div>
    )
}
