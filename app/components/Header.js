import styles from "./header.module.css";

const Header = () => {
    return (
    <header className={styles.header}>
        <h2>Bazar Heleninha</h2>
        <nav>
            <ul>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#produtos">Produtos</a></li>
                <li><a href="#" id="contato">Contato</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;