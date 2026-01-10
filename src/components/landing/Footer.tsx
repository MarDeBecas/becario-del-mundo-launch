const Footer = () => {
  return (
    <footer className="py-8 bg-foreground">
      <div className="section-container text-center">
        <p className="text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} Mar de Becas. Todos los derechos reservados.
        </p>
        <p className="text-primary-foreground/40 text-xs mt-2">
          Hecho con ❤️ para futuros becarios del mundo
        </p>
      </div>
    </footer>
  );
};

export default Footer;
