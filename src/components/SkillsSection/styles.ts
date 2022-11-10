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
    width: 100%;
    gap: 90px;
    align-items: center;
    .visible-skills {animation: hideElement 1s forwards;}
    .hidden-about{
        animation: reverse-hideElement 1s forwards;
    }
}



@media (max-width: 1150px) {
    .content{
    
    gap: 30px;
}


}

`;
