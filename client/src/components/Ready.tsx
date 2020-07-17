/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui';
import theme from '../theme';
import { Flex } from 'reflexbox';
import dog from '../images/dog.png';

const ReadyFriend: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Flex justifyContent='center' px={4}>
                <Flex
                    sx={{
                        border: 'solid grey 1px',
                        borderRadius: '20px',
                        width: ['70%', '60%', '40%'],
                        boxShadow: '0px 11px 23px rgba(0, 0, 0, 0.16)',
                    }}
                    m={4}
                    justifyContent='center'
                    flexDirection='column'
                >
                    <h5
                        sx={{
                            fontFamily: 'PT Serif',
                            fontWeight: 'normal',
                            fontSize: [2, 3, 4],
                            px: '10px',
                            my: '0px',
                        }}
                    >
                        {' '}
                        Ready to meet your new friend? 🐶
                    </h5>
                    <Flex
                        justifyContent='center'
                        sx={{
                            width: '100%',
                        }}
                    >
                        <img alt='Dog' src={dog} sx={{ width: '80%' }} />
                    </Flex>
                </Flex>
            </Flex>
        </ThemeProvider>
    );
};

export default ReadyFriend;
