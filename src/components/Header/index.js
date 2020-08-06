import React from "react";
import "./style.css";

const Header = () => {
  const img =
    "https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABe_zvD8XuObbSmtilocAfqrZck14O7O_LKxXx2Rb1wtzgWoPaOtTGzMqrckixb7OFeMQWzY5QXuch4NQxcEdlaRlRewEnYg9XYhA.png?r=295";
  return (
    <header className="img-container">
      <img src={img} alt="imagen" />
    </header>
  );
};

export default Header;
