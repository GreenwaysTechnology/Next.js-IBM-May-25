import styles from '../profile.module.css'

export default function Profile({ name, bio, imageUrl }) {
    console.log(styles)
    return <div className={styles.profile}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.bio}>{bio}</p>
    </div>
}