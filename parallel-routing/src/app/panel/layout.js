

export default function PanelLayout(props) {
    const isAdmin = false
    return <div>
        {/* Panel Content */}
        {props.children}
        {/* Either Admin or User Panel Content */}
        {/* {isAdmin ? <AdminPanel/> : <UserPanel/>} */}
        {isAdmin ? props.AdminPanel : props.UserPanel}

    </div>
}