import React from "react";
import { LuNotebookText } from "react-icons/lu";
import { LuBookA } from "react-icons/lu";
import { MdOutlineHomeWork } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import Link from "next/link";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const MyRoomSidebar = () => {
    return (
        <div
            className="relative flex h-screen w-full max-w-[20rem] flex-col rounded-xl bg-white bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5"
        >
            <div className="p-4 mb-2">
                <h1 className="block font-sans text-3xl font-bold text-blue-600">
                    My room
                </h1>
            </div>
            <nav className="flex flex-col flex-grow">
                <p className="flex items-center text-xl my-3 text-blue-400 font-bold">
                    <LuNotebookText className="mr-2" /> My notes
                </p>
                <p className="flex items-center text-xl my-3 text-blue-400 font-bold">
                    <LuBookA className="mr-2" /> My vocabulary
                </p>
                <p className="flex items-center text-xl my-3 text-blue-400 font-bold">
                    <MdOutlineHomeWork className="mr-2" /> Homework
                </p>
                <p className="flex items-center text-xl my-3 text-blue-400 font-bold">
                    <GiProgression className="mr-2" /> Level check
                </p>

                <div className="mt-auto">
                    <Link
                        href="/home"
                        className="flex items-center text-xl mt-auto text-red-400 font-bold"
                    >
                        <MdKeyboardDoubleArrowLeft className="mr-2 text-red-500" />
                        Back home
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default MyRoomSidebar;
