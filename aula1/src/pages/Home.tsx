import "../styles/utility.css";
import "../styles/home.css";
import "../styles/header.css";
import "../styles/buttons.css";
import "../styles/main.css";
import "../styles/sobre.css";
import "../styles/noticias.css";




import HeroRectangleOne from "../assets/img/rectangleOne.png";
import HeroRectangleTwo from "../assets/img/RectangleTwo.png";


import "../styles/hero.css";


import Close from '../assets/img/close.svg';
import Menu from '../assets/img/Menu.svg';
import Logo from "../assets/img/petsatus.png";
import Gato from '../assets/img/gato.png'; 
import Vacina from '../assets/img/vacina.png'
import Tech from '../assets/img/tech.png'

import { useState } from "react";
import Button from "../components/Button";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo PetStatus" width={200} height={180}  />
                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li><a href="#">Home</a></li>
                            <li><a href="#solutions">Soluções</a></li>
                            <li><a href="#testimonials">Depoimentos</a></li>
                            <li><a href="#pricing">Preços</a></li>
                            <li><a href="#contact">Contato</a></li>
                        </ul>
                    </div>
                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg link" href="#login">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#solutions">Soluções</a></li>
                                        <li><a href="#testimonials">Depoimentos</a></li>
                                        <li><a href="#pricing">Preços</a></li>
                                        <li><a href="#contact">Contato</a></li>
                                        <li><a className="reverse-color" href="#login">Login</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retângulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retângulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">Olá</p>
                    <h1>Conectando você ao bem-estar do seu pet, a qualquer hora e em qualquer lugar.</h1>
                    <p>Com PETSTATUS, você tem tudo o que precisa para cuidar do seu pet com carinho e confiança.</p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>


            <div className="new">
                            
                                     <h2>Notícias</h2>
                            <section className="news container py-md">
                           
                                <div className="card">
                                    <img src={Vacina} alt="Vacinação de pets" />
                                    <div className="card-content">
                <h3>Vacinação Gratuita para Cães</h3>
                <p>Participe da nossa campanha de vacinação gratuita para cães durante o mês de setembro. Proteja seu amigo peludo!</p>
                <a href="#">Leia mais</a>
                                    </div>
                                </div>
                                <div className="card">
                                <img src={Gato} alt="Vacinação de pets" />
                                    <div className="card-content">
                <h3>Cuidados com a Saúde dos Gatos</h3>
                <p>Confira nossas dicas para manter a saúde dos gatos em dia, desde a alimentação até o check-up regular.</p>
                <a href="#">Leia mais</a>
                                    </div>
                                </div>
                                <div className="card">
                                    <img src={Tech} alt="Novo serviço de odontologia" />
                                    <div className="card-content">
                <h3>Novo Serviço de Odontologia</h3>
                <p>Estamos lançando um novo serviço de odontologia para pets. Agende uma consulta e cuide da saúde dental do seu animal!</p>
                <a href="#">Leia mais</a>
                                    </div>
                                </div>
                            </section>
            </div>




            <section id="about" className="container py-md">
                <h2>Sobre a Clínica</h2>
                <p>
                    No PETSTATUS, nossa missão é oferecer os melhores cuidados para seu pet. Contamos com uma equipe de profissionais altamente qualificados e apaixonados por animais, prontos para atender todas as necessidades do seu companheiro de forma personalizada e atenciosa.
                </p>
            </section>

            <section id="contact" className="container py-md">
                <h2>Contato</h2>
                <p>
                    Entre em contato conosco para saber mais sobre nossos serviços ou para agendar uma visita.
                </p>
                <p>
                    <strong>Telefone:</strong> (45) 9 9816-6820 <br />
                    <strong>Email:</strong> contato@petstatus.com.br <br />
                    <strong>Endereço:</strong> Av Brasil, 1577, Cascavel, PR
                </p>
            </section>


        </>
    );
}
