import './header.css';
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div className = "divHeader">
            <nav className="head">

                <div className="logo">
                    <Link to="/home">HOME</Link>
                </div>

                <div className="navbar">
                    <Link to="/carrito">Carrito</Link>
                    <Link to="/productos">Productos</Link>
                    <Link to="/num_contacto">Contacto</Link>
                    <Link to="/iniciar_sesion">Iniciar Sesion</Link>
                </div>

            </nav>
            
            <header className="content header">

                <h2 className="title">Inicio</h2>

                <p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    SOMOS UN EMPRENDIMIENTO DE ROPA QUE SE ADAPTA A LAS NUEVAS MODAS
                </p>


                <div className="btn-home">

                    <Link to="/IG" className="btn">IG </Link>
                    
                    <Link to="/TW" className="btn">TW </Link>

                </div>

            </header>
            

            <section className="content about">


            </section>

            <section className="content price">

            </section>
            
        </div>
    )
}