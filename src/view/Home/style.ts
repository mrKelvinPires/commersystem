import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    font-family: 'Roboto', sans-serif;
    background-color: #d5d6d196;
    width: 95%;
    margin: auto;

    .menu-div-n1{
        text-align: center;
            
        .menu-ul{
            list-style-type: none;
            display: inline-flex;
            text-align: center;

            .menu-li{
                width: 8.5rem;
                height: 1.7rem;
                background: #ff0823;
                border-radius: 1rem;
                margin: 1.7rem 1rem;
                font-size: 20px;

                .menu-a{
                    text-decoration: none;
                    color: white;

                    :hover{
                        color: black;
                    }
                }
            }
        }
    }

    #button-entrar{
        color: red;
        background: white;
    }
    .section-product {
        background: #d5d6d196;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .product-content{
            display: grid;
            text-align: center;
            height: 300px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
            margin: 10px;
        }
    }
    
    .container-form{
        text-align: center;

        .span-name{
            color: #314584;
        }

        h4{
            background: #ff7171;
            color: #000000;
            margin: 0 0 1rem 0;
        }    

        .form-control{
            width: 30%;
            border-radius: 10px;
            border: 0 auto;
            margin: 0 0 .5rem 0;

        }

        .msg-vendedor{
            width: 20%;
            height: 70px;
            border-radius: 10px;
        }
    }

    footer {
        margin: 3rem 0 0 0;
        background-color: #314584;
        color: #ff3946;
    }
    
    footer h6 {
        text-align: center;
        font-size: 20px;
    }
`