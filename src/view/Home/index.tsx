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

    /*
    

//////\\\\\\\
    <script>
        class Produto {
            constructor(nome, valor) {
                this.nome = nome;
                this.valor = valor;
            }
        }

        var arroz = new Produto("Arroz", 5);
        var feijao = new Produto("Feijão", 8);
        var farinha = new Produto("Farinha", 10);
        var macarrao = new Produto("Macarrão", 4.50);
        var sal = new Produto("Sal", 3.20);
        var produtos = [arroz, feijao, farinha, macarrao, sal];

        class Venda {
            constructor() {
                this.produtos = [];
            }
            
            adicionarProduto(produto) {
                this.produtos.push(produto);
            }
            
            totalVenda() {
                this.soma = 0;
                this.produtos.forEach((produto) => {
                    this.soma = this.soma + produto.valor;
                });
                
                return this.soma;
            }
        }

        var venda = new Venda();

        function adicionar() {
            var codigo = document.querySelector("#codigo").value;
            venda.adicionarProduto(produtos[codigo]);
            document.querySelector("#codigo").value = "";
            alert("Produto adicionado com sucesso!");
        }

        function finalizarVenda() {
            document.querySelector("#total").innerHTML = "O total da sua venda é: " + venda.totalVenda();
        }

    </script>
    \\\\\\\\///////////
    function EnviaDados() {
    let nome = document.querySelector("#nome").value;
    let email = document.querySelector("#email").value;
    let recebeDados = { nome: nome, email: email };

    dadosCliente = JSON.stringify(recebeDados);

    localStorage.setItem("dadosCliente", dadosCliente);

    alert(`Obrigado ${nome}! Recebemos seus dados.`)

    window.location.href = "https://mrkelvinpires.github.io/loja-landing-page-bf/index.html";
}

function AddCar() {
    let buttoncar = document.querySelector('#buttoncar')
    alert("Adicionado ao carrinho com sucesso!")
}
    */
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        api.get("").then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    // Array.prototype.push.apply(vegetais, maisVegetais);
        // let produtosCar = [valor, index];
        // let dadosClienteEntrega = [];
        // produtosCar.push(index);
        // console.log(produtosCar);

    const handleCart = (index: number) => {
        const productStore = JSON.stringify(data[index]);
        localStorage.setItem(`@Produto-${index}`, productStore)
    }

    /*
    nome-completo
    email
    endereco
    msg-vendedor

        const dadosClienteEntrega = (index: string) => {
        let dados = [].document.querySelector("#nome-completo").value;
        let email = document.querySelector("#email").value;
        let endereco: string = document.querySelector("#endereco").value;
        let msg-vendedor = document.querySelector("#msg-vendedor").value;
        let dadosCliente = JSON.stringify(data[index]);
        localStorage.setItem(`@Produto-${index}`, dadosCliente)
    }

    */


    return (
        <Container>
            <nav className="menus-n1" id="menus-n1">
                <div className="container-menu">
                    <div className="menu-div-n1" id="menu-div-n1">
                        <ul className="menu-ul" id="menu-ul">
                            
                            <img width="150px" src="commesystem.png" />
                    
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
                            <button className="button-entrar menu-li" id="button-entrar">..:: Entrar ::..<i className="button-i"></i></button>
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
                        <h6>{prod.price}</h6>
                        <button className="button-add-car-product" id="button-add-car-product" onClick={() => handleCart(index)}>ADICIONAR AO CARRINHO</button>
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
                                <input type="text" className="form-control" id="nome-completo" placeholder="Seu nome"/>
                            </div>

                            <div className="container-form-input">
                                <span className="span-name">*Email:</span><br/>
                                <input type="text" className="form-control" id="email" placeholder="Seu Email"/>
                            </div>

                            <div className="container-form-input" id="container-form-input">
                                <span className="span-name">*Endereço:</span><br/>
                                <input type="text" className="form-control" id="endereco" placeholder="Endereço completo"/>
                            </div>
                        </div>
                        <div className="div-row">
                            <div className="div-cont-textarea">
                            <span className="span-name" id="mensagem-vendedor">Mensagem ao vendedor:</span><br/>
                            <textarea name="" itemType="text" id="msg-vendedor" className="msg-vendedor" placeholder="Mensagem ao vendedor."></textarea>
                            </div>
                        </div>
                    </form>

                    <div className="div-end-sale">
                       <button className="button-end-seller" id="end-sale" >FINALIZAR COMPRA</button>
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