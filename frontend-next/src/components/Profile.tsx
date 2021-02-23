import style from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={style.profileContainer}>
            <img src="https://www.github.com/IgorSasaki.png" alt="Igor Sasaki" />

            <div>
                <strong>Igor Sasaki</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                    </p>
            </div>
        </div>
    )
}