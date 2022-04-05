import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* General variables */
  :root {
    --ff-primary: 'Kumbh Sans', sans-serif;

    --fw-reg: 400;
    --fw-bold: 600;

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

    --lh-h1: 2.125rem;
    --lh-h2: 1.8125rem;
    --lh-h3: 1.5rem;
    --lh-h4: 1.125rem;
    --lh-body: 1.625rem;

    --bs: 0.25em 0.25em 0.75em rgba(0,0,0,.15);

    h1 {
      font-size: var(--fs-h1);
      line-height: var(--lh-h1);
    }

    h2 {
      font-size: var(--fs-h2);
      line-height: var(--lh-h2);
    }

    h3 {
      font-size: var(--fs-h3);
      line-height: var(--lh-h3);
    }

    h4 {
      font-size: var(--fs-h4);
      line-height: var(--lh-h4);
    }

    body {
      font-size: var(--fs-body);
      line-height: var(--lh-body);
    }
  }

`

export default GlobalStyle
