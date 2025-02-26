import Link from "next/link";
import {FC} from "react";
import StackIcon from "tech-stack-icons";
import {Link as LinkIcon} from "@phosphor-icons/react/dist/ssr";

interface ProjectCardProps {
    imageUrl?: string
    projectName: string
    description: string
    techStack: string[]
    link: string
}

export const ProjectCard: FC<ProjectCardProps> = ({
                                                      projectName,
                                                      description,
                                                      techStack,
                                                      link
                                                  }) => {
    return (
        <div className="flex items-center gap-4 border w-[317px] m:w-[408px] p-4 rounded-[10px] border-[#4F4F4F]">
            {/*<div className="relative h-full">*/}
            {/*    <Image*/}
            {/*        src={imageUrl}*/}
            {/*        alt=""*/}
            {/*        layout="fill"*/}
            {/*        objectFit="cover"*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="flex flex-col gap-2">
                <div
                    className="text-[12px]
                        flex gap-2
                        items-center
                        cursor-pointer
                        transition-all duration-200
                        ease-in-out
                        hover:text-[#A0A0A0]
                        line-clamp-2 overflow-hidden text-ellipsis">
                    {projectName}
                    <Link href={link}
                          target={'_blank'}
                          rel={'noopener noreferrer'}>

                        <LinkIcon size={12}/>
                    </Link>
                </div>
                <div className="text-[10px] font-extralight">{description}</div>
                <div className={'flex gap-2'}>
                    {
                        techStack.map((tech, index) => {
                            return (
                                <StackIcon className={'w-[20px] h-[20px]'} name={tech} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )

}