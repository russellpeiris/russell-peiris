import {BlogCard} from "@/app/ui";
import React from 'react'

const Articles = () => {
    return (
        <div className={'flex flex-col gap-4 items-center'}>
            <BlogCard imageUrl={'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*u7LqzgsaXxNMtetslC09kA.png'}
                      title={'Breaking Encapsulation: How Mutable Objects Can Compromise Your Code'}
                      publishedAt={'Jan 13, 2025'}
                      link={'https://medium.com/@ardpeiris/breaking-encapsulation-how-mutable-objects-can-compromise-your-code-898b2a8a3f05'}

            />
            <BlogCard imageUrl={'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*kHt9DY5YUddP8n4d3pjkVg.png'}
                      title={'Optimizing a React Component with React.memo and useMemo()'} publishedAt={'Feb 5, 2025'}
                      link={'https://medium.com/@ardpeiris/optmizing-a-react-component-with-react-memo-and-usememo-4bf639170ee8'}/>
        </div>
    )
}

export default Articles