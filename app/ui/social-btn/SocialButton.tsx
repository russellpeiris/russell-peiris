import {FC, ReactNode} from "react";

interface SocialButtonProps  {
    icon: ReactNode
    href: string
    text?: string
}
export const SocialButton: FC<SocialButtonProps> = ({icon, href, text}) => {

    return (
        <a target={"_blank"} href={href} className='border border-[#4F4F4F] rounded-full p-2 w-fit
                    hover:bg-[#4F4F4F] cursor-pointer
                    transition-all duration-200 ease-in-out
                    '>
            <div className={'flex gap-2 items-center'}>
                {icon}
                {text && <div className={'text-[10px]'}>{text}</div>}
            </div>
        </a>
    )
}