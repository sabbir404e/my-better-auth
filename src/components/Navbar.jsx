'use client';
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";


const Navbar = () => {

    const {data, isPending} = useSession();

    if(isPending){
        return <div>Loading...</div>
    }

    console.log("Session data in Navbar", data)

    const user = data?.user;

    return (
        <div>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        <p className="font-bold">ACME</p>
                    </div>
                    <ul className="flex items-center gap-4">
                        <li><Link href="/auth/signup">Sign Up</Link></li>
                        <li><Link href="/auth/signin">Sign In</Link></li>
                    </ul>
                    <div>
                        {user ? <>
                            <p>Welcome, {user.name}!</p> <button onClick={ () => signOut()}>
                        SignOut</button> </> : <Link href="/auth/signin">
                           Sign In
                        </Link>}
                    </div>
                </header>
            </nav>
        </div>
    );
};

export default Navbar;