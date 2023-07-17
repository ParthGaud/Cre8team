import Container from "@/components/Container"
import { Applicant, Project } from "@/types"
import React from "react"
import ApplicantList from '@/components/ApplicantList'

interface ApplicantClientProps{
    applicants: Applicant[] | null
    project: Project | null
}

const ApplicantClientProps: React.FC<ApplicantClientProps> = ({applicants, project}) => {
    if(applicants == null || applicants.length === 0){
        return (
            <div>
                No applicants
            </div>
        )
    }
    return (
        <Container>
            <div className="flex items-center justify-center h-screen">
                <div className='min-h-fit w-[80vw] md:w-[60vw] xl:w-[50vw] bg-blue-200 flex flex-col gap-y-3 p-4 md:p-8 xl:p-10 rounded-2xl'>
                    <h1 className="font-semibold text-3xl">
                        Applicant List
                    </h1>
                    <div className="font-semibold text-xl text-neutral-900">
                        {project?.title}
                    </div>
                    <div>
                        {applicants.map((applicant) => (
                            <ApplicantList key={applicant.id} details={applicant} />
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default ApplicantClientProps