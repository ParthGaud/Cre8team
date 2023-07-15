import getUserProjects from "@/actions/getUserProjects"
import { useContext } from "react"
import { userContext } from "../hooks/useUser"
import DashboardClient from "./DashboardClient"


const Dashboard = () => {
    let user = null

    return (
        <DashboardClient />
    )
}

export default Dashboard