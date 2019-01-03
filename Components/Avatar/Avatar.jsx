import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';

export default class Avatar extends React.PureComponent {
    static propTypes = {
        imageSource: PropTypes.string.isRequired,
        size: PropTypes.string,
    }

    static defaultProps = {
        size: 'medium',
    }

    getStyles = () => {
        const { imageSource } = this.props;
        if (!imageSource) return {};
        return {
            backgroundImage: `url('${imageSource}')`,
        };
    }

    render() {
        return (
            <div className={`avatar-${this.props.size}`} style={this.getStyles()} />
        );
    }
}