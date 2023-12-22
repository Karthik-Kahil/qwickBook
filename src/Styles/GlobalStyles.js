import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


:root {
    --color-primary: #EEE7DE;
    --color-green-a1: #53B434;
    --color-green-a1-hover: #6AC556;
    
    --color-dark-blue: #111827;
    --color-blue-bg: #173641;
    --color-red-a1: #D80032;
    --color-green-a2: #4C6763;
    --color-secondary-a0: #D691EF;
    --color-secondary-a1: #A3DBD4;
    --color-secondary-a2: #F0B794;
    --color-secondary-a3: #BDDFF9;

    --background--gradient: background: rgb(204,223,183);
    --baackground--gradient: linear-gradient(180deg, rgba(204,223,183,1) 15%, rgba(207,223,208,1) 32%, rgba(216,231,196,1) 53%, rgba(231,236,188,1) 70%, rgba(232,235,199,0) 100%);;


  --color-grey-0: #FBF6EE;
  --color-grey-1: #000;
  --color-grey-50: #f9fafb;
  --color-grey-blur: #f9fafbe1;
  --blur--100 : backdrop-filter: blur(1px);
  
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #0e2934;

  

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);
  background-color: #faf8ed;
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

&::selection {
  background-color: var(--color-green-a1);
  color: var(--color-grey-0);
}


input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}


body {
 background-color: #faf8ed;
}


/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}



`;

export default GlobalStyles;
