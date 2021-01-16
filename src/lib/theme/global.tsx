import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    background-repeat: no-repeat;
    box-sizing: border-box;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: scrollbar;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    text-size-adjust: 100%;
    cursor: default;
    font-size: 15px;
    line-height: 1.5;
    word-break: break-word;
    font-family: "Roboto";
  }

  body {
    background-color: #ededed;
    color: #222;
    font-family: "Roboto";
    font-feature-settings: "kern" 1, "liga" 1;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-family: 'Roboto';
    font-weight: 700;
    margin-bottom: 1.5rem;
    margin-top: 0;
    text-rendering: optimizeLegibility;
  }

  h1 {
    font-size: 5.125rem;
    line-height: 1.073170732;
  }

  h2 {
    font-size: 3.625rem;
    line-height: 1.103448276;
  }

  h3 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  h4 {
    font-size: 2rem;
    line-height: 1.25;
  }

  h5 {
    font-size: 1.375rem;
    line-height: 1.272727273;
  }

  h6 {
    font-size: 1.125rem;
    line-height: 1.333333333;
  }

  a {
    background-color: transparent;
    color: '#000;
    text-decoration: none;
    touch-action: manipulation;

    &:visited {
      color: #DDD;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }

  hr {
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
    box-sizing: content-box;
    color: #F4F5F7;
    height: 0;
    overflow: visible;
  }

  main {
    display: block;
  }

  ul,
  ol,
  dd {
    padding-left: 1.5rem;
  }

  p,
  ul,
  ol,
  dl,
  blockquote,
  figure,
  form,
  table,
  hr,
  fieldset,
  pre {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }

  nav ol,
  nav ul {
    list-style: none;
  }

  pre {
    font-family: monospace;
    font-size: 1rem;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: 700;
  }

  small {
    font-size: 0.75rem;
  }

  code,
  kbd,
  samp {
    font-family: "Roboto";
    font-size: 1rem;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  audio,
  video {
    display: inline-block;
  }

  img {
    border-style: none;
  }

  svg {
    fill: currentColor;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    overflow: visible;
    text-transform: none;
    border-color: #F4F5F7;
    border-style: solid;
    border-width: 1px;
    touch-action: manipulation;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: button;
    background-color: #FFF;
    border-color: #0076ff;
    border-radius: 0.25rem;
    color: #0076ff;
    cursor: pointer;
    height: 2.5rem;
    text-align: center;
    padding-left: 1rem;
    padding-right: 1rem;

    &:disabled {
      border-color: #F4F5F7;
      color: #525c66;
      cursor: default;
    }

    &:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  input {
    overflow: visible;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    height: auto;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    appearance: none;
  }

  ::-webkit-file-upload-button {
    appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  dialog {
    background-color: #FFF;
    border: #F4F5F7;
    color: #FFF;
    display: block;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1rem;
    position: absolute;
    right: 0;
    width: fit-content;
  }

  dialog:not([open]) {
    display: none;
  }

  summary {
    display: list-item;
  }

  canvas {
    display: inline-block;
  }

  template {
    display: none;
  }

  area,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    touch-action: manipulation;
  }

  [hidden] {
    display: none;
  }

  [aria-busy="true"] {
    cursor: progress;
  }

  [aria-controls] {
    cursor: pointer;
  }

  [aria-disabled],
  [disabled] {
    cursor: disabled;
  }

  [aria-hidden="false"][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    display: inherit;
    position: absolute;
  }

  figure {
    margin-left: 0;
    margin-right: 0;
  }

  meter {
    min-height: 1rem;
  }

  dd {
    margin-left: 0;
  }

  blockquote {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  iframe,
  input,
  select,
  textarea,
  fieldset {
    border-color: #F4F5F7;
    border-style: solid;
    border-width: 1px;
  }

  input,
  select {
    border-radius: 0.25rem;
    background-color: #FFF;
    padding: 0.4375rem;
    height: 2.5rem;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI5Mi4zNjIgMjkyLjM2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkyLjM2MiAyOTIuMzYyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4Ni45MzUsNjkuMzc3Yy0zLjYxNC0zLjYxNy03Ljg5OC01LjQyNC0xMi44NDgtNS40MjRIMTguMjc0Yy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0ICAgQzEuODA3LDcyLjk5OCwwLDc3LjI3OSwwLDgyLjIyOGMwLDQuOTQ4LDEuODA3LDkuMjI5LDUuNDI0LDEyLjg0N2wxMjcuOTA3LDEyNy45MDdjMy42MjEsMy42MTcsNy45MDIsNS40MjgsMTIuODUsNS40MjggICBzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4TDI4Ni45MzUsOTUuMDc0YzMuNjEzLTMuNjE3LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0N0MyOTIuMzYyLDc3LjI3OSwyOTAuNTQ4LDcyLjk5OCwyODYuOTM1LDY5LjM3N3oiIGZpbGw9IiMyNDJiMzMiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K");
    background-repeat: no-repeat;
    background-size: 0.6rem;
    background-position: right 0.5rem top 50%;
    padding-right: 1.6rem;
    text-transform: none;

    &:disabled {
      background-image: url("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI5Mi4zNjIgMjkyLjM2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkyLjM2MiAyOTIuMzYyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4Ni45MzUsNjkuMzc3Yy0zLjYxNC0zLjYxNy03Ljg5OC01LjQyNC0xMi44NDgtNS40MjRIMTguMjc0Yy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0ICAgQzEuODA3LDcyLjk5OCwwLDc3LjI3OSwwLDgyLjIyOGMwLDQuOTQ4LDEuODA3LDkuMjI5LDUuNDI0LDEyLjg0N2wxMjcuOTA3LDEyNy45MDdjMy42MjEsMy42MTcsNy45MDIsNS40MjgsMTIuODUsNS40MjggICBzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4TDI4Ni45MzUsOTUuMDc0YzMuNjEzLTMuNjE3LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0N0MyOTIuMzYyLDc3LjI3OSwyOTAuNTQ4LDcyLjk5OCwyODYuOTM1LDY5LjM3N3oiIGZpbGw9IiNhM2FlYmYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K");
    }

    &::-ms-expand {
      display: none;
    }
  }

  input:disabled,
  select:disabled {
    background-color: #F4F5F7;
    color: #525c66;
  }

  input[readonly] {
    background-color: #fcf5e1;
    color: ##525c66;
  }

  textarea {
    border-radius: 0.25rem;
    background-color: #EEE;
    height: 8rem;
    overflow: auto;
    padding: 0.4375rem;
    resize: vertical;
  }

  input[type="range"] {
    background-color: transparent;
    border: 0;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 0.5rem;
    text-align: left;
  }

  tr {
    border-bottom: 1px solid #F4F5F7;
  }

  .sronly {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }
`;
