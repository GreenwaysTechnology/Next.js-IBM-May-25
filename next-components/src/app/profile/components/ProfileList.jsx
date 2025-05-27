export default function ProfileList(props){

    return <ul>
          {
            props.data.map(profile=>{
                return <li key={profile.id}>
                    <span>{profile.name}</span>
                </li>
            })
          }
    </ul>
}