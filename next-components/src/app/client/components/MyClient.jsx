'use client'

export const MyClient = (props) => {

    return <div>
        <h1>Client Component</h1>
        {/* Render server component here as prop so the server component never looses
        server rendering */}
        {props.children}
    </div>
}