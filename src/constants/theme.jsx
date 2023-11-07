
export const theme = Object.freeze (
  {
    colors: {
      baseColor: '#8A33FD',
      black: '#191919',
      white: '#fff',
      grayText: '#807D7E',
      accentText: '#3C4242',
      blackText: '#2A2F2F',
      backgroundAccent: '#F6F6F6',
      backgroundAccentHover: '#e0e0e0',
    },
    spacing: (value) => `${4 * value}px`,
    fontSize: {
      small: '14px',
      normal: '18px',
      medium: '22px',
      customText: '24px',
      large: '32px',
      subTitle: '34px',
      extraLarge: '50px',
      megaLarge: '94px'
    }
  }
)
