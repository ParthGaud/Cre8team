'use client'

import { useRouter } from "next/navigation";
import React from "react";


interface NavItemsLabel{
    label: string;
}
const NavItems: React.FC<NavItemsLabel> = ({
    label
}) => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-center cursor-pointer px-3 hover:text-neutral-700 transition" onClick={() => router.push(`/${label}`)}>
            {label}
        </div>
    )
}
export default NavItems