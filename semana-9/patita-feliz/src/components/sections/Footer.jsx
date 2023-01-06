const Footer = ({ credits }) => {
  const { year, author } = credits;
  return (
    <footer className="py-3 m-auto">
      <div className="container">
        <h2 className="text-light text-center fs-6 m-0">
          🦄 Copyright &copy; {year} {author}. Todos los Derechos Reservados 🦄
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
