import style from '../styles/components/CompletedChallenge.module.css';

export function CompletedChallenge(){
    return(
        <div className={style.completedChallengeContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    )
}