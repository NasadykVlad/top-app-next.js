import React from 'react';
import {HtagProps} from "./Htag.props";
import styles from "./Htag.module.css";

const Htag = ({tag, text}: HtagProps): JSX.Element => {
    switch (tag) {
        case "h1":
            return <h1 className={styles.h1}>{text}</h1>;
        case "h2":
            return <h2 className={styles.h2}>{text}</h2>;
        case "h3":
            return <h3 className={styles.h3}>{text}</h3>;
        default:
            return <></>;
    }
};

export default Htag;
