/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEquation = /* GraphQL */ `
  query GetEquation($id: ID!) {
    getEquation(id: $id) {
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
export const listEquations = /* GraphQL */ `
  query ListEquations(
    $filter: ModelEquationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        equation
        intercepts
        domain
        range
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
