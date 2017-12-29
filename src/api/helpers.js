
import { cyan500, pinkA200 } from 'material-ui/styles/colors';


export const validateToken = (token) => {
    return /^[a-z0-9]{32,40}$/.test(token)
}




export const getColorsFromTheme = (theme) => {
    if (!theme) return { primary1Color: cyan500, accent1Color: pinkA200 };
    const {
        palette: {
            primary1Color,
            accent1Color,
        },
      } = theme;
    return { primary1Color, accent1Color };
}


