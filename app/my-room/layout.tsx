import {ReactNode} from "react";
import MyRoomSidebar from "@/app/components/My-room-sidebar";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <main className="flex h-screen flex-col">
            <MyRoomSidebar />
        </main>
    );
}