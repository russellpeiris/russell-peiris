import {ProjectCard} from "@/app/ui";
import React from 'react'

const Projects = () => {
    return (
        <div className={'flex flex-col gap-4 items-center'}>
            <ProjectCard
                imageUrl={''}
                projectName={'Cuddles'}
                description={'Cuddles is an android app developed focusing pregnant mothers and their doctors. The app helps a mother to stay connected with her doctor or a hospital. The app provides daily insights regarding the mother to the doctor.'}
                techStack={['reactjs', 'firebase']}
                link={'https://github.com/russellpeiris/Cuddles'}/>

            <ProjectCard
                imageUrl={''}
                projectName={'RAG & Prompt Engineering'}
                description={'This is a private Repository. A RAG Application powered by Prompt Engineering focused on education. LangchainJs has been utilized for RAG operations together with OpenAI API'}
                techStack={['typescript', 'openai', 'nodejs', 'docker', 'azure']}
                link={'https://github.com/russellpeiris/rag-chatbot'}/>
        </div>
    )
}

export default Projects