import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends React.Component {
    static propTypes = {
        imageSource: PropTypes.string,
    }

    static defaultProps = {
        imageSource: './assets/man.svg'
    }


    getStyles = () => {
        const { imageSource } = this.props;
        if (!imageSource) return {};
        console.log(imageSource);
        return {
            backgroundImage: `url(${imageSource})`,
        };
    }

    render() {
        return (
            <div className={'avatar'} styles={this.getStyles()} />
        );
    }
}