import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default class Inline extends React.PureComponent {
    static propTypes = {
        value: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        disabled: PropTypes.bool.isRequired,
        hasError: PropTypes.bool.isRequired,
        onFocus: PropTypes.func.isRequired,
        onBlur: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    state = {
        value: this.props.value,
    }

    handleOnChange = (event) => {
        console.log(event.target)
        const { value } = event.target;
        this.setState({ value });
        this.props.onChange(value);
    };

    render() {
        const {
            disabled,
            placeholder,
            hasError,
            onFocus,
            onBlur,
        } = this.props;

        const { value } = this.state;

        const className = classNames(
            'inline-textfield',
            disabled && 'inline-textfield-disabled',
            hasError && 'inline-textfield-error',
        );

        return (
            <input
                className={className}
                onBlur={onBlur}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                onFocus={onFocus}
                onChange={this.handleOnChange}
            />
        );
    }
}
