/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Equation } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function EquationCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    equation: "",
    intercepts: "",
    domain: "",
    range: "",
  };
  const [equation, setEquation] = React.useState(initialValues.equation);
  const [intercepts, setIntercepts] = React.useState(initialValues.intercepts);
  const [domain, setDomain] = React.useState(initialValues.domain);
  const [range, setRange] = React.useState(initialValues.range);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEquation(initialValues.equation);
    setIntercepts(initialValues.intercepts);
    setDomain(initialValues.domain);
    setRange(initialValues.range);
    setErrors({});
  };
  const validations = {
    equation: [],
    intercepts: [],
    domain: [],
    range: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          equation,
          intercepts,
          domain,
          range,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Equation(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EquationCreateForm")}
      {...rest}
    >
      <TextField
        label="Equation"
        isRequired={false}
        isReadOnly={false}
        value={equation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation: value,
              intercepts,
              domain,
              range,
            };
            const result = onChange(modelFields);
            value = result?.equation ?? value;
          }
          if (errors.equation?.hasError) {
            runValidationTasks("equation", value);
          }
          setEquation(value);
        }}
        onBlur={() => runValidationTasks("equation", equation)}
        errorMessage={errors.equation?.errorMessage}
        hasError={errors.equation?.hasError}
        {...getOverrideProps(overrides, "equation")}
      ></TextField>
      <TextField
        label="Intercepts"
        isRequired={false}
        isReadOnly={false}
        value={intercepts}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation,
              intercepts: value,
              domain,
              range,
            };
            const result = onChange(modelFields);
            value = result?.intercepts ?? value;
          }
          if (errors.intercepts?.hasError) {
            runValidationTasks("intercepts", value);
          }
          setIntercepts(value);
        }}
        onBlur={() => runValidationTasks("intercepts", intercepts)}
        errorMessage={errors.intercepts?.errorMessage}
        hasError={errors.intercepts?.hasError}
        {...getOverrideProps(overrides, "intercepts")}
      ></TextField>
      <TextField
        label="Domain"
        isRequired={false}
        isReadOnly={false}
        value={domain}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation,
              intercepts,
              domain: value,
              range,
            };
            const result = onChange(modelFields);
            value = result?.domain ?? value;
          }
          if (errors.domain?.hasError) {
            runValidationTasks("domain", value);
          }
          setDomain(value);
        }}
        onBlur={() => runValidationTasks("domain", domain)}
        errorMessage={errors.domain?.errorMessage}
        hasError={errors.domain?.hasError}
        {...getOverrideProps(overrides, "domain")}
      ></TextField>
      <TextField
        label="Range"
        isRequired={false}
        isReadOnly={false}
        value={range}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              equation,
              intercepts,
              domain,
              range: value,
            };
            const result = onChange(modelFields);
            value = result?.range ?? value;
          }
          if (errors.range?.hasError) {
            runValidationTasks("range", value);
          }
          setRange(value);
        }}
        onBlur={() => runValidationTasks("range", range)}
        errorMessage={errors.range?.errorMessage}
        hasError={errors.range?.hasError}
        {...getOverrideProps(overrides, "range")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
