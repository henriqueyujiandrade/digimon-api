import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
          * {
            margin: 0;
            padding: 0;
            box-sizing:border-box;
            outline:0
                 }
        body{
            background: url('http://sfwallpaper.com/images/digimon-backgrounds-22.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            height: 100vh;
            width: 100vw;
            font-family: 'Nunito', sans-serif;
        }
`

export default GlobalStyle