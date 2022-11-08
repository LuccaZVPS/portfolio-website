import styled from 'styled-components';

export const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
h2{
    margin-top: 30px;
}


.content{
    color: ${({theme}) => theme.colors.txt2};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 80px;
    width: 100%;
    align-items: center;
    
    h3{
        font-size: 1.6rem;
        margin-top: 60px;
        margin-bottom: -30px;
    }
    .imgs-tech{
        div{
            width: 150px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
            p{
                font-weight: bold;
                font-size: 0.9rem;
            }
            img{
            width:60px;
            height: 60px;
            border-radius: 8px;
        }
        }
        display: flex;
        justify-content: center;

    }
}

.visible-skills{
    animation: hideElement 1.5s forwards;

}
.hidden-about{
    opacity: 0;
}
.front{
    display: flex;
    width: calc(150px * 7);
    position: relative;
    height: auto;
   overflow-y: visible;
   overflow-x: hidden;
   justify-content: center;
   height: 100px;
    .imgs-tech{
        display: flex;
        position: absolute;
    }
}
.back{
    

    display: flex;
    width: calc(150px * 5);
    position: relative;
    height: 100px;
   overflow-y: visible;
   overflow-x: hidden;
    .imgs-tech{
        display: flex;
        position: absolute;
    }
}


@media (max-width:1900px ) {
    .content{
        h3{
            font-size: 1.25rem;
        }
    }
    .front{
        width: calc(120px * 7);
        .imgs-tech{
            div{
                img{
                    width: 55px;
                   
                }
                p{
                        font-size: 0.75rem;
                    }
                width: 120px;
            }
    } 
    }

    .back{
        width: calc(120px * 5);
        .imgs-tech{
            
            div{
                img{
                    width: 75px;
                    
                }
                p{
                        font-size: 0.75rem;
                    }
                width: 120px;
            }
    } 
    }
}


@media (max-width:1150px ) {
    .content{
        gap: 50px;
        h3{
            font-size: 1.1rem;
        }
    }
    .front{
        width: calc(70px * 7);
        display: flex;
        .imgs-tech{
            div{
                img{
                    width: 40px;
                    height: 40px;
                }
               
                width: 70px;
            }
    } 
    }

    .back{
        width: calc(70px * 5);
        .imgs-tech{
            
            div{
                img{
                    width: 40px;
                    height: 40px;
                }
               
                width: 70px;
            }
    } 
    }
}






























`;
