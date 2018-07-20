/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/arrayModelMappers";
import * as Parameters from "../models/parameters";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a ArrayModel. */
export class ArrayModel {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a ArrayModel.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * Get complex types with array property
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getValidWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ArrayWrapper>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec);
  }

  /**
   * Put complex types with array property
   *
   * @param {ArrayModelPutValidOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putValidWithHttpOperationResponse(options?: Models.ArrayModelPutValidOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putValidOperationSpec);
  }

  /**
   * Get complex types with array property which is empty
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getEmptyWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ArrayWrapper>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEmptyOperationSpec);
  }

  /**
   * Put complex types with array property which is empty
   *
   * @param {ArrayModelPutEmptyOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putEmptyWithHttpOperationResponse(options?: Models.ArrayModelPutEmptyOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putEmptyOperationSpec);
  }

  /**
   * Get complex types with array property while server doesn't provide a response payload
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getNotProvidedWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ArrayWrapper>> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNotProvidedOperationSpec);
  }

  /**
   * Get complex types with array property
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ArrayWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ArrayWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getValid(): Promise<Models.ArrayWrapper>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.ArrayWrapper>;
  getValid(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): any {
    return msRest.responseToBody(this.getValidWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put complex types with array property
   *
   * @param {ArrayModelPutValidOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putValid(): Promise<void>;
  putValid(options: Models.ArrayModelPutValidOptionalParams): Promise<void>;
  putValid(callback: msRest.ServiceCallback<void>): void;
  putValid(options: Models.ArrayModelPutValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putValid(options?: Models.ArrayModelPutValidOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putValidWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get complex types with array property which is empty
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ArrayWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ArrayWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getEmpty(): Promise<Models.ArrayWrapper>;
  getEmpty(options: msRest.RequestOptionsBase): Promise<Models.ArrayWrapper>;
  getEmpty(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): any {
    return msRest.responseToBody(this.getEmptyWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put complex types with array property which is empty
   *
   * @param {ArrayModelPutEmptyOptionalParams} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  putEmpty(): Promise<void>;
  putEmpty(options: Models.ArrayModelPutEmptyOptionalParams): Promise<void>;
  putEmpty(callback: msRest.ServiceCallback<void>): void;
  putEmpty(options: Models.ArrayModelPutEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putEmpty(options?: Models.ArrayModelPutEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putEmptyWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get complex types with array property while server doesn't provide a response payload
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ArrayWrapper} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ArrayWrapper} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getNotProvided(): Promise<Models.ArrayWrapper>;
  getNotProvided(options: msRest.RequestOptionsBase): Promise<Models.ArrayWrapper>;
  getNotProvided(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getNotProvided(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getNotProvided(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): any {
    return msRest.responseToBody(this.getNotProvidedWithHttpOperationResponse.bind(this), options, callback);
  }

}

// Operation Specifications
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/array/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/array/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      arrayProperty: [
        "options",
        "arrayProperty"
      ]
    },
    mapper: {
      ...Mappers.ArrayWrapper,
      required: true
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/array/empty",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/array/empty",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      arrayProperty: [
        "options",
        "arrayProperty"
      ]
    },
    mapper: {
      ...Mappers.ArrayWrapper,
      required: true
    }
  },
  contentType: "application/json; charset=utf-8",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const getNotProvidedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/array/notprovided",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
