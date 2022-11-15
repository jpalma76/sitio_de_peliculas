import styles from './CardPelicula.module.css';

export function CardPelicula({movie}) {
    return (
    <li className={styles.movieCard}>
        <a href={movie.url}>
        <img src={movie.imagen} alt={movie.title}
        width={230} 
        height={330} 
        className={styles.movieImage} />
        <div>{movie.title}</div>
        </a>
    </li>
    ); 
}
