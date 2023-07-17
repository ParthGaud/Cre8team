import { UserDetails } from "@/types"
import { db } from "@/utils/firebase"
import { doc, getDoc } from "firebase/firestore"

const getUserDetailsWithId = async (id?: string) => {
    if(!id){
        return null
    }
    const docRef = doc(db, 'users', id)
    const document = await getDoc(docRef)
    if(document.exists()){
        const user = document.data() as UserDetails
        user['id'] = document.id
        return user
    }
    else{
        return null
    }
}
export default getUserDetailsWithId