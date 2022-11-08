import styled from 'styled-components';

export const Container = styled.div`
display: flex;
display: flex;
align-items: flex-start;
.about-img{
    width: 50%;
    display: flex;
    justify-content: center;
    .img{
        width: 350px;
        height: 350px;
        border-radius: 50%;
        background-color: gray;
    }
}
.about-content{
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    ul{
        opacity: 0;
        display: flex;
        flex-direction: column;
        color: ${({theme}) => theme.colors.txt2};
        gap: 30px;
        font-size: 1.05rem;
    }
    .hidden-about{
        opacity: 0;
    }
    .visible-about{
        animation: hideElement 1.5s forwards;
    }
}

@media (max-width: 1450px) {
    .about-img{
        justify-content: left;
    .img{
        width: 300px;
        height: 300px;
    }
}
.about-content{

    ul{
       
        color: ${({theme}) => theme.colors.txt2};
        font-size: 0.95rem;
    }
}
}

@media (max-width: 1250px) {
    flex-direction: column;
    min-height: auto;
    gap: 40px;
    .about-img{
        width: 100%;
        justify-content: center;
    .img{
        width: 300px;
        height: 300px;
    }
}
.about-content{
    width: 100%;
    ul{
       
        color: ${({theme}) => theme.colors.txt2};
        gap: 30px;
        font-size: 0.9rem;
    }
}
}

@media (max-width: 750px) {
   
    .about-img{
       
    .img{
        width: 200px;
        height: 200px;
    }
}
.about-content{
    ul{
       
        color: ${({theme}) => theme.colors.txt2};
        gap: 30px;
        font-size: 0.85rem;
    }
}
}
@media (max-width: 500px) {
   
   

.about-content{
   ul{
      
       gap: 10px;
   }
}
}



`;
