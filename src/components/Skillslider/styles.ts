import styled from "styled-components";
interface props{
    length:number
}
export const Container = styled.div<props>`
display: flex;
flex-direction: column;
gap: 60px;
.front{
    display: flex;
    width: calc(150px * ${({length}) => length});
    height: auto;
   overflow-x: hidden;
   height: 100px;
   position: relative;
}

   
    .imgs-tech{
        display: flex;
        position: absolute;
    }
 
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


.visible-skills{
    animation: hideElement 1.5s forwards;

}
.hidden-about{
    opacity: 0;
}
    




@media (max-width:1900px ) {
    h3{
        font-size:1.3rem;
    }
    .front{
        width: calc(120px * ${({length}) => length});
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

    
}


@media (max-width:1150px ) {
    h3{
        font-size: 1.15rem;
    }
    .front{
        width: calc(90px * 7);
        display: flex;
        .imgs-tech{
            div{
                img{
                    width: 40px;
                    height: 40px;
                }
               
                width: 90px;
            }
    } 
    }

   
}

@media (max-width:750px ) {
    h3{
        font-size: 1rem;
    }
   
    .front{
        width: calc(90px * 7);
        display: flex;
        .imgs-tech{
            div{
                p{
                        font-size: 0.7rem;

                    }
                img{
                    width: 35px;
                    height: 35px;
                  
                }
               
                width: 90px;
            }
    } 
    }
   
}





























`;
