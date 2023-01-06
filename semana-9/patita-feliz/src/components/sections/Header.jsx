const Header = ({ company }) => {
  const { name, slogan } = company;
  return (
    <header className="py-3">
      <div className="container">
        <h1 className="text-info text-center">{name}</h1>
        <h2 className="text-primary fs-5 m-0 text-center">{slogan}</h2>
      </div>
    </header>
  );
};

export default Header;
