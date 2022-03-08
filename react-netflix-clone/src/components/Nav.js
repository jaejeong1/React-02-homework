import React, { useState, useEffect } from "react";
import "./Nav.css"

export default function Nav() {
    const [show, setShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll", () => {});
        }
    }, []);

  return (
  <nav className={`nav ${show && "nav__black"}`}>
      <img 
        alt='Netflix logo'
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        className='nav__logo'
        onClick={() => window.location.reload()}
      />
      <img 
        alt="User logged"
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRKdcrAfU_hEiJ7UChBDhpxhvtWHUm-uAzCrLracJu0yeIv9Nb-B-3j1XpgZHTniZpRbKiUxCzEDdHpTiboDhcLJagg.webp?r=29e"
        className="nav__avatar"
      />
  </nav>);
}