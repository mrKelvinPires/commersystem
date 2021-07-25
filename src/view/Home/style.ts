import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    font-family: 'Roboto', sans-serif;
    background-color: #d5d6d196;
    width: 95%;
    margin: 1px auto;

    .menu-ul{
        list-style-type: none;
        display: inline-flex;
        
        .menu-li{
            width: 8.5rem;

            background: #ff0823;
            border-radius: 1rem;
            text-align: center;
            margin: 1rem 1rem;
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
    #button-entrar{
        color: red;
        background: white;
    }
    .section-product {
        height: 100vh;
        width: 100%;
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
        margin-top: 0 auto; 
    
        .span-name{
            color: #314584;
        }

        h4{
            background: #ff7171;
            color: #000000;
        }    

        .form-control{
            width: 30%;
            border-radius: 10px;
        }

        .msg-vendedor{
            width: 20%;
            height: 70px;
            border-radius: 10px;
        }
    }

    footer {
        min-height: 50px;
        background-color: #314584;
        padding: 10px;
        color: #fff;
    }
    
    footer h5 {
        text-align: center;
        font-size: 25px;
    }
    
    footer h1 {
        color: #ff3946;
        text-align: center;
        font-weight: bold;
        padding-top: 3px;
    }

`