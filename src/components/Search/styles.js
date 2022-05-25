import styled from 'styled-components'

export const SearchContainer = styled.div`
        display: flex;
        width: 85vw;
        flex-direction: column;
        align-items: center;
        

        span{
           color: #E60000;
           font-size: 3vw;
        }   

       @media (min-width: 768px){
        width: 20vw;
        span{
          
           font-size: 1vw;
        }   
       }



`

export const InputButton = styled.div`
        display: flex;
        width: 50vw;
        justify-content: space-between;
        height: 7vh;
        margin-bottom: 1vh;

        input{
            width: 30vw;
            border-radius: 4px;
            border: 2px solid transparent;
            font-family: 'Nunito', sans-serif;
            font-size: 3.2vw;
            ::placeholder{
                font-size: 2.5vw;
            }
        }

        button{
            width: 15vw;
            border-radius: 4px;
            border: 2px solid transparent;
            font-family: 'Nunito', sans-serif;
            font-size: 3vw;
            background-color: rgb(0, 102, 255);
            color: rgb(255, 163, 26);
            font-weight: bold;

            :hover{
                border: 2px solid rgb(255, 163, 26);               
                cursor: pointer;
            }

            :active{
                border: 2px solid rgb(255, 163, 26); 
            }

        }

        @media (min-width: 768px) {
                width: 20vw;
                height: 6vh;
                margin-bottom: 0;

                input{
                width: 12vw;                
                font-size: 1.4vw;
                ::placeholder{
                    font-size: 1vw;
                }
            }

            button{
                width: 7vw;
               
                font-size: 1.5vw;
                    

            }

        }



`