/*jshint -W069 */
/**
 * Apidaze is the platform powering the Voip Innovations Programmable Communications product.  For more information, please visit https://voipinnovations.com/programmable.

With this REST API, you will be able to do the following:

- Place and manage calls, send SMS, and send faxes 

- Manage your voice prompts, retrieve recorded conversations, etc.

You can find our JavaScript API and examples at https://github.com/apidaze

To test API methods in Postman, click the Run in Postman button.  In the Postman App, edit the Apidaze.template in your Environments settings to reflect your api_key and api_secret.
 * @class ApidazeRestApi
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var ApidazeRestApi = (function(){
    'use strict';

    var request = require('request');
    var Q = require('q');
    var fileType = require('file-type');

    function ApidazeRestApi(options){
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : 'https://api4.apidaze.io';
        if(this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                  .forEach(function(parameterName) {
                      var parameter = parameters.$queryParameters[parameterName];
                      queryParameters[parameterName] = parameter;
            });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name ApidazeRestApi#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    ApidazeRestApi.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred){
        var req = {
            method: method,
            uri: url,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if(Object.keys(form).length > 0) {
            if (req.headers['Content-Type'] && req.headers['Content-Type'][0] === 'multipart/form-data') {
                delete req.body;
                var keyName = Object.keys(form)[0]
                req.formData = {
                    [keyName]: {
                        value: form[keyName],
                        options: {
                            filename: (fileType(form[keyName]) != null ? `file.${ fileType(form[keyName]).ext }` : `file` )
                        }
                    }
                };
            } else {
                req.form = form;
            }
        }
        if(typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body){
            if(error) {
                deferred.reject(error);
            } else {
                if(/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch(e) {}
                }
                if(response.statusCode === 204) {
                    deferred.resolve({ response: response });
                } else if(response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });
    };


/**
 * Returns the list of the external scripts for your domain.
 * @method
 * @name ApidazeRestApi#ExternalscriptsGet
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
 */
 ApidazeRestApi.prototype.ExternalscriptsGet = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/externalscripts';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Creates a new external script.
Only one external script is allowed per domain.
 * @method
 * @name ApidazeRestApi#ExternalscriptsByApiKeyPost
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {string} parameters.name - 
     * @param {string} parameters.url - 
 */
 ApidazeRestApi.prototype.ExternalscriptsByApiKeyPost = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/externalscripts';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['name'] !== undefined){
                    form['name'] = parameters['name'];
                }

        if(parameters['name'] === undefined){
            deferred.reject(new Error('Missing required  parameter: name'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['url'] !== undefined){
                    form['url'] = parameters['url'];
                }

        if(parameters['url'] === undefined){
            deferred.reject(new Error('Missing required  parameter: url'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Returns the External Script object details by id.
 * @method
 * @name ApidazeRestApi#ExternalscriptsByApiKeyAndScriptIdGet
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {string} parameters.scriptId - 
 */
 ApidazeRestApi.prototype.ExternalscriptsByApiKeyAndScriptIdGet = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/externalscripts/{script_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
        
            path = path.replace('{script_id}', parameters['scriptId']);
        
        


        if(parameters['scriptId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: scriptId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Updates an external script.
 * @method
 * @name ApidazeRestApi#ExternalscriptsByApiKeyAndScriptIdPut
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {string} parameters.scriptId - 
     * @param {string} parameters.name - 
     * @param {string} parameters.url - 
 */
 ApidazeRestApi.prototype.ExternalscriptsByApiKeyAndScriptIdPut = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/externalscripts/{script_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
        
            path = path.replace('{script_id}', parameters['scriptId']);
        
        


        if(parameters['scriptId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: scriptId'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['name'] !== undefined){
                    form['name'] = parameters['name'];
                }

        if(parameters['name'] === undefined){
            deferred.reject(new Error('Missing required  parameter: name'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['url'] !== undefined){
                    form['url'] = parameters['url'];
                }

        if(parameters['url'] === undefined){
            deferred.reject(new Error('Missing required  parameter: url'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Deletes an external script.
 * @method
 * @name ApidazeRestApi#UnnammedEndpointDelete
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {string} parameters.scriptId - The ID of the script.
     * @param {string} parameters.contentType - 
 */
 ApidazeRestApi.prototype.UnnammedEndpointDelete = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/externalscripts/{script_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
        
            path = path.replace('{script_id}', parameters['scriptId']);
        
        


        if(parameters['scriptId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: scriptId'));
            return deferred.promise;
        }
 
        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * This is an example GET that an inbound call to your application will request to your script/application URL.
 * @method
 * @name ApidazeRestApi#UnnammedEndpointGet
 * @param {object} parameters - method options and parameters
     * @param {integer} parameters.destinationNumber - The number being called that belongs to your application.
     * @param {string} parameters.callerUsername - The caller name, if it exists.
     * @param {string} parameters.sessionId - Session ID
     * @param {integer} parameters.callerIdNumber - The number calling your application.
     * @param {string} parameters.uuid - UUID of the call.
     * @param {string} parameters.url - Your external script / application URL.
 */
 ApidazeRestApi.prototype.UnnammedEndpointGet = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];


                if(parameters['destinationNumber'] !== undefined){
                    queryParameters['destination_number'] = parameters['destinationNumber'];
                }
        
        
        


        if(parameters['destinationNumber'] === undefined){
            deferred.reject(new Error('Missing required  parameter: destinationNumber'));
            return deferred.promise;
        }
 

                if(parameters['callerUsername'] !== undefined){
                    queryParameters['caller_username'] = parameters['callerUsername'];
                }
        
        
        


        if(parameters['callerUsername'] === undefined){
            deferred.reject(new Error('Missing required  parameter: callerUsername'));
            return deferred.promise;
        }
 

                if(parameters['sessionId'] !== undefined){
                    queryParameters['session_id'] = parameters['sessionId'];
                }
        
        
        


        if(parameters['sessionId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: sessionId'));
            return deferred.promise;
        }
 

                if(parameters['callerIdNumber'] !== undefined){
                    queryParameters['caller_id_number'] = parameters['callerIdNumber'];
                }
        
        
        


        if(parameters['callerIdNumber'] === undefined){
            deferred.reject(new Error('Missing required  parameter: callerIdNumber'));
            return deferred.promise;
        }
 

                if(parameters['uuid'] !== undefined){
                    queryParameters['uuid'] = parameters['uuid'];
                }
        
        
        


        if(parameters['uuid'] === undefined){
            deferred.reject(new Error('Missing required  parameter: uuid'));
            return deferred.promise;
        }
 

                if(parameters['url'] !== undefined){
                    queryParameters['url'] = parameters['url'];
                }
        
        
        


        if(parameters['url'] === undefined){
            deferred.reject(new Error('Missing required  parameter: url'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * This is an example POST that an inbound SMS to your application will request to your script/application URL.  Keep in mind that if your application replies to the SMS, it must use the Send a SMS method via the REST API, not an XML response.
 * @method
 * @name ApidazeRestApi#UnnammedEndpointPost
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.contentType - 
     * @param {} parameters.body - 
 */
 ApidazeRestApi.prototype.UnnammedEndpointPost = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
        
                if(parameters['contentType'] !== undefined){
                    headers['Content-Type'] = parameters['contentType'];
                }
        


        if(parameters['contentType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: contentType'));
            return deferred.promise;
        }
 
        
        
        
            if(parameters['body'] !== undefined){
                body = parameters['body'];
            }


        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * For an Inbound SMS example request to your configured appliction, please see this example [here](#430697e4-bfa8-ba71-926b-c7c806a1245d)
 * @method
 * @name ApidazeRestApi#SmsSendPost
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {integer} parameters.from - The number to send the text from. Must be an active number on your account.
     * @param {integer} parameters.to - Destination number (no + sign)
     * @param {string} parameters.body - The message to send.
 */
 ApidazeRestApi.prototype.SmsSendPost = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/sms/send';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['from'] !== undefined){
                    form['from'] = parameters['from'];
                }

        if(parameters['from'] === undefined){
            deferred.reject(new Error('Missing required  parameter: from'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['to'] !== undefined){
                    form['to'] = parameters['to'];
                }

        if(parameters['to'] === undefined){
            deferred.reject(new Error('Missing required  parameter: to'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['body'] !== undefined){
                    form['body'] = parameters['body'];
                }

        if(parameters['body'] === undefined){
            deferred.reject(new Error('Missing required  parameter: body'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * TODO: Add Description
 * @method
 * @name ApidazeRestApi#CallsByApiKeyGet
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
 */
 ApidazeRestApi.prototype.CallsByApiKeyGet = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/calls';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * TODO: Add Description
 * @method
 * @name ApidazeRestApi#CallsByApiKeyPost
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {integer} parameters.callerid - The phone number to present as the callerid (country code included, no + sign)
     * @param {integer} parameters.origin - The phone number or SIP account to ring first.
     * @param {integer} parameters.destination - The destination passed as a parameter to your External Script URL.
     * @param {string} parameters.type - The type of the terminal to ring first. Options: "number" or "sipaccount".
 */
 ApidazeRestApi.prototype.CallsByApiKeyPost = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/calls';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['callerid'] !== undefined){
                    form['callerid'] = parameters['callerid'];
                }

        if(parameters['callerid'] === undefined){
            deferred.reject(new Error('Missing required  parameter: callerid'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['origin'] !== undefined){
                    form['origin'] = parameters['origin'];
                }

        if(parameters['origin'] === undefined){
            deferred.reject(new Error('Missing required  parameter: origin'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['destination'] !== undefined){
                    form['destination'] = parameters['destination'];
                }

        if(parameters['destination'] === undefined){
            deferred.reject(new Error('Missing required  parameter: destination'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['type'] !== undefined){
                    form['type'] = parameters['type'];
                }

        if(parameters['type'] === undefined){
            deferred.reject(new Error('Missing required  parameter: type'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * TODO: Add Description
 * @method
 * @name ApidazeRestApi#CallsByApiKeyAndUuidGet
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {string} parameters.uuid - 
 */
 ApidazeRestApi.prototype.CallsByApiKeyAndUuidGet = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/calls/{uuid}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
        
            path = path.replace('{uuid}', parameters['uuid']);
        
        


        if(parameters['uuid'] === undefined){
            deferred.reject(new Error('Missing required  parameter: uuid'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * TODO: Add Description
 * @method
 * @name ApidazeRestApi#CallsByApiKeyAndUuidPost
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {string} parameters.url - The URL to transfer the call to. Just like your ExternalScript, this URL must contain XML instructions.
     * @param {string} parameters.uuid - 
 */
 ApidazeRestApi.prototype.CallsByApiKeyAndUuidPost = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/calls/{uuid}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
        
        
        

                if(parameters['url'] !== undefined){
                    form['url'] = parameters['url'];
                }

        if(parameters['url'] === undefined){
            deferred.reject(new Error('Missing required  parameter: url'));
            return deferred.promise;
        }
 
        
            path = path.replace('{uuid}', parameters['uuid']);
        
        


        if(parameters['uuid'] === undefined){
            deferred.reject(new Error('Missing required  parameter: uuid'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * TODO: Add Description
 * @method
 * @name ApidazeRestApi#MediafilesByApiKeyGet
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
 */
 ApidazeRestApi.prototype.MediafilesByApiKeyGet = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/mediafiles';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * TODO: Add Description
 * @method
 * @name ApidazeRestApi#MediafilesByApiKeyPost
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {string} parameters.name - The name of your media file.
     * @param {string} parameters.mediafile - The location of your media file.
 */
 ApidazeRestApi.prototype.MediafilesByApiKeyPost = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/mediafiles';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 

                if(parameters['name'] !== undefined){
                    queryParameters['name'] = parameters['name'];
                }
        
        
        


        if(parameters['name'] === undefined){
            deferred.reject(new Error('Missing required  parameter: name'));
            return deferred.promise;
        }
 

                if(parameters['mediafile'] !== undefined){
                    queryParameters['mediafile'] = parameters['mediafile'];
                }
        
        
        


        if(parameters['mediafile'] === undefined){
            deferred.reject(new Error('Missing required  parameter: mediafile'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * TODO: Add Description
 * @method
 * @name ApidazeRestApi#MediafilesByApiKeyDelete
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {string} parameters.name - Name of the media file to delete.
 */
 ApidazeRestApi.prototype.MediafilesByApiKeyDelete = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/mediafiles';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 

                if(parameters['name'] !== undefined){
                    queryParameters['name'] = parameters['name'];
                }
        
        
        


        if(parameters['name'] === undefined){
            deferred.reject(new Error('Missing required  parameter: name'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * TODO: Add Description
 * @method
 * @name ApidazeRestApi#RecordingsByApiKeyGet
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
 */
 ApidazeRestApi.prototype.RecordingsByApiKeyGet = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/recordings';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * TODO: Add Description
 * @method
 * @name ApidazeRestApi#RecordingsByApiKeyAndFileNameGet
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {string} parameters.fileName - 
 */
 ApidazeRestApi.prototype.RecordingsByApiKeyAndFileNameGet = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/recordings/{file_name}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
        
            path = path.replace('{file_name}', parameters['fileName']);
        
        


        if(parameters['fileName'] === undefined){
            deferred.reject(new Error('Missing required  parameter: fileName'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * TODO: Add Description
 * @method
 * @name ApidazeRestApi#RecordingsByApiKeyAndFileNameDelete
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
     * @param {string} parameters.name - Name of the media file to delete.
     * @param {string} parameters.fileName - 
 */
 ApidazeRestApi.prototype.RecordingsByApiKeyAndFileNameDelete = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/recordings/{file_name}';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 

                if(parameters['name'] !== undefined){
                    queryParameters['name'] = parameters['name'];
                }
        
        
        


        if(parameters['name'] === undefined){
            deferred.reject(new Error('Missing required  parameter: name'));
            return deferred.promise;
        }
 
        
            path = path.replace('{file_name}', parameters['fileName']);
        
        


        if(parameters['fileName'] === undefined){
            deferred.reject(new Error('Missing required  parameter: fileName'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Validates your API key and secret.
 * @method
 * @name ApidazeRestApi#ValidatesByApiKeyGet
 * @param {object} parameters - method options and parameters
     * @param {string} parameters.apiKey - 
     * @param {string} parameters.apiSecret - 
 */
 ApidazeRestApi.prototype.ValidatesByApiKeyGet = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/{api_key}/validates';
    var body = {}, queryParameters = {}, headers = {}, form = {};

        headers['Accept'] = ['application/json'];
        headers['Content-Type'] = ['application/json'];

        
            path = path.replace('{api_key}', parameters['apiKey']);
        
        


        if(parameters['apiKey'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiKey'));
            return deferred.promise;
        }
 

                if(parameters['apiSecret'] !== undefined){
                    queryParameters['api_secret'] = parameters['apiSecret'];
                }
        
        
        


        if(parameters['apiSecret'] === undefined){
            deferred.reject(new Error('Missing required  parameter: apiSecret'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };

    return ApidazeRestApi;
})();

exports.ApidazeRestApi = ApidazeRestApi;
