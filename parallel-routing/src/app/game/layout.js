export default function GameLayout(props) {
    return <div id="gameslayout">
        {/* Games Page Content */}
        {props.children}
        {/* Team Page Content */}
        {props.team}
        {/* Players Page content */}
        {props.player}
    </div>
}