import type { FC } from 'react';
import { ButtonProps as ButtonItemProps } from '@material-ui/core';
interface ButtonProps extends ButtonItemProps {
    containedError?: boolean;
    containedSuccess?: boolean;
    outlinedError?: boolean;
    outlinedSuccess?: boolean;
}
export declare const Button: FC<ButtonProps>;
export {};
