/** @jsx jsx */
import { jsx, ThemeProvider, Styled, Container } from 'theme-ui';
import { Flex } from 'reflexbox';
import { CTA } from './components/CTA';
import Footer from './components/Footer';
import Bubble from './components/Bubble';
import ReadyFriend from './components/Ready';
import theme from './theme';
import logo from './images/Logo.svg';
import waves from './images/waves_.svg';

const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Flex sx={{ justifyContent: 'center', width: '100%' }}>
                    <Flex justifyContent='center' flexDirection='row' sx={{ width: '100%' }}>
                        <Flex
                            sx={{
                                maxWidth: ['40px', '50px', '55px'],
                                justifyContent: 'center',
                                margin: '0px 10px',
                            }}
                        >
                            <img alt='logo' src={logo} sx={{ width: '100%' }} />
                        </Flex>
                        <Styled.h2>Hi Friend</Styled.h2>
                    </Flex>
                </Flex>
                <Container px={4}>
                    <Styled.h2 sx={{ width: ['90%', '70%', '60%'] }}>
                        Hundreds of animals waiting for you to be adopted.
                    </Styled.h2>
                </Container>
                <Flex justifyContent='left' mx={4}>
                    <CTA title='Get Started' />
                </Flex>
                <div
                    sx={{
                        width: '100%',
                        backgroundImage: `url(${waves})`,
                        height: '200px',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                ></div>
                {/* <ReadyFriend />
                <Bubble color='rgba(197, 224, 99, 0.42)' size='250px' left='-100px' />
                <Bubble color='rgba(72, 139, 73, 0.4);' size='200px' left='-80px' /> */}
                <Footer />
            </ThemeProvider>
        </div>
    );
};

export default App;
