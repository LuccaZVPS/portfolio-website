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
    gap: 60px;
    h3{
        font-size: 1.6rem;
        margin-bottom: 30px;
    }
    .imgs-tech{
        display: flex;
        gap: 40px;
        justify-content: center;
        img{
            width:60px;
            height: 60px;
            border-radius: 8px;
        }
    }
}


.front{
    margin-top: 50px;
}

`;
