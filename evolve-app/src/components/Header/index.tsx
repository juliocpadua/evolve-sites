import { HeaderConteiner, MenuMobile } from "./styles";
import logoHeader from "../../assets/logoHeader.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface IPropsHeader {
  home?: boolean;
}

const Header = ({ home }: IPropsHeader) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubMenuServices, setOpenSubMenuServices] = useState(false);
  const [menuServices, setMenuServices] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <HeaderConteiner id="header">
        <div onClick={() => setOpenMenu(!openMenu)} className="menuArea">
          <HiMenuAlt1 color="#ffffff" />
        </div>
        <img src={logoHeader} />
        <div className="desk__meunu">
          <p onClick={() => navigate("/")}>Home</p>
          {home && (
            <section
              onMouseEnter={() => setMenuServices(true)}
              onMouseLeave={() => setMenuServices(false)}
            >
              <p>
                Serviços <MdOutlineKeyboardArrowDown />
              </p>
              {menuServices && (
                <div className="submenu-service">
                  <span>
                    <a href="#c1">Sites completos</a>
                  </span>
                  <span>
                    <a href="#c2">Participação em projetos</a>
                  </span>
                </div>
              )}
            </section>
          )}

          <p>FAQ</p>
          <p>Contato</p>
          <p>Sobre nós</p>
        </div>
      </HeaderConteiner>
      {openMenu && (
        <MenuMobile>
          <p onClick={() => navigate("/")}>Home</p>
          {home && (
            <>
              <p onClick={() => setOpenSubMenuServices(!openSubMenuServices)}>
                Serviços <MdOutlineKeyboardArrowDown />
              </p>
              {openSubMenuServices && (
                <>
                  <span
                    onClick={() => {
                      setOpenSubMenuServices(!openSubMenuServices);
                      setOpenMenu(!openMenu);
                    }}
                  >
                    <a href="#c1">Sites completos</a>
                  </span>
                  <span
                    onClick={() => {
                      setOpenSubMenuServices(!openSubMenuServices);
                      setOpenMenu(!openMenu);
                    }}
                  >
                    <a href="#c2">Participação em projetos</a>
                  </span>
                </>
              )}
            </>
          )}

          <p>FAQ</p>
          <p>Contato</p>
          <p>Sobre nós</p>
        </MenuMobile>
      )}
    </>
  );
};

export default Header;
