import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'PFStardust';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/PFStardust.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {margin: 0;padding: 0;border: 0;font-size: 100%;font: inherit;vertical-align: baseline;}

article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section, summary {
  display: block;
}

button{
  cursor: pointer;
}

body {
  line-height: 1;
  font-family: 'PFStardust';
}

[hidden] {
  display: none;
}

ol, ul {
  list-style: none;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

`;

export default GlobalStyle;
