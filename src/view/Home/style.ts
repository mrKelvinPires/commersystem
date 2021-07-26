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

    #button-add-car-product{
        border-radius: 1rem;
        width: 8.5rem;
        font-size: 10px;
        margin: 0 auto;
        border: 0;
        color: #314584;
        background: #ff6d6d;
        font-weight: 600;

        :hover{
            color: #ff6d6d;
            background: #314584;
        }
    }

    #end-sale{
        border-radius: 1rem;
        width: 11rem;
        font-size: 15px;
        margin: 5px auto;
        color: #314584;
        background: #ff6d6d;
        font-weight: 600;

        :hover{
            color: #ff6d6d;
            background: #314584;
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
            width: 40rem;
            height: 20px;
            border-radius: 10px;
            border: 1px solid red ;
            margin: 0 0 .5rem 0;
        }

        .msg-vendedor{
            width: 20rem;
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
    @media (max-width: 770px){
    width: 100%;

    .menu-div-n1{
            
        .menu-ul{
            list-style-type: none;
            display: flex;
            text-align: center;

            .menu-li{
                width: 4.5rem;
                height: .9rem;
                margin: 1.7rem auto;
                font-size: 10px;

                }
            }
        }
    }

    #button-add-car-product{
        border-radius: 1rem;
        width: 8.5rem;
        height: 1.2rem;
        font-size: 10px;
        font-weight: 600;

        :hover{
            color: #ff6d6d;
            background: #314584;
        }
    }

    #end-sale{
        border-radius: 1rem;
        width: 11rem;
        font-size: 15px;
        margin: 5px auto;
        color: #314584;
        background: #ff6d6d;
        font-weight: 600;

        :hover{
            color: #ff6d6d;
            background: #314584;
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
            width: 40rem;
            height: 20px;
            border-radius: 10px;
            border: 1px solid red ;
            margin: 0 0 .5rem 0;
        }

        .msg-vendedor{
            width: 20rem;
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
    }

`