"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {FC, ReactNode} from "react";

interface NavigationItemProps {
    icon: ReactNode
    title: string
    href: string
}

export const NavigationItem: FC<NavigationItemProps> = ({
                                                            icon,
                                                            title,
                                                            href,
                                                        }) => {
    const currentPath = usePathname();
    const isActive = currentPath === href;
    return (
        <Link href={href}>
    <span
        className={`${isActive ? 'bg-[#202020]' : 'bg-transparent'} 
              flex gap-4 justify-center text-[10px] 
              px-4 py-2 whitespace-nowrap
              w-fit border border-[#4F4F4F] rounded-2xl 
              hover:bg-[#4F4F4F] 
              transition-all duration-200 ease-in-out`}
    >
    {icon}
        <span className="hidden md:inline">{title}</span>
</span>
        </Link>
    );
}