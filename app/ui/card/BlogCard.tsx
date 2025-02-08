import Image from "next/image";
import Link from "next/link";
import {FC} from "react";

interface BlogCardProps {
    imageUrl: string
    title: string
    publishedAt: string
    link: string
}

export const BlogCard: FC<BlogCardProps> = ({
                                                imageUrl,
                                                title,
                                                publishedAt,
                                                link
                                            }) => {
    return (
        <div className="flex flex-col items-center gap-4 border w-[317px] m:w-[408px] p-4 rounded-[10px] border-[#4F4F4F]">
            <div className="h-[200px] relative w-full">
                <Image
                    src={imageUrl}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className="flex flex-col gap-2">
                <Link href={link}
                      target={'_blank'}
                      rel={'noopener noreferrer'}>
                    <div
                        className="text-[12px]
                        cursor-pointer
                        transition-all duration-200
                        ease-in-out
                        hover:text-[#A0A0A0]
                        line-clamp-2 overflow-hidden text-ellipsis">
                        {title}
                    </div>

                </Link>
                <div className="text-[10px] font-extralight">{publishedAt}</div>
            </div>
        </div>

    )
}