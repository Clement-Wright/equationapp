/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createEquation = /* GraphQL */ `
  mutation CreateEquation(
    $input: CreateEquationInput!
    $condition: ModelEquationConditionInput
  ) {
    createEquation(input: $input, condition: $condition) {
      id
      equation
      intercepts
      domain
      range
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEquation = /* GraphQL */ `
  mutation UpdateEquation(
    $input: UpdateEquationInput!
    $condition: ModelEquationConditionInput
  ) {
    updateEquation(input: $input, condition: $condition) {
      id
      equation
      intercepts
      domain
      range
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEquation = /* GraphQL */ `
  mutation DeleteEquation(
    $input: DeleteEquationInput!
    $condition: ModelEquationConditionInput
  ) {
    deleteEquation(input: $input, condition: $condition) {
      id
      equation
      intercepts
      domain
      range
      createdAt
      updatedAt
      __typename
    }
  }
`;
