import styles from './Footer.module.css';

export default function Footer(){
    const anoAtual = new Date().getFullYear();

    return (
        
        <footer className={styles.footer}>
        <p>
            &copy; {anoAtual} Instituto Federal da Paraiba (IFPB).
            Todos os direitos reservados. 
            <br />Desenvolvido para fins didáticos
            por Ana Clara Ramos.        
        </p>
        </footer>
    )
}
