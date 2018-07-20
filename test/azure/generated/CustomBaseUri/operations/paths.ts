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
import * as Mappers from "../models/pathsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestParameterizedHostTestClientContext } from "../autoRestParameterizedHostTestClientContext";

/** Class representing a Paths. */
export class Paths {
  private readonly client: AutoRestParameterizedHostTestClientContext;

  /**
   * Create a Paths.
   * @param {AutoRestParameterizedHostTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestParameterizedHostTestClientContext) {
    this.client = client;
  }

  /**
   * Get a 200 to test a valid base uri
   *
   * @param {string} accountName Account Name
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getEmptyWithHttpOperationResponse(accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<void>> {
    return this.client.sendOperationRequest(
      {
        accountName,
        options
      },
      getEmptyOperationSpec);
  }

  /**
   * Get a 200 to test a valid base uri
   *
   * @param {string} accountName Account Name
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
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
  getEmpty(accountName: string): Promise<void>;
  getEmpty(accountName: string, options: msRest.RequestOptionsBase): Promise<void>;
  getEmpty(accountName: string, callback: msRest.ServiceCallback<void>): void;
  getEmpty(accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEmpty(accountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.getEmptyWithHttpOperationResponse.bind(this), accountName, options, callback);
  }

}

// Operation Specifications
const getEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "customuri",
  urlParameters: [
    Parameters.accountName,
    Parameters.host
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};
