import type {FC} from 'react';
import clsx from 'clsx';
import {ButtonProps as ButtonItemProps, makeStyles} from '@material-ui/core';
import {Button as ButtonItem} from '@material-ui/core';
import {customComponent} from "../utils";
import React from 'react';

interface ButtonProps extends ButtonItemProps {
    containedError?: boolean
    containedSuccess?: boolean
    outlinedError?: boolean
    outlinedSuccess?: boolean
}


const useStyles = makeStyles((theme) => ({
    containedError: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
    },
    outlinedError: {
        border: `1px solid ${theme.palette.error.main}`,
        color: theme.palette.error.main,
        "&:hover": {
            border: `1px solid ${theme.palette.error.main[500]}`
        },
    },
    containedSuccess: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
        },
    },
    outlinedSuccess: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText,
    },

}));


export const Button: FC<ButtonProps> = (props) => {
    const {containedError, outlinedError, containedSuccess, outlinedSuccess, className, children, ...rest} = props;
    const classes = useStyles();

    const testClasses=customComponent(classes,props)

    return <ButtonItem className={
        clsx(
            testClasses,
            className
        )} {...rest}>
        {children}
    </ButtonItem>
};
