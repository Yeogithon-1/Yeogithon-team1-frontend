import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        font-family: 'Noto Sans KR', sans-serif;
    }
`;
