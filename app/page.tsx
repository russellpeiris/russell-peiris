import {Card, SocialButton} from "@/app/ui";
import {GithubLogo, LinkedinLogo, InstagramLogo} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import profilePic from '../public/profile.jpg'
import lseg from '../public/lseg.svg'
import bl from '../public/bl.png'
import sliit from '../public/sliit.svg'
import sysco from '../public/sysco.jpg'
import msc from '../public/msc.svg'

export default function Home() {
    return (
        <>
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
                    <div className={'text-[#A0A0A0] text-sm md:text-[20px]'}>Site Reliability Engineer</div>
                    <div className={'flex gap-4'}>
                        <SocialButton icon={<GithubLogo size={'16px'}/>} href={"https://github.com/russellpeiris"}/>
                        <SocialButton icon={<LinkedinLogo size={'16px'}/>} href={"https://www.linkedin.com/in/ardpeiris/"}/>
                        <SocialButton icon={<InstagramLogo size={'16px'}/>} href={"https://www.instagram.com/ardpeiris"}/>
                    </div>
                </div>
            </div>

            <div className={'flex justify-center items-start gap-4 pt-8 flex-col md:flex-row'}>
               <div className={'flex flex-col gap-4'}>
                   <div className={'text-xs'}>Experience</div>
                   <Card imageUrl={sysco} content={['Intern Site Reliability Engineer', 'Sysco LABS Sri Lanka', 'April 2025 - Present']}/>
                   <Card imageUrl={lseg} content={['Intern Software Engineer', 'LSEG Technology', 'July 2024 - January 2025']}/>
                   <Card imageUrl={bl} content={['Intern Software Engineer', 'BetaLaunch', 'April 2023 - April 2024']}/>
               </div>
                <div className={'flex flex-col gap-4'}>
                    <div className={'text-xs'}>Education</div>
                    <Card imageUrl={sliit} content={['BSc (Hons) in IT Specializing', 'in Software Engineering', 'SLIIT', 'July 2021 - July 2025']}/>
                    <Card imageUrl={msc} content={['GCE Advancel Level', 'Mathematics Stream', 'Maris Stella College','2018 - 2020']}/>
                </div>
              </div>
        {/*    last updated */}
            <div className={'text-[10px] text-center text-[#A0A0A0] pt-8'}>
                Last updated: 2025-10-05
            </div>
        </>
    );
}
