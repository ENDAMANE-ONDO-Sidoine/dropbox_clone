/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      ownedFiles {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      ownedFiles {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      ownedFiles {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
      id
      name
      storagePath
      ownerId
      owner {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      versions {Graph
        nextToken
        __typename
      }
      bucket
      region
      userOwnedFilesId
      __typename
    }
  }
`;
export const updateFile = /* QL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
      id
      name
      storagePath
      ownerId
      owner {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      versions {
        nextToken
        __typename
      }
      bucket
      region
      userOwnedFilesId
      __typename
    }
  }
`;
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
      id
      name
      storagePath
      ownerId
      owner {
        id
        username
        email
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      versions {
        nextToken
        __typename
      }
      bucket
      region
      userOwnedFilesId
      __typename
    }
  }
`;
export const createFileVersion = /* GraphQL */ `
  mutation CreateFileVersion(
    $input: CreateFileVersionInput!
    $condition: ModelFileVersionConditionInput
  ) {
    createFileVersion(input: $input, condition: $condition) {
      id
      fileId
      file {
        id
        name
        storagePath
        ownerId
        createdAt
        updatedAt
        bucket
        region
        userOwnedFilesId
        __typename
      }
      versionNumber
      url
      createdAt
      updatedAt
      fileVersionsId
      owner
      __typename
    }
  }
`;
export const updateFileVersion = /* GraphQL */ `
  mutation UpdateFileVersion(
    $input: UpdateFileVersionInput!
    $condition: ModelFileVersionConditionInput
  ) {
    updateFileVersion(input: $input, condition: $condition) {
      id
      fileId
      file {
        id
        name
        storagePath
        ownerId
        createdAt
        updatedAt
        bucket
        region
        userOwnedFilesId
        __typename
      }
      versionNumber
      url
      createdAt
      updatedAt
      fileVersionsId
      owner
      __typename
    }
  }
`;
export const deleteFileVersion = /* GraphQL */ `
  mutation DeleteFileVersion(
    $input: DeleteFileVersionInput!
    $condition: ModelFileVersionConditionInput
  ) {
    deleteFileVersion(input: $input, condition: $condition) {
      id
      fileId
      file {
        id
        name
        storagePath
        ownerId
        createdAt
        updatedAt
        bucket
        region
        userOwnedFilesId
        __typename
      }
      versionNumber
      url
      createdAt
      updatedAt
      fileVersionsId
      owner
      __typename
    }
  }
`;
