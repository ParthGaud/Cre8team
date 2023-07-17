'use client'

import { useRouter } from "next/navigation";
import React from "react";


interface NavItemsLabel{
    label: string;
    onClick: () => void
}
const NavItems: React.FC<NavItemsLabel> = ({
    label, onClick
}) => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-center cursor-pointer px-3 hover:text-neutral-700 transition" onClick={onClick}>
            {label}
        </div>
    )
}
export default NavItems