/** @jsx jsx */
import { jsx } from 'theme-ui';

const Bubble: React.FC<{
    color: string;
    size: string;
    left: string;
}> = ({ color, size, left }) => {
    return (
        <div
            sx={{
                backgroundColor: color,
                height: size,
                width: size,
                borderRadius: '90%',
                position: 'absolute',
                left: left,
            }}
        ></div>
    );
};

export default Bubble;
