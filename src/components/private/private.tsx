import { auth } from '@/auth'

/*
|-----------------------------------------
| setting up Private for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: auth-project, October, 2024
|-----------------------------------------
*/
const Private = async () => {
    const session = await auth()
    if (!session) {
        return <main className="border p-12 m-12">You are not logged in</main>
    }
    const user = session.user

    return !user ? (
        <main className="border p-12 m-12">You are not logged in</main>
    ) : (
        <main className="border p-12 m-12">Private Component</main>
    )
}
export default Private
