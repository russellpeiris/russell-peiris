import {FC, ReactNode} from "react";

interface SocialButtonProps  {
    icon: ReactNode
    href: string
}
export const SocialButton: FC<SocialButtonProps> = ({icon, href}) => {

    return (
        <a target={"_blank"} href={href} className='border border-[#4F4F4F] rounded-full p-2 w-fit
                    hover:bg-[#4F4F4F] cursor-pointer
                    transition-all duration-200 ease-in-out
                    '>
            {icon}
        </a>
    )
}