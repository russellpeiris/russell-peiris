import {SocialButton} from "@/app/ui";
import {GithubLogo, LinkedinLogo, InstagramLogo} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import profilePic from '../public/profile.jpg'

export default function Home() {
    return (
        <div className={'flex justify-center gap-8'}>
            <Image
                width={114}
                height={114}
                src={profilePic}
                alt={''}
                className={'rounded-full w-24 md:w-28'}
            />
            <div className={'flex-col flex justify-between'}>
                <div className={'font-bold text-2xl md:text-[28px] p-0 m-0'}>Russell Peiris</div>
                <div className={'text-[#A0A0A0] text-sm md:text-[20px]'}>Software Engineer</div>
                <div className={'flex gap-4'}>
                    <SocialButton icon={<GithubLogo size={'16px'}/>} href={"https://github.com/russellpeiris"}/>
                    <SocialButton icon={<LinkedinLogo size={'16px'}/>} href={"https://www.linkedin.com/in/ardpeiris/"}/>
                    <SocialButton icon={<InstagramLogo size={'16px'}/>} href={"https://www.instagram.com/ardpeiris"}/>
                </div>
                <div className={'text-xs'}>Asia/Colombo</div>
            </div>
        </div>
    );
}
