/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui';
import theme from '../../theme';

const heading = {
    fontFamily: 'heading',
    fontWeight: 'heading',
};

const H1: React.FC = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <h1
                sx={{
                    fontFamily: 'heading',
                    fontWeight: 'heading',
                    fontSize: [8, 9, 10],
                    letterSpacing: '-0.015em',
                    lineHeight: 1.3,
                    width: ['90%', '70%', '60%'],
                }}
            >
                {props.children}
            </h1>
        </ThemeProvider>
    );
};

const H2: React.FC = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <h2
                sx={{
                    fontFamily: 'heading',
                    fontSize: [7, 8, 9],
                    fontWeight: 'heading',
                    letterSpacing: '-0.005em',
                    lineHeight: 1.3,
                    width: ['90%', '70%', '60%'],
                }}
            >
                {props.children}
            </h2>
        </ThemeProvider>
    );
};

const H3: React.FC = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <h2
                sx={{
                    fontFamily: 'heading',
                    fontSize: [6, 7, 8],
                    fontWeight: 'heading',
                    letterSpacing: '-0.005em',
                    lineHeight: 1.3,
                    width: ['90%', '70%', '60%'],
                }}
            >
                {props.children}
            </h2>
        </ThemeProvider>
    );
};
const H4: React.FC = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <h2
                sx={{
                    fontFamily: 'heading',
                    fontSize: [5, 6, 7],
                    fontWeight: 'heading',
                    letterSpacing: '-0.005em',
                    lineHeight: 1.3,
                    width: ['90%', '70%', '60%'],
                }}
            >
                {props.children}
            </h2>
        </ThemeProvider>
    );
};
const H5: React.FC = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <h2
                sx={{
                    fontFamily: 'heading',
                    fontSize: [6, 7, 8],
                    fontWeight: 'heading',
                    letterSpacing: '-0.005em',
                    lineHeight: 1.3,
                    width: ['90%', '70%', '60%'],
                }}
            >
                {props.children}
            </h2>
        </ThemeProvider>
    );
};

const P: React.FC = (props) => {
    return (
        <p
            sx={{
                fontFamily: 'heading',
                fontSize: [0, 0, 1],
                letterSpacing: '-0.005em',
            }}
        >
            {props.children}
        </p>
    );
};

export { H1, H2, H3, H4, H5, P };
