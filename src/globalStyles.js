import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* General variables */
  :root {
    --ff-primary: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

    --fw-reg: 400;
    --fw-bold: 700;

    --clr-violet: #9e7f66;
    --clr-light-violet: #939BF4;
    --clr-very-dark-blue: #19202D;
    --clr-midnight: #121721;
    --clr-white: #FFFFFF;
    --clr-light-grey: #F4F6F8;
    --clr-grey: #9DAEC2;
    --clr-dark-grey: #6E8098;

    --fs-h1: 1.75rem;
    --fs-h2: 1.5rem;
    --fs-h3: 1.25rem;
    --fs-h4: 0.875rem;
    --fs-body: 1rem;

    --bs: 0.25em 0.25em 0.75em rgba(0,0,0,.15);

    h1 {
      font-size: var(--fs-h1);
      color: var(--clr-accent);
    }
  }

`

export default GlobalStyle
