import {FC} from "react";
import Image, {StaticImageData} from "next/image";

interface CardProps {
    imageUrl: string | StaticImageData
    content: string[]
}

export const Card: FC<CardProps> = ({imageUrl, content}) => {
    return (
        <div className={'flex items-center gap-8 border w-[317px] p-4 rounded-[10px] border-[#4F4F4F]'}>
            <Image
                width={61}
                height={61}
                src={imageUrl}
                alt={''}
                className={'rounded-full'}
            />
            <div className={'flex flex-col'}>
                {content.map((line, index) => (
                    <div key={index} className={'text-[10px]'}>{line}</div>
                ))}
            </div>
        </div>
    )
}