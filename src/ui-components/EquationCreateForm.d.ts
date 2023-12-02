/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type EquationCreateFormInputValues = {
    equation?: string;
    intercepts?: string;
    domain?: string;
    range?: string;
};
export declare type EquationCreateFormValidationValues = {
    equation?: ValidationFunction<string>;
    intercepts?: ValidationFunction<string>;
    domain?: ValidationFunction<string>;
    range?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquationCreateFormOverridesProps = {
    EquationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    equation?: PrimitiveOverrideProps<TextFieldProps>;
    intercepts?: PrimitiveOverrideProps<TextFieldProps>;
    domain?: PrimitiveOverrideProps<TextFieldProps>;
    range?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquationCreateFormProps = React.PropsWithChildren<{
    overrides?: EquationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EquationCreateFormInputValues) => EquationCreateFormInputValues;
    onSuccess?: (fields: EquationCreateFormInputValues) => void;
    onError?: (fields: EquationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquationCreateFormInputValues) => EquationCreateFormInputValues;
    onValidate?: EquationCreateFormValidationValues;
} & React.CSSProperties>;
export default function EquationCreateForm(props: EquationCreateFormProps): React.ReactElement;
