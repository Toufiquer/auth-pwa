/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: auth-project, October, 2024
|-----------------------------------------
*/

import { signIn } from '@/auth'

export default function SignIn() {
    return (
        <div className="w-full justify-center flex items-center h-screen">
            <form
                action={async () => {
                    'use server'
                    await signIn('google')
                }}
            >
                <button type="submit">Sign in with Google</button>
            </form>
        </div>
    )
}
