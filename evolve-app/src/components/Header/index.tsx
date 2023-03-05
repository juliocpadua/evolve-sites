import { HeaderConteiner, MenuMobile } from "./styles";
import logoHeader from "../../assets/logoHeader.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [menuServices, setMenuServices] = useState(false);

  return (
    <>
      <HeaderConteiner>
        <div onClick={() => setOpenMenu(!openMenu)} className="menuArea">
          <HiMenuAlt1 color="#ffffff" />
        </div>
        <img src={logoHeader} />
        <div className="desk__meunu">
          <p>Home</p>
          <section
            onMouseEnter={() => setMenuServices(true)}
            onMouseLeave={() => setMenuServices(false)}
          >
            <p>
              Serviços <MdOutlineKeyboardArrowDown />
            </p>
            {menuServices && (
              <div className="submenu-service">
                <span>Sites completos</span>
                <span>Participação em projetos</span>
              </div>
            )}
          </section>
          <p>FAQ</p>
          <p>Contato</p>
          <p>Sobre nós</p>
        </div>
      </HeaderConteiner>
      {openMenu && (
        <MenuMobile>
          <p>Início</p>
          <p>
            Serviços <MdOutlineKeyboardArrowDown />
          </p>
          <p>FAQ</p>
          <p>Contato</p>
          <p>Sobre nós</p>
        </MenuMobile>
      )}
    </>
  );
};

export default Header;
