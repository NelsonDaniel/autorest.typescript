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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { AutoRestResourceFlatteningTestServiceContext } from "./autoRestResourceFlatteningTestServiceContext";


class AutoRestResourceFlatteningTestService extends AutoRestResourceFlatteningTestServiceContext {
  /**
   * @class
   * Initializes a new instance of the AutoRestResourceFlatteningTestService class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - The preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    super(credentials, baseUri, options);
  }
  // methods on the client.

  /**
   * Put External Resource as an Array
   *
   * @param {AutoRestResourceFlatteningTestServicePutArrayOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putArrayWithHttpOperationResponse(options?: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.sendOperationRequest(
      {
        options
      },
      putArrayOperationSpec);
  }
  // methods on the client.

  /**
   * Get External Resource as an Array
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getArrayWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.FlattenedProduct[]>> {
    return this.sendOperationRequest(
      {
        options
      },
      getArrayOperationSpec);
  }
  // methods on the client.

  /**
   * Put External Resource as a Dictionary
   *
   * @param {AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams} [options] Optional
   * Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putDictionaryWithHttpOperationResponse(options?: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.sendOperationRequest(
      {
        options
      },
      putDictionaryOperationSpec);
  }
  // methods on the client.

  /**
   * Get External Resource as a Dictionary
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getDictionaryWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<{ [propertyName: string]: Models.FlattenedProduct }>> {
    return this.sendOperationRequest(
      {
        options
      },
      getDictionaryOperationSpec);
  }
  // methods on the client.

  /**
   * Put External Resource as a ResourceCollection
   *
   * @param {AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams} [options]
   * Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putResourceCollectionWithHttpOperationResponse(options?: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams): Promise<msRest.HttpOperationResponse<void>> {
    return this.sendOperationRequest(
      {
        options
      },
      putResourceCollectionOperationSpec);
  }
  // methods on the client.

  /**
   * Get External Resource as a ResourceCollection
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getResourceCollectionWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.ResourceCollection>> {
    return this.sendOperationRequest(
      {
        options
      },
      getResourceCollectionOperationSpec);
  }

  /**
   * Put External Resource as an Array
   *
   * @param {AutoRestResourceFlatteningTestServicePutArrayOptionalParams} [options] Optional
   * Parameters.
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
  putArray(): Promise<void>;
  putArray(options: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams): Promise<void>;
  putArray(callback: msRest.ServiceCallback<void>): void;
  putArray(options: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putArray(options?: Models.AutoRestResourceFlatteningTestServicePutArrayOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putArrayWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get External Resource as an Array
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.FlattenedProduct[]} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getArray(): Promise<Models.FlattenedProduct[]>;
  getArray(options: msRest.RequestOptionsBase): Promise<Models.FlattenedProduct[]>;
  getArray(callback: msRest.ServiceCallback<Models.FlattenedProduct[]>): void;
  getArray(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.FlattenedProduct[]>): void;
  getArray(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.FlattenedProduct[]>): any {
    return msRest.responseToBody(this.getArrayWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put External Resource as a Dictionary
   *
   * @param {AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams} [options] Optional
   * Parameters.
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
  putDictionary(): Promise<void>;
  putDictionary(options: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams): Promise<void>;
  putDictionary(callback: msRest.ServiceCallback<void>): void;
  putDictionary(options: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putDictionary(options?: Models.AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putDictionaryWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get External Resource as a Dictionary
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {{ [propertyName: string]: Models.FlattenedProduct }} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getDictionary(): Promise<{ [propertyName: string]: Models.FlattenedProduct }>;
  getDictionary(options: msRest.RequestOptionsBase): Promise<{ [propertyName: string]: Models.FlattenedProduct }>;
  getDictionary(callback: msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): void;
  getDictionary(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): void;
  getDictionary(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<{ [propertyName: string]: Models.FlattenedProduct }>): any {
    return msRest.responseToBody(this.getDictionaryWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Put External Resource as a ResourceCollection
   *
   * @param {AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams} [options]
   * Optional Parameters.
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
  putResourceCollection(): Promise<void>;
  putResourceCollection(options: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams): Promise<void>;
  putResourceCollection(callback: msRest.ServiceCallback<void>): void;
  putResourceCollection(options: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putResourceCollection(options?: Models.AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams, callback?: msRest.ServiceCallback<void>): any {
    return msRest.responseToBody(this.putResourceCollectionWithHttpOperationResponse.bind(this), options, callback);
  }

  /**
   * Get External Resource as a ResourceCollection
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *                      {Models.ResourceCollection} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.ResourceCollection} for more information.
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getResourceCollection(): Promise<Models.ResourceCollection>;
  getResourceCollection(options: msRest.RequestOptionsBase): Promise<Models.ResourceCollection>;
  getResourceCollection(callback: msRest.ServiceCallback<Models.ResourceCollection>): void;
  getResourceCollection(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResourceCollection>): void;
  getResourceCollection(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResourceCollection>): any {
    return msRest.responseToBody(this.getResourceCollectionWithHttpOperationResponse.bind(this), options, callback);
  }
}

// Operation Specifications
const putArrayOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/array",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceArray"
    ],
    mapper: {
      serializedName: "ResourceArray",
      type: {
        name: "Sequence",
        element: {
          serializedName: "ResourceElementType",
          type: {
            name: "Composite",
            className: "Resource"
          }
        }
      }
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

const getArrayOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/array",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            serializedName: "FlattenedProductElementType",
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putDictionaryOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/dictionary",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceDictionary"
    ],
    mapper: {
      serializedName: "ResourceDictionary",
      type: {
        name: "Dictionary",
        value: {
          serializedName: "FlattenedProductElementType",
          type: {
            name: "Composite",
            className: "FlattenedProduct"
          }
        }
      }
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

const getDictionaryOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/dictionary",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Dictionary",
          value: {
            serializedName: "FlattenedProductElementType",
            type: {
              name: "Composite",
              className: "FlattenedProduct"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

const putResourceCollectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "azure/resource-flatten/resourcecollection",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "resourceComplexObject"
    ],
    mapper: Mappers.ResourceCollection
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

const getResourceCollectionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "azure/resource-flatten/resourcecollection",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResourceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer: new msRest.Serializer(Mappers)
};

export { AutoRestResourceFlatteningTestService, Models as AutoRestResourceFlatteningTestServiceModels, Mappers as AutoRestResourceFlatteningTestServiceMappers };
