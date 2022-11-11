import styled from 'styled-components';

export const Container = styled.div`
border-top: 1px solid ${({theme}) => theme.colors.hover2};
color: ${({theme}) => theme.colors.txt};
height: 70px;
display: flex;
align-items: center;
width: 100%;
position: absolute;
bottom: 0;
left: 0;
padding: 0px 25px 0px 25px;
justify-content: space-between;
background-color: #0C1212;
.top{
    background-color: ${({theme}) => theme.colors.secondary};
    width: 30px;
    height: 30px;
    position: absolute;
    border-radius: 50%;
    left: calc(50% - 15px);
    top:-15px;
    color: ${({theme}) => theme.colors.txt}; ;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover{
        transform: scale(1.05);
    }
}
.social{
    display: flex;
    gap: 10px;

    div{
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-color: ${({theme}) => theme.colors.txt};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg{ 
            color:  ${({theme}) => theme.colors.background};;
        }

    }
}
@media (max-width: 1450px) {
    font-size: 0.9rem;

}

@media (max-width: 1150px) {
    font-size: 0.85rem;

}
@media (max-width: 750px) {
    font-size: 0.8rem;
    padding: 20px 5px 20px 5px;
    flex-direction: column;
    align-items: center;
    height: auto;
    justify-content: unset;
    gap: 30px;
    .social{
        gap: 15px;
        div{
            width: 25px;
            height: 25px;
            svg{
                font-size: 1.1rem;

            }
        }
    }

}
`;
