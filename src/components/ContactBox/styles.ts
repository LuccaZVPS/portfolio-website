import styled from 'styled-components';
export const Container = styled.div`
width:100%;
height: 250px;
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: -10px;
color: ${({theme}) => theme.colors.txt};
gap: 10px;
h3{
    font-size: 1.2rem;
}
p{
    color: ${({theme}) => theme.colors.txt2};
    min-height: 40px;
}
svg{
    font-size: 2.2rem;
}
button{
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: ${({theme}) => theme.colors.txt};
    font-weight: bold;
    svg{
        font-size: 1.4rem;
        transition: 0.2s;
    }
    :hover{
        svg{
            transform: translateX(10px);
        }
    }

}


@media (max-width: 1450px) {
    h3{
        font-size: 1.1rem;
    }
    p{
        font-size: 0.9rem;
    }
    svg{
        font-size: 1.7rem;
    }
    button{ 
        font-size: 0.75rem;
        svg{
        font-size:1.3rem;
    }
}



    height: 220px;
}

@media (max-width: 1150px) {
    h3{
        font-size: 1rem;
    }
    p{
        font-size: 0.85rem;
    }
    svg{
        font-size: 1.6rem;
    }
    button svg{
        font-size:1.2rem;
    }
    height: 220px;
}


`;
