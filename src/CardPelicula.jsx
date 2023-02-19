import styles from './CardPelicula.module.css';

export function CardPelicula({movie}) {
    return (
    <li className={styles.movieCard}>
        <a href={movie.url}>
        <img src={movie.imagen} alt={movie.title}
        width={155} 
        height={230} 
        className={styles.movieImage} />
        <div>{movie.title}</div>
        </a>
    </li>
    ); 
}
