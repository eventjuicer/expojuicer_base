
import { cyan500, pinkA200 } from 'material-ui/styles/colors';


export const validateToken = (token) => {
    return /^[a-z0-9]{32,40}$/.test(token)
}

export const checkHttpStatusCode = (response) =>
{
  if (response.status < 200 || response.status >= 300)
  {
      throw new Error("Ooops!");
  }
  return response.json;
}

export const storeUserData = (token, profile) => {
  localStorage.setItem('token', token);
  localStorage.setItem('profile', JSON.stringify(profile));
}

export const clearUserData = () => {
  localStorage.removeItem('profile');
  localStorage.removeItem('token');
}

export const getToken = () => {
  const token = localStorage.getItem("token");
  return validateToken(token) ? token : "";
}

export const getCompanyName = () => {
  return "ACME Inc.";
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
