import styled from 'styled-components';

export const Container = styled.section`
margin-top: 100px;
margin-bottom: 300px;
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


.front{
    display: flex;
    width: calc(150px * 7);
    position: relative;
    height: 100px;
   overflow-y: visible;
   overflow-x: hidden;
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

@media (max-width:1450px ) {
    .front{
        width: calc(100px * 7);
        .imgs-tech{
            
            div{
                img{
                    width: 50px;
                    p{
                        font-size: 0.85rem;
                    }
                }
                width: 100px;
            }
    } 
    }

    .back{
        width: calc(100px * 5);
        .imgs-tech{
            
            div{
                img{
                    width: 50px;
                    p{
                        font-size: 0.85rem;
                    }
                }
                width: 100px;
            }
    } 
    }
}
`;
