import { createGlobalStyle }  from 'styled-components'

export const GlobalStyled  = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
        q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    @font-face {font-family: "iconfont";
        src: url('./statics/iconfont/iconfont.eot?t=1592753825307'); /* IE9 */
        src: url('./statics/iconfont/iconfont.eot?t=1592753825307#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAVcAAsAAAAAClAAAAUPAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqHcIZoATYCJAMUCwwABCAFhG0HTxvzCMjGf3o3+3NnEl520noobdeyZrQrbrBiSLAKvDQrokaff4kJ99yrms3h0Lxsi8u/zLEwGMDQBApQdtcGGctKfeXWCqJ9hNd6sW5kM+4HAiBQAXVBnbr0GgQFEvAQAaDCcNADxeWEFNNJUECwhZwrMVoBGQpbyJ4AWK7/Pn2DBqQADDIHHtsv0NmPdp+nfmHyGYkZGKGSoCrOD+B2EcAB1AUgARQJDfrBzWJdcIhPvYRmABRax4DP0z5v8oWZSJwYqequbFMgIABwsG7880A2oDEJ6O0M0pCpZAf4QKrADvY1NQEZEPCFqV4oRlndLwDUAGgAQFvP1qpF/i0HR3lFsasiKUlT5d4cSeybctaBMUniqcKVNEgUqEOHrasgtmQP8VxWFwOCxA2x6BnNdLtnikWtBp85gBkH1cW3iSa61p3ZYh+89/z24tJSdzzuevNm0Nu3g+Ofu0q/cL/9bPCbT33j18/Mcq1bpFlrtEFr7Pa1Dvf6gtat187QBrnM1Ystd3CwP6o5hCochLrdQWpBqyFaasBytKwjGsuSA471DtG3uSxtq6BuRSUDIh4fAEGq7Hg7OLuuBuirOvR0w0IUaFAFZmeSQyRJ1NBshYE+5KJaqwW0jppbEGZAHgJWllOrOhqpYGxWB5u2RojWpLoObUO5PswoL7bRzIqtDS1+27tiZ9yVkoCgpjoK8Kti5OdT1iC6Eej6smanl0ZKwtsxHmnTdzDr4A23KZX+aVNi3W2WR3J7Z7SWK5w8Uu3ZrsWno9zW4xz7P7nVfqpWAa12iOmFiUuHf5helHLostxvJ4/HpZ1EqI6d3NZzDSE24JbEUX+LCFEr3ZYYl27BcYyjR57TuTBn4fz5C3I3mNftlNX6aesNlTe+ftLKu+P4R1c6JXfq0ycak3OdktyX832+E7EYfHnU96Id4zSG2qWtZGPwrt4ef9GdSh3SrLR90zaTK/0YfQGijOlRaWRreWpKepn7HQ85+br7j9fJKZ0xrVHawHYvLrWbhLwuQxaoL0imdKL6BA5mY/TTcv1QAuXr6EcYAx4H9U+DB8wO6ESHCHHCwr04mz6iDQ2xE3EicAD99J/pd9TJ65EGfYkD2L9hw0JXFsbTyB8GyNWznQ86bqpbzZM7/caOedRlcr4aqsW1mrVrHhJKCnFmk1awfK4wBvGqDfsBdAbABABAIsFvcACJY/wDPgNIfM7n8AoAwCfyw3cXfh7wTaXRqa1+U9R1N/GhfftOPZE4JiGb6hhUsVUHq1tS1rbmq0GXLL0NiNXYW0AAZHyE8t8wA45NzUFaBTLwSTFmO7sdICiw28DwDsoDh4KqZIleF2SoaAQ2KGgLAnXQ9WIVmTDBQVIZALUxVwJCGo4DQwquA0canpIl+scgIwvfgQ1pxEHARZnXVFGdwqKjaXgsw697J+phX7Q4IDyWMDoHGMGxhR7TqdHZLsMsCWf0+s58b6WrUWyYRZxQMi7YwLICesCMFuldpIcZhYVRPWZGI4bPcoYsK9YiLy8Q9kROX7QIAh1hwoAHFgz4ocOLidARhg9RFCOgjrcgfD8/AAaCGItCeGDGDP3Iu2DARAnCy+uoDyfyGeSuxmLW0KasL8E4BNEAFiwEzvsCMBFFEXR0Ab+BQipGoSMWvi0CAz5YcCKUIR9DC+SdRgW4Rmf15qJ5vAAggNeWiREniWSygbX3iICnOOj3RMLqGsnwh60kY4Iv5FWOhAMAAA==') format('woff2'),
        url('./statics/iconfont/iconfont.woff?t=1592753825307') format('woff'),
        url('./statics/iconfont/iconfont.ttf?t=1592753825307') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('./statics/iconfont/iconfont.svg?t=1592753825307#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`

