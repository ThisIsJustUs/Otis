/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../theme';

const CTA: React.FC<{ title: string }> = ({ title }) => {
    return (
        <ThemeProvider theme={theme}>
            <button
                sx={{
                    backgroundColor: '#6EB257',
                    fontFamily: 'body',
                    borderRadius: '50px',
                    width: '160px',
                    height: '49px',
                    borderColor: 'transparent',
                    color: 'white',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    ':active': {
                        outline: 'none',
                    },
                    ':focus': {
                        outline: 'none',
                    },
                }}
            >
                {title}
            </button>
        </ThemeProvider>
    );
};

export { CTA };
