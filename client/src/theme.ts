const heading = {
    color: 'text',
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
};

export const base = {
    breakpoints: ['40em', '52em', '64em'],
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
    fonts: {
        heading: 'PT Serif',
        body:
            'Open Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
        monospace: 'Menlo, monospace',
    },
    fontSizes: [12, 14, 15, 16, 17, 21, 25, 36, 51, 64, 102],
    fontWeights: {
        body: 'normal',
        heading: 'normal',
        bold: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.5,
    },
    colors: {
        text: 'black',
        background: '#fff',
        primary: '#C5E063',
        secondary: '#488B49',
        grey1: '#343A40',
        muted: '#ADB5BD',
    },
    borders: {
        border: 'solid blue 1px',
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            ...heading,
            fontSize: [8, 9, 10],
            letterSpacing: '-0.015em',
        },
        h2: {
            ...heading,
            fontSize: [7, 8, 9],
            letterSpacing: '-0.005em',
        },
        h3: {
            ...heading,
            fontSize: [6, 7, 8],
        },
        h4: {
            ...heading,
            fontSize: [5, 6, 7],
            letterSpacing: '0.0025em',
        },
        h5: {
            ...heading,
            fontSize: [4, 5, 6],
        },
        h6: {
            ...heading,
            fontSize: [3, 4, 5],
            letterSpacing: '0.0015em',
        },
        p: {
            color: 'text',
            fontFamily: 'body',
            fontWeight: 'body',
            lineHeight: 'body',
        },
        a: {
            color: 'primary',
        },
        pre: {
            fontFamily: 'monospace',
            overflowX: 'auto',
            code: {
                color: 'inherit',
            },
        },
        code: {
            fontFamily: 'monospace',
            fontSize: 'inherit',
        },
        table: {
            width: '100%',
            borderCollapse: 'separate',
            borderSpacing: 0,
        },
        th: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        td: {
            textAlign: 'left',
            borderBottomStyle: 'solid',
        },
        img: {
            maxWidth: '100%',
        },
        button: {
            fontSize: 1,
        },
    },
};

export default base;
