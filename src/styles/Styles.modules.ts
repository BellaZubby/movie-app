import styled from "styled-components"
/*
 font-family: "Shadows Into Light", cursive;
 font-family: "Acme", sans-serif;
 font-family: "Roboto", sans-serif;
 font-family: "Agdasima", sans-serif;
*/
export const NavbarWrapper = styled.div`

.logo {
    color: #fff;
    font-size: 3rem;
    letter-spacing: 2px;
    background: linear-gradient(to right, #eaff00, #f8d4d4);
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    font-family: "Shadows Into Light", cursive;
}
.navLinks, .loginBtn {
    margin-left: auto;
}
.navLinks a.active {
    border-radius: 10px;
    border-top: 2px solid red;
    border-bottom: 2px solid red;
    color: #fff;
    padding: 10px 0;

}

.links {
    font-family: "Acme", sans-serif;
    font-size: 15px;
    color:#ffffe4;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.05);
        color: #eaff00;
    }
}

@media (max-width:1060px) {
    .logo {
        font-size: 1.8rem;
    }

    .links, .loginBtn  {
        font-size: 12px;
    }
}
`;

// FOR MOVIEWRAPPER
export const MovieShowsWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    margin-top: 6rem;
    padding: 10px;
    box-shadow: 0 5px 5px -5px rgba(0,0,0,0.5);
    
    .loadingOverlay{
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height: 100vh;
        background-color: rgba(3, 37, 65, 0.4);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fff;
        z-index: 999;

        >p{
            font-size: 2rem;
            margin-top: 1rem;
            font-family: 'Acme', sans-serif;
            letter-spacing: 2px;
        }
    }

    .movieHeading {
        width: 100%;
        >h1 {
            margin-bottom: 1.5rem;
            font-weight: 600;
            font-size: 1.5rem;
            margin-left: 3.5rem;
            font-family: "Agdasima", sans-serif;
        }
    }

    .movieCard {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;

        .movie {
            display: flex;
            justify-content: center;
            align-item: center;
            flex-direction: column;
            cursor: pointer;
            transition: all .5s ease-in-out;
            margin-bottom: 3rem;

            .movieImage {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                cursor: pointer;
                
                >img {
                    border-radius: 10px;
                    border-bottom-right-radius: 25px;
                    box-shadow: 1px 1px 10px 1px #000;
                    padding: 5px;
                    // height: 200px;
                }

                >span {
                    border: none;
                    height: 35px;
                    width: 35px;
                    border-radius: 360px;
                    background-color: #f76429;
                    display: flex;
                    justify-content-center;
                    align-items: center;
                    align-self: center;
                    color: #fff;
                    padding: 5px;
                    font-family: "Agdasima", sans-serif;
                    font-size: 15px;
                    position: relative;
                    bottom: 20px;
                    transition: scale
                }
            }
            &:hover {
                transform: scale(1.04);
            }
            .movieInfo {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 0;
                position: relative;
                bottom: 10px;

                >h4 {
                    margin-bottom: 0;
                    width: 230px;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-weight: 600;
                    font-size: 14px;
                }

                >p {
                    margin: 7px 0;
                    color: grey;
                    border-bottom: 1px solid grey;

                }
            }
        }
        .buttons {
            text-align: center;
            border: none;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            width: 90%;
            margin: 10px;

            >p {
                font-family: "Agdasima", sans-serif; 
            }
            .btnPrev,
            .btnNext {
                border: none;
                outline: none;
                color: #fff;
                font-size: 18px;
                font-weight: bold;
                background-color: #f76429;
                font-family: "Acme", sans-serif;
                border-radius: 5px;
                padding: 0 3px;

                &:hover {
                    background-color: #000;
                    cursor: pointer;
                }
            }

        }
    }

    @media (max-width: 800px) {
       .loadingOverlay {
        >p {
            font-size: 1rem;
            letter-spacing: 1.5px;
        }
       }
        }
`

// coverPage
export const Cover = styled.div`
    text-align: center;
    width: 80%;
    margin: 5.5rem auto 0;
    position: relative;
    text-transform: capitalize;

    .coverText {
        position: absolute;
        color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 30%;
        text-shadow: 1px 1px 3px black;
        letter-spacing: 1px;
        line-height: 0.7px;

        >h1 {
            font-size: 3rem;
            font-weight: bolder;
            font-family: "Roboto", sans-serif;
            margin-bottom: 18px;

        }

        >p {
            font-size: 20px;
            margin-top: 18px;
        }

        >em {
            font-size: 15px;
            margin-top: 10px;
        }
    }
    
    &::before {
        content: "";
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:340px;
        background-color:rgba(3, 37, 65, 0.7);
        border-bottom-left-radius: 240px;
        border-bottom-right-radius: 240px;
    }

   
   >img {
        width: 100%;
        height: 340px;
        object-fit: cover;
        border-bottom-left-radius: 240px;
        border-bottom-right-radius: 240px;
   }

   @media (max-width: 1020px) {
    .coverText {
        letter-spacing: 1px;
        line-height: 0.5;
        
        >h1 {
            font-size: 2.2rem;
        }
        >p,
        em {
            font-size: 15px;
        }
    }
    &::before,
    >img {
        height: 240px;
    }
   }

   @media (max-width: 800px) {
    width: 100%;
    margin: 4rem auto 0;
    .coverText {
        line-height: 1;
        
        >h1 {
            font-size: 1.5rem;
        }
        
        >p,
        em {
            font-size: 10px;
        }
    }

    &::before,
    >img {
        height: 240px;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
   }

`

export const SearchBar = styled.div`
   >input, >button {
    outline:none;
    border: none;
    border-radius: 20px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
   }

   >input {
    height: 45px;
    width: 70%;
    box-shadow: 1px 1px 6px 2px grey;
    padding: 10px;
    font-size: 18px;
    &::placeholder {
        font-size: 14px;
        text-align: center;
    }
   }
   >button {
    padding: 0 25px;
    left:80.2%;
    font-size: 15px;
    background: linear-gradient(90deg, rgba(15, 255, 184, 1) 33%, rgba(7, 110, 112, 1)100%);
    font-weight: bolder;
    height: 45px;
    cursor: pointer;

   }
   @media (max-width: 1020px) {
    >input {
        width: 70%;
        height: 45px;
      
    }
    
    >button {
        left:80.2%;
        height: 45px;
    }
   }

   @media (max-width: 800px) {
    >input {
        width: 70%;
        height: 30px;
        box-shadow: none;
        border: 0.5px solid grey;
        left: 45%;
        &::placeholder {
            font-size: 10px;
           
        }
    }
    
    >button {
        height: 30px;
        padding: 0 15px;
        border-right: 0.5px solid grey;
        font-size: 10px;
    }
    }

`

;