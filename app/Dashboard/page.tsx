import getUserProjects from "@/actions/getUserProjects"
import { useContext } from "react"
import { userContext } from "../hooks/useUser"
import DashboardClient from "./DashboardClient"
import {auth} from '@/utils/firebase'

const Dashboard = async () => {
    return (
        <DashboardClient />
    )
}

export default Dashboard