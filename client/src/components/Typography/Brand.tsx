/** @jsx jsx */
import { jsx, ThemeProvider, Styled } from 'theme-ui';
import theme from '../../theme';
import { Flex } from 'reflexbox';
import logo from '../../images/Logo.svg';

const Brand: React.FC<{ color: string; align: string }> = ({ color = 'black', align = 'center' }) => {
    return (
        <ThemeProvider theme={theme}>
            <Flex sx={{ justifyContent: align }}>
                <Flex
                    sx={{
                        maxWidth: '20px',
                        justifyContent: 'center',
                        margin: '0px 10px',
                    }}
                >
                    <img alt='logo' src={logo} sx={{ width: '100%' }} />
                </Flex>
                <div
                    sx={{
                        color: color,
                        my: '5px',
                        fontSize: '25px',
                        fontFamily: 'heading',
                    }}
                >
                    Hi Friend
                </div>
            </Flex>
        </ThemeProvider>
    );
};

export default Brand;
