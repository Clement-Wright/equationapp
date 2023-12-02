/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Equation } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EquationUpdateFormInputValues = {
    equation?: string;
    intercepts?: string;
    domain?: string;
    range?: string;
};
export declare type EquationUpdateFormValidationValues = {
    equation?: ValidationFunction<string>;
    intercepts?: ValidationFunction<string>;
    domain?: ValidationFunction<string>;
    range?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquationUpdateFormOverridesProps = {
    EquationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    equation?: PrimitiveOverrideProps<TextFieldProps>;
    intercepts?: PrimitiveOverrideProps<TextFieldProps>;
    domain?: PrimitiveOverrideProps<TextFieldProps>;
    range?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquationUpdateFormProps = React.PropsWithChildren<{
    overrides?: EquationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    equation?: Equation;
    onSubmit?: (fields: EquationUpdateFormInputValues) => EquationUpdateFormInputValues;
    onSuccess?: (fields: EquationUpdateFormInputValues) => void;
    onError?: (fields: EquationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquationUpdateFormInputValues) => EquationUpdateFormInputValues;
    onValidate?: EquationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EquationUpdateForm(props: EquationUpdateFormProps): React.ReactElement;
