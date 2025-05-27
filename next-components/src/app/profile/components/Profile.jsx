//import alises syntax from Next.js
import { PROFILES } from "@/app/mock-data/profiles";
// import { PROFILES } from "../../mock-data/profiles";
// import ProfileList from "./ProfileList";
import ProfileList from '@/app/profile/components/ProfileList'

export function Profile() {
    return <>
        <ProfileList data={PROFILES} />
    </>
}