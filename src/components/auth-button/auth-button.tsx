/*
|-----------------------------------------
| setting up AuthButton for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: auth-project, October, 2024
|-----------------------------------------
*/

import { auth, signOut } from '@/auth'
import Link from 'next/link'

const AuthButton = async () => {
    const session = await auth()
    if (!session) {
        return <Link href="/login">Login</Link>
    }
    const user = session.user

    return !user ? (
        <Link href="/login">Login</Link>
    ) : (
        <form
            action={async () => {
                'use server'
                await signOut()
            }}
        >
            <button type="submit">Sign out</button>
        </form>
    )
}
export default AuthButton
