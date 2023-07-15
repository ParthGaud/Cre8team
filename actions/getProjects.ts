import {db} from '@/utils/firebase'
import {collection, query, getDocs} from 'firebase/firestore'
import {Project} from '@/types'

const getProjects = async () => {
    const data : Project[] = []
    const ref = collection(db, 'projects')
    const query = await getDocs(ref)
    query.forEach((doc) => {
        const project : Project = doc.data() as Project
        project['id'] = doc.id
        data.push(project as Project)
    })

    return (data as Project[]) || null
}
export default getProjects