'use client'

import Button from "@/components/Button"
import { Project } from "@/types"
import Container from "@/components/Container"
import React from "react"

interface DashboardClientProps{
    projects?: Project[]
}

const DashboardClient: React.FC<DashboardClientProps> = ({projects}) => {
    return (
        <Container>
            dashboard
        </Container>
    )
}
export default DashboardClient