'use client';

import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { signIn, signOut, useSession } from "next-auth/react"; // Correct imports

const Header = () => {
    const { data: session, status } = useSession(); // Using useSession to get session info

    return (
        <header className="flex justify-between items-center p-4 bg-blue-200 text-white">
            <div className="flex items-center">
                <Image
                    src='/logo.png'
                    alt='logo'
                    width={70}
                    height={70}
                    className='hover:bg-blue-300 p-2 rounded-full cursor-pointer'
                />
            </div>
            <nav className="flex space-x-4">
                <Link href={'/'} className="hover:text-gray-400 font-semibold text-blue-500">Home</Link>
                <Link href={'/my-room'} className="hover:text-gray-400 font-semibold text-blue-500">My room</Link>
                <Link href={'/'} className="hover:text-gray-400 font-semibold text-blue-500">Skills</Link>
                <Link href={'/'} className="hover:text-gray-400 font-semibold text-blue-500">Tips</Link>
                <Link href={'/'} className="hover:text-gray-400 font-semibold text-blue-500">Level check</Link>
            </nav>
            <div className={"flex items-center gap-5"}>
                {session ? (
                    <>
                        <Link href={"/create"}>
                            Create
                        </Link>

                        <button onClick={async () => await signOut()}>
                            <span>Log out</span>
                        </button>

                        <Link href={'/my-room'}>
                            <span>{session.user?.name}</span>
                        </Link>
                    </>
                ) : (
                    <button onClick={async () => await signIn()}>
                        <span>Login</span>
                    </button>
                )}
            </div>
        </header>
    );
}

export default Header;
