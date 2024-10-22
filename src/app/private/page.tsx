/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: auth-project, October, 2024
|-----------------------------------------
*/

import { auth } from '@/auth'

const Page = async () => {
    const session = await auth()
    if (!session) {
        return <div>You are not logged in</div>
    }
    const user = session.user

    return (
        <main>
            <div className="flex items-center flex-col justify-center w-full h-screen">
                <h2>Private</h2>
                <h3>Name: {user?.name}</h3>
                <h3>Email: {user?.email}</h3>
            </div>
        </main>
    )
}
export default Page
