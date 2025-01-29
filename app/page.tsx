import {SocialButton} from "@/app/ui";
import {GithubLogo, LinkedinLogo, InstagramLogo} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import profilePic from '../public/profile.jpg'

export default function Home() {
    return (
        <div className={'flex justify-center gap-8'}>
            <Image width={114} height={114} src={profilePic} alt={''} className={'rounded-full'}/>
            <div className={'flex-col'}>
                <div className={'text-[28px] font-bold'}>Russell Peiris</div>
                <div className={'text-[20px] text-[#A0A0A0] pb-2'}>Software Engineer</div>
                <div className={'flex gap-4'}>
                    <SocialButton icon={<GithubLogo size={'16px'}/>} href={"https://github.com/russellpeiris"}/>
                    <SocialButton icon={<LinkedinLogo size={'16px'}/>} href={"https://www.linkedin.com/in/ardpeiris/"}/>
                    <SocialButton icon={<InstagramLogo size={'16px'}/>} href={"https://www.instagram.com/ardpeiris"}/>
                </div>
            </div>
        </div>
    );
}