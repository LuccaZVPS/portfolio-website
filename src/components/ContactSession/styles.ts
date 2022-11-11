import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-bottom: 80px;
min-height: 70vh;
align-items: center;
text-align: center;

.contact-container {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
    .hidden-box{
        animation: reverse-hideElement 1s forwards ;

    }
    .visible-box{
        animation: hideElement 1s forwards;
    }
}


@media (max-width: 1150px) {
    margin-bottom: 150px;
    .slider{
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
    }
    .contact-container {
        grid-template-columns: 300px 300px 300px;
        height: auto;
    }
    }

    @media (max-width: 750px) {
    margin-bottom: 150px;
    
    .contact-container {
        grid-template-columns: 250px 250px 250px;
        height: auto;
    }
    }
`;
