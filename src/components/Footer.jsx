import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Desenvolvido com 💛 por{" "}
        <a
          href="https://www.linkedin.com/in/jumara-souza-pimenta/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jumara Pimenta
        </a>
      </p>
      <p className="footer-license">
        © {new Date().getFullYear()} Minha Jornada Menstrual — Uso educativo. Todos os direitos reservados.
      </p>
    </footer>
  );
}
