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
import * as Mappers from "../models/mappers";
import { AutoRestSwaggerBATFileService } from "../autoRestSwaggerBATFileService";

const WebResource = msRest.WebResource;

/** Class representing a Files. */
export class Files {
  private readonly client: AutoRestSwaggerBATFileService;
  /**
   * Create a Files.
   * @param {AutoRestSwaggerBATFileService} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATFileService) {
    this.client = client;
  }

  /**
   * Get file
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getFileWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<msRest.HttpOperationResponse>> {
    let client = this.client;

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    // Send Request
    httpRequest.rawResponse = true;
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
          },
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "/files/stream/nonempty",
        });
      let statusCode = operationRes.status;

      if (statusCode !== 200) {
        let error = new msRest.RestError(`Unexpected status code: ${statusCode}`);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }

        return Promise.reject(error);
      }

    } catch(error) {
      return Promise.reject(error);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get a large file
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getFileLargeWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<msRest.HttpOperationResponse>> {
    let client = this.client;

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    // Send Request
    httpRequest.rawResponse = true;
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
          },
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "/files/stream/verylarge",
        });
      let statusCode = operationRes.status;

      if (statusCode !== 200) {
        let error = new msRest.RestError(`Unexpected status code: ${statusCode}`);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }

        return Promise.reject(error);
      }

    } catch(error) {
      return Promise.reject(error);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get empty file
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getEmptyFileWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<msRest.HttpOperationResponse>> {
    let client = this.client;

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    // Set Headers
    httpRequest.headers.set("Content-Type", "application/json; charset=utf-8");
    // Send Request
    httpRequest.rawResponse = true;
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
          },
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "/files/stream/empty",
        });
      let statusCode = operationRes.status;

      if (statusCode !== 200) {
        let error = new msRest.RestError(`Unexpected status code: ${statusCode}`);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }

        return Promise.reject(error);
      }

    } catch(error) {
      return Promise.reject(error);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get file
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {msRest.HttpOperationResponse} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getFile(): Promise<msRest.HttpOperationResponse>;
  getFile(options: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
  getFile(callback: msRest.ServiceCallback<msRest.HttpOperationResponse>): void;
  getFile(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<msRest.HttpOperationResponse>): void;
  getFile(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<msRest.HttpOperationResponse>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<msRest.HttpOperationResponse>;
    if (!callback) {
      return this.getFileWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getFileWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get a large file
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {msRest.HttpOperationResponse} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getFileLarge(): Promise<msRest.HttpOperationResponse>;
  getFileLarge(options: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
  getFileLarge(callback: msRest.ServiceCallback<msRest.HttpOperationResponse>): void;
  getFileLarge(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<msRest.HttpOperationResponse>): void;
  getFileLarge(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<msRest.HttpOperationResponse>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<msRest.HttpOperationResponse>;
    if (!callback) {
      return this.getFileLargeWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getFileLargeWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data;
        return cb(err, result, data.request, data);
      });
    }
  }

  /**
   * Get empty file
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {msRest.HttpOperationResponse} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getEmptyFile(): Promise<msRest.HttpOperationResponse>;
  getEmptyFile(options: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse>;
  getEmptyFile(callback: msRest.ServiceCallback<msRest.HttpOperationResponse>): void;
  getEmptyFile(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<msRest.HttpOperationResponse>): void;
  getEmptyFile(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<msRest.HttpOperationResponse>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<msRest.HttpOperationResponse>;
    if (!callback) {
      return this.getEmptyFileWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getEmptyFileWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data;
        return cb(err, result, data.request, data);
      });
    }
  }

}
