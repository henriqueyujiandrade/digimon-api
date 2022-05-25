import styled from 'styled-components'

export const Container = styled.div`
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        

`

export const Header = styled.header`       
        width: 100vw;       
        background:  rgb(204, 204, 255, 0.6);
        display: flex;
        align-items: center;
`

export const Content = styled.div`
        display: flex;
        flex-direction: column;
        width: 85vw;
        justify-content: space-between;
        align-items: center;        
        margin: 0 auto;
        
        section{
            display: flex;
            margin-bottom: 1vh;
            align-items: center;
            
            


            figure{
                width: 15vw;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-right: 3vw;

                img{
                    width: 100%;
                }
            
            }

        h1{
            font-size: 5vw;
            background: rgb(255,255,255);
            background: linear-gradient(180deg, rgba(255,255,255,1) 2%, rgba(232,255,0,1) 7%, rgba(249,122,2,1) 99%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;            
        }

    }

    @media (min-width: 768px){

        flex-direction: row;

        section{
            margin-bottom: 0;
            


            figure{
                width: 10vw;
               
            }     

    }

    }
        

`

