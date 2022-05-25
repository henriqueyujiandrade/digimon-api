import styled from "styled-components";


export const ContainerList = styled.div`
        margin-top: 4vh;
        width: 85vw;
        background: rgb(204, 204, 255, 0.6);
        height: 80vh;
        border-radius: 10px;
        overflow: auto;
        ::-webkit-scrollbar{
            width: 1.2vw;

        }

        ::-webkit-scrollbar-track{
            background: rgb(204, 204, 255, 0.6);
            border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb{
            background: rgb(255, 163, 26, 0.6);
            border-radius: 2vw;
        }
        
`


export const Ul = styled.ul`
    width:80vw;
    display: flex;
    gap: 2.2vw;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 4vh;
    margin-bottom: 4vh;
    
    @media (min-width: 768px){
        gap: 1.2vw;
    }
`