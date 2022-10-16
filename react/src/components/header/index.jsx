import React , { useState , useEffect } from 'react';

import { Link , NavLink } from 'react-router-dom';
import menus from '../../pages/menu';

import './styles.scss';
// import logo from '../../assets/images/logo/logo.png'
import logo from '../../assets/images/bg/exploder.png'
import Button from '../button';



const Header = () => {

    const [scroll, setScroll] = useState(false);
        useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 300);
        });
        return () => {
            setScroll({});
        }
    }, []);

    const [menuActive, setMenuActive] = useState(null);

    const handleMenuActive = () => {
        setMenuActive(!menuActive);
      };

    
    const [activeIndex, setActiveIndex] = useState(null);
    const handleDropdown = index => {
        setActiveIndex(index); 
    };

    return (
        <header id="header_main" className={`header ${scroll ? 'is-fixed' : ''}`}>
            <div className="container">
                <div id="site-header-inner">
                    <div className="header__logo">
                        <NavLink to="/" className={'d-flex align-items-center'}>
                            <img src={logo} alt="EXPLODER nav log" />
                            <h5 className='mb-0 ms-0 ms-sm-1'>EXPLODER</h5>
                        </NavLink>
                    </div>
                    <nav id="main-nav" className={`main-nav ${menuActive ? 'active' : ''}`} >
                        <ul id="menu-primary-menu" className="menu">

                            {
                                menus.map((data,idx) => (
                                    <li key={idx} onClick={()=> handleDropdown(idx)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === idx ? 'active' : ''}`} 
                                    
                                    >
                                        <Link to={data.links}>{data.name}</Link>
                                        {
                                            data.namesub &&
                                            <ul className="sub-menu">
                                                {
                                                    data.namesub.map((submenu) => (
                                                        <li key={submenu.id} className="menu-item"><NavLink to={submenu.links}>{submenu.sub}</NavLink></li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                        
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Button title='Contant' path='/contact' />

                    <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}><span></span></div>
                </div>
            </div>
        </header>
    );
}

export default Header;