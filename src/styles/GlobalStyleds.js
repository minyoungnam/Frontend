import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    /* Font-Size */
    --font-extra-large: 60px;
    --font-large: 32px;
    --font-medium: 20px;
    --font-regular: 16px;
    --font-small: 14px;
    --font-micro: 12px;

  }

  * {
    margin: 0;
    padding: 0;
  }

  p {
    font-family: 'Noto Sans KR', sans-serif;
    font-size: var(--font-micro);
  }

  button {
    cursor: pointer;
}
`;
