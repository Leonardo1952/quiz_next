import styles from '../styles/enunciado.module.css'

interface EnunciadoProps {
    texto: string
}

export default function Enunciado(props: EnunciadoProps){
    return (
        <div className={styles.enunciado}> 
            <div className={styles.texto}>{props.texto}</div>
        </div>
    )
}