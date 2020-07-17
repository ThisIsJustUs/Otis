/** @jsx jsx */
import { jsx, ThemeProvider, Container } from 'theme-ui';
import { Flex } from 'reflexbox';
import theme from '../theme';
import Brand from './Typography/Brand';

const FooterLink: React.FC = (props) => {
    return (
        <li
            sx={{
                margin: '20px 10px',
                fontSize: [2, 2, 2],
                letterSpacing: '0.0025em',
                lineHeight: '19px',
                fontWeight: 'body',
            }}
        >
            {props.children}
        </li>
    );
};

const Footer: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container
                sx={{
                    bg: '#495057',
                    color: '#FFFFFF',
                    padding: ['15px', '20px', '20px'],
                }}
            >
                <Flex
                    sx={{
                        flexDirection: ['column', 'column', 'row'],
                        alignItems: ['flex-start', 'flex-start', 'center'],
                        justifyContent: ['space-between'],
                    }}
                >
                    <Brand color='white' align='left' />
                    <ul
                        sx={{
                            fontFamily: 'body',
                            listStyleType: 'none',
                            margin: '0px',
                            px: '0px',
                            display: 'flex',
                            flexDirection: ['column', 'column', 'row'],
                        }}
                    >
                        <FooterLink>About</FooterLink>
                        <FooterLink>Careers</FooterLink>
                        <FooterLink>Blog</FooterLink>
                        <FooterLink>Impressum</FooterLink>
                        <FooterLink>Press & Media</FooterLink>
                    </ul>
                    <span sx={{ fontSize: [2, 2, 2], fontFamily: 'heading', letterSpacing: '3px' }}>
                        ©2020 BEST FRIEND LTD.
                    </span>
                </Flex>
            </Container>
        </ThemeProvider>
    );
};

export default Footer;
