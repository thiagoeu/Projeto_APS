import React from "react";

const Header = () => {
  return (
    <header className="flex h-25 items-center justify-between bg-green-500 p-4 text-white shadow">
      <div>logo</div>
      <nav className=" ">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Cardapio</li>
          <li>Contato</li>
          <li>Reservas</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
