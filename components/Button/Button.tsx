import React from 'react';
import styles from "./Button.module.css";
import {ButtonProps} from "./Button.props";
import cn from 'classnames';

const Button = ({children, appearance}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(styles.button, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost'
        })}>
            {children}
        </button>
    );
};

export default Button;
