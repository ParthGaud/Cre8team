import getUserDetailsWithId from '@/actions/getUserDetailsWithId'
import ProfileCient from './ProfileCient'

const Profile = async ({params} : {params: {id: string}}) => {
    const userDetails = await getUserDetailsWithId(params.id)
    return (
        <ProfileCient userDetails={userDetails} />
    )
}
export default Profile