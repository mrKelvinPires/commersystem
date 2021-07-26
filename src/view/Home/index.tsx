import React, { useState, useEffect } from "react";
import { Container } from './style';
import api from '../../services/api';

interface IProduct {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {

    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get("").then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    const handleCart = (index: number) => {
        const productStore = JSON.stringify(data[index]);
        localStorage.setItem(`@Produto-${index}`, productStore)
        alert(`Adicionado ao carrinho com sucesso!`)
    }

    let endSale = (index: string) => {
        let nomeCompleto = document.getElementById("nomeCompleto");
        let email = document.getElementById("email");
        let endereco = document.getElementById("endereco");
        let msgVendedor = document.getElementById("msgVendedor");

        let dadosCliente = {
            Nome: nomeCompleto, 
            Email: email, 
            Endereco: endereco,
            Mensagem: msgVendedor
        };

        console.log(dadosCliente);

        const dadosDeEnvioCliente = JSON.stringify(dadosCliente);
        localStorage.setItem(`@Cliente`, dadosDeEnvioCliente)

        alert(`Obrigado ${nomeCompleto}! Recebemos seu pedido e vamos embalar para o envio.`)

        // window.location.href = "/";
    }

    return (
        <Container>
            <nav className="menus-n1" id="menus-n1">
                <div className="container-menu">
                    <div className="menu-div-n1" id="menu-div-n1">
                        <ul className="menu-ul" id="menu-ul">

                            <img width="150px" src="commesystem.png" alt=""/>
                    
                            <li className="menu-li">
                                <a className="menu-a" href="#">Loja</a>
                            </li>
                            <li className="menu-li">
                                <a className="menu-a" href="#">Promoções</a>
                            </li>
                            <li className="menu-li">
                                <a className="menu-a" href="#">Quem somos</a>
                            </li>
                            <li className="menu-li">
                                <a className="menu-a" href="#">Contate-nos</a>
                            </li>
                            <li className="menu-li">
                                <a className="menu-a" href="#">Trabalhe aqui</a>
                            </li>
                            <button className="button-entrar menu-li" id="button-entrar">
                                ..:: Entrar ::..
                                <i className="button-i">
                            </i></button>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="section-product" id="section-product">
                {data.map((prod, index) => (
                    <div className="product-content" key={prod.id}>
                        <img src={prod.photo} alt="iphone" width="200" height="auto" />
                        <h4>{prod.name}</h4>
                        <span>{prod.description}</span>
                        <h6>R$ {prod.price}</h6>
                            <button 
                                className="button-add-car-product" 
                                id="button-add-car-product" 
                                onClick={() => handleCart(index)}>
                                ADICIONAR AO CARRINHO
                            </button>
                    </div>
                ))}
            </section>

            <section className="container-form" id="container-form">
                <div className="container-title" id="container-title">
                    <h4>Para finalizar sua compra digite seus dados de contato e endereço para entrega abaixo:</h4>

                    <form className="form-seller" id="form-seller" action="">
                        <div className="div-row">
                            <div className="container-form-input">
                                <span className="span-name" id="nome-completo">*Nome completo:</span><br/>
                                <input type="text" className="form-control" id="nomeCompleto" placeholder="   Seu nome"/>
                            </div>

                            <div className="container-form-input">
                                <span className="span-name">*Email:</span><br/> 
                                <input type="email" className="form-control" id="email" inputMode="email" placeholder="   Seu Email"/>
                            </div>

                            <div className="container-form-input" id="container-form-input">
                                <span className="span-name">*Endereço:</span><br/>
                                <input type="text" className="form-control" id="endereco" placeholder="   Endereço completo"/>
                            </div>
                        </div>
                        <div className="div-row">
                            <div className="div-cont-textarea">
                            <span className="span-name" id="mensagem-vendedor">Mensagem ao vendedor:</span><br/>
                            <textarea name="" itemType="text" id="msgVendedor" className="msg-vendedor" 
                                placeholder="  Mensagem ao vendedor.">                
                            </textarea>
                            </div>
                        </div>
                    </form>

                    <div className="div-end-sale">
                        <button className="button-end-seller" 
                            id="end-sale" 
                           >
                            FINALIZAR COMPRA
                        </button>
                    </div>
                </div>
            </section>

            <footer>
                <h6>viniCom | ExplosionCoders</h6>
            </footer>
        </Container>
    );
}

export default Home;