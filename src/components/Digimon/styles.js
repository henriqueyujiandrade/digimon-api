import styled from 'styled-components'

export const Li = styled.li`
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        width: 25vw;
        box-shadow: 0px 0px 10px 0px rgb(255, 163, 26);
        justify-content: space-evenly;
        border-radius: 8px;
        
        figure{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20vw;
            
            

            img{
                width: 100%;
            }
        }
        .title{
            width: 100%;
            background:rgb(128, 170, 255);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 8px 8px 0px 0px;

                h2{
                font-size: 2.3vw;               
                }
        }
       
        .level{
            width: 100%;
            background: rgb(128, 170, 255);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0px 0px 8px 8px;

            p{
            font-size: 2.3vw;       
            
        }            
    }

    @media (min-width: 768px) {
            
            width: 15vw;
           
            
            figure{

                width: 10vw;       
            }

            .title{
              
                    h2{
                    font-size: 1.4vw;               
                    }
            }
        
            .level{               

                p{
                font-size: 1.5vw;                 
            }            
        }
    }
       
`

