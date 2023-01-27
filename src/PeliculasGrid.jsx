import { CardPelicula } from "./CardPelicula";
import peliculas from './peliculas.json';
import styles from './PeliculasGrid.module.css';

export function PeliculasGrid() {
    return (
        <ul className={styles.moviesGrid}>
            { peliculas.map((movie) => {
                return <CardPelicula key={movie.id} movie={movie} />
            })}
        </ul>
    );
}
