import {useState} from 'react';
import PropTypes from 'prop-types';

const PropsDemo = () => {

    const [ color, setColor ] = useState('white');
    const [ backgroundColor, setBackgroundColor ] = useState('purple');
    const [ borderRadius, setBorderRadius ] = useState('5px');
    const [ borderStyle, setBorderStyle ] = useState('dashed');
    const [ display, setDisplay ] = useState('inline-block');
    const [ width, setWidth ] = useState('350px');
    const [ textAlign, setTextAlign ] = useState('center');

    let styles = {
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
        borderStyle: borderStyle,
        display: display,
        width: width,
        textAlign: textAlign
    };

    const toggleColor = () => {
        color === 'white' ? setColor('pink') : setColor('white');
    }

    const toggleBGC = () => {
        backgroundColor === 'purple' ? setBackgroundColor('darkblue') : setBackgroundColor('purple');
    }

    const toggleBorRad = () => {
        borderRadius === '5px' ? setBorderRadius('20px') : setBorderRadius('5px');
    }

    const toggleBorSty = () => {
        borderStyle === 'dashed' ? setBorderStyle('double') : setBorderStyle('dashed');
    }

    const toggleDisplay = () => {
        display === 'inline-block' ? setDisplay('grid') : setDisplay('inline-block');
    }

    const toggleWidth = () => {
        width === '350px' ? setWidth('700px') : setWidth('350px');
    }

    const toggleTextAlign = () => {
        textAlign === 'center' ? setTextAlign('left') : setTextAlign('center');
    }

    return(
        <div className='main'>
            <div className='mainDiv'>
                <div style={styles}>
                    <FunctionalComponent string='Color Toggle?' function={ toggleColor } selectedStyle={ color } />
                    <FunctionalComponent string='Background Color Toggle' function={ toggleBGC } selectedStyle={ backgroundColor } />
                    <FunctionalComponent string='Border Radius Toggle' function={ toggleBorRad } selectedStyle={ borderRadius } />
                    <FunctionalComponent string='Border Style Toggle' function={ toggleBorSty } selectedStyle={ borderStyle } />
                    <FunctionalComponent string='Display Toggle' function={ toggleDisplay } selectedStyle={ display } />
                    <FunctionalComponent string='Width Toggle' function={ toggleWidth } selectedStyle={ width } />
                    <FunctionalComponent string='Text Align Toggle' function={ toggleTextAlign } selectedStyle={ textAlign } />
                </div>
            </div>
        </div>
    );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
    return(
        <div>
            <p>{props.string}</p>
            <button onClick={props.function}>Toggle Style</button>
            <TinyComponent selectedStyle={ props.selectedStyle } />
        </div>
    );
};

const TinyComponent = (props) => {
    return(
        <div>
            <p>The current style is : { props.selectedStyle }</p>
        </div>
    )
};

// FunctionalComponent.defaultProps = {
//     string: 'This is wild!',
//     function: () => console.log('Can I see this in my dev tools?'),
//     selectedStyle: 'what style?'
// }

FunctionalComponent.propsTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}