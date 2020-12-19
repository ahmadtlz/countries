import { createGlobalStyle } from 'styled-components';

type Props = {
  theme :typeof lightTheme | typeof darkTheme
}
export const Global = createGlobalStyle<Props>`

    *,
    ::before,
    ::after {
      box-sizing: inherit;
    }

    body {
      margin: 0;
      font-size:16px;
      background:  ${({ theme }) => theme.backgroundColor};
      color: ${({ theme }) => theme.textColor};
      font-family: 'Roboto', sans-serif;
    }
`;

export const lightTheme = {
  primaryColor: '#21b6b7',
  textColor: '#124a63',
  backgroundColor: '#f9f9f9',
  backgroundColorDark: ' #eef3f6',
  backgroundColorLight: 'white',
  textColorSecondary: '#b3c5cd',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)'
};

export const darkTheme = {
  primaryColor: '#21b6b7',
  textColor: '#f0f0f0',
  backgroundColor: '#252329',
  backgroundColorDark: '#3c393f',
  backgroundColorLight: '#120f13',
  textColorSecondary: '#b3c5cd',
  boxShadow: '0px 2px 8px rgba(255, 255, 255, 0.07)'
};
