'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function ApidazeRestApiNode(config) {
        RED.nodes.createNode(this, config);
        this.method = config.method;
        this.ExternalscriptsGet_apiKey = config.ExternalscriptsGet_apiKey;
        this.ExternalscriptsGet_apiKeyType = config.ExternalscriptsGet_apiKeyType || 'str';
        this.ExternalscriptsGet_apiSecret = config.ExternalscriptsGet_apiSecret;
        this.ExternalscriptsGet_apiSecretType = config.ExternalscriptsGet_apiSecretType || 'str';
        this.ExternalscriptsByApiKeyPost_apiKey = config.ExternalscriptsByApiKeyPost_apiKey;
        this.ExternalscriptsByApiKeyPost_apiKeyType = config.ExternalscriptsByApiKeyPost_apiKeyType || 'str';
        this.ExternalscriptsByApiKeyPost_apiSecret = config.ExternalscriptsByApiKeyPost_apiSecret;
        this.ExternalscriptsByApiKeyPost_apiSecretType = config.ExternalscriptsByApiKeyPost_apiSecretType || 'str';
        this.ExternalscriptsByApiKeyPost_name = config.ExternalscriptsByApiKeyPost_name;
        this.ExternalscriptsByApiKeyPost_nameType = config.ExternalscriptsByApiKeyPost_nameType || 'str';
        this.ExternalscriptsByApiKeyPost_url = config.ExternalscriptsByApiKeyPost_url;
        this.ExternalscriptsByApiKeyPost_urlType = config.ExternalscriptsByApiKeyPost_urlType || 'str';
        this.ExternalscriptsByApiKeyAndScriptIdGet_apiKey = config.ExternalscriptsByApiKeyAndScriptIdGet_apiKey;
        this.ExternalscriptsByApiKeyAndScriptIdGet_apiKeyType = config.ExternalscriptsByApiKeyAndScriptIdGet_apiKeyType || 'str';
        this.ExternalscriptsByApiKeyAndScriptIdGet_apiSecret = config.ExternalscriptsByApiKeyAndScriptIdGet_apiSecret;
        this.ExternalscriptsByApiKeyAndScriptIdGet_apiSecretType = config.ExternalscriptsByApiKeyAndScriptIdGet_apiSecretType || 'str';
        this.ExternalscriptsByApiKeyAndScriptIdGet_scriptId = config.ExternalscriptsByApiKeyAndScriptIdGet_scriptId;
        this.ExternalscriptsByApiKeyAndScriptIdGet_scriptIdType = config.ExternalscriptsByApiKeyAndScriptIdGet_scriptIdType || 'str';
        this.ExternalscriptsByApiKeyAndScriptIdPut_apiKey = config.ExternalscriptsByApiKeyAndScriptIdPut_apiKey;
        this.ExternalscriptsByApiKeyAndScriptIdPut_apiKeyType = config.ExternalscriptsByApiKeyAndScriptIdPut_apiKeyType || 'str';
        this.ExternalscriptsByApiKeyAndScriptIdPut_apiSecret = config.ExternalscriptsByApiKeyAndScriptIdPut_apiSecret;
        this.ExternalscriptsByApiKeyAndScriptIdPut_apiSecretType = config.ExternalscriptsByApiKeyAndScriptIdPut_apiSecretType || 'str';
        this.ExternalscriptsByApiKeyAndScriptIdPut_scriptId = config.ExternalscriptsByApiKeyAndScriptIdPut_scriptId;
        this.ExternalscriptsByApiKeyAndScriptIdPut_scriptIdType = config.ExternalscriptsByApiKeyAndScriptIdPut_scriptIdType || 'str';
        this.ExternalscriptsByApiKeyAndScriptIdPut_name = config.ExternalscriptsByApiKeyAndScriptIdPut_name;
        this.ExternalscriptsByApiKeyAndScriptIdPut_nameType = config.ExternalscriptsByApiKeyAndScriptIdPut_nameType || 'str';
        this.ExternalscriptsByApiKeyAndScriptIdPut_url = config.ExternalscriptsByApiKeyAndScriptIdPut_url;
        this.ExternalscriptsByApiKeyAndScriptIdPut_urlType = config.ExternalscriptsByApiKeyAndScriptIdPut_urlType || 'str';
        this.UnnammedEndpointDelete_apiKey = config.UnnammedEndpointDelete_apiKey;
        this.UnnammedEndpointDelete_apiKeyType = config.UnnammedEndpointDelete_apiKeyType || 'str';
        this.UnnammedEndpointDelete_apiSecret = config.UnnammedEndpointDelete_apiSecret;
        this.UnnammedEndpointDelete_apiSecretType = config.UnnammedEndpointDelete_apiSecretType || 'str';
        this.UnnammedEndpointDelete_scriptId = config.UnnammedEndpointDelete_scriptId;
        this.UnnammedEndpointDelete_scriptIdType = config.UnnammedEndpointDelete_scriptIdType || 'str';
        this.UnnammedEndpointDelete_contentType = config.UnnammedEndpointDelete_contentType;
        this.UnnammedEndpointDelete_contentTypeType = config.UnnammedEndpointDelete_contentTypeType || 'str';
        this.UnnammedEndpointGet_destinationNumber = config.UnnammedEndpointGet_destinationNumber;
        this.UnnammedEndpointGet_destinationNumberType = config.UnnammedEndpointGet_destinationNumberType || 'str';
        this.UnnammedEndpointGet_callerUsername = config.UnnammedEndpointGet_callerUsername;
        this.UnnammedEndpointGet_callerUsernameType = config.UnnammedEndpointGet_callerUsernameType || 'str';
        this.UnnammedEndpointGet_sessionId = config.UnnammedEndpointGet_sessionId;
        this.UnnammedEndpointGet_sessionIdType = config.UnnammedEndpointGet_sessionIdType || 'str';
        this.UnnammedEndpointGet_callerIdNumber = config.UnnammedEndpointGet_callerIdNumber;
        this.UnnammedEndpointGet_callerIdNumberType = config.UnnammedEndpointGet_callerIdNumberType || 'str';
        this.UnnammedEndpointGet_uuid = config.UnnammedEndpointGet_uuid;
        this.UnnammedEndpointGet_uuidType = config.UnnammedEndpointGet_uuidType || 'str';
        this.UnnammedEndpointGet_url = config.UnnammedEndpointGet_url;
        this.UnnammedEndpointGet_urlType = config.UnnammedEndpointGet_urlType || 'str';
        this.UnnammedEndpointPost_contentType = config.UnnammedEndpointPost_contentType;
        this.UnnammedEndpointPost_contentTypeType = config.UnnammedEndpointPost_contentTypeType || 'str';
        this.UnnammedEndpointPost_body = config.UnnammedEndpointPost_body;
        this.UnnammedEndpointPost_bodyType = config.UnnammedEndpointPost_bodyType || 'str';
        this.SmsSendPost_apiKey = config.SmsSendPost_apiKey;
        this.SmsSendPost_apiKeyType = config.SmsSendPost_apiKeyType || 'str';
        this.SmsSendPost_apiSecret = config.SmsSendPost_apiSecret;
        this.SmsSendPost_apiSecretType = config.SmsSendPost_apiSecretType || 'str';
        this.SmsSendPost_from = config.SmsSendPost_from;
        this.SmsSendPost_fromType = config.SmsSendPost_fromType || 'str';
        this.SmsSendPost_to = config.SmsSendPost_to;
        this.SmsSendPost_toType = config.SmsSendPost_toType || 'str';
        this.SmsSendPost_body = config.SmsSendPost_body;
        this.SmsSendPost_bodyType = config.SmsSendPost_bodyType || 'str';
        this.CallsByApiKeyGet_apiKey = config.CallsByApiKeyGet_apiKey;
        this.CallsByApiKeyGet_apiKeyType = config.CallsByApiKeyGet_apiKeyType || 'str';
        this.CallsByApiKeyGet_apiSecret = config.CallsByApiKeyGet_apiSecret;
        this.CallsByApiKeyGet_apiSecretType = config.CallsByApiKeyGet_apiSecretType || 'str';
        this.CallsByApiKeyPost_apiKey = config.CallsByApiKeyPost_apiKey;
        this.CallsByApiKeyPost_apiKeyType = config.CallsByApiKeyPost_apiKeyType || 'str';
        this.CallsByApiKeyPost_apiSecret = config.CallsByApiKeyPost_apiSecret;
        this.CallsByApiKeyPost_apiSecretType = config.CallsByApiKeyPost_apiSecretType || 'str';
        this.CallsByApiKeyPost_callerid = config.CallsByApiKeyPost_callerid;
        this.CallsByApiKeyPost_calleridType = config.CallsByApiKeyPost_calleridType || 'str';
        this.CallsByApiKeyPost_origin = config.CallsByApiKeyPost_origin;
        this.CallsByApiKeyPost_originType = config.CallsByApiKeyPost_originType || 'str';
        this.CallsByApiKeyPost_destination = config.CallsByApiKeyPost_destination;
        this.CallsByApiKeyPost_destinationType = config.CallsByApiKeyPost_destinationType || 'str';
        this.CallsByApiKeyPost_type = config.CallsByApiKeyPost_type;
        this.CallsByApiKeyPost_typeType = config.CallsByApiKeyPost_typeType || 'str';
        this.CallsByApiKeyAndUuidGet_apiKey = config.CallsByApiKeyAndUuidGet_apiKey;
        this.CallsByApiKeyAndUuidGet_apiKeyType = config.CallsByApiKeyAndUuidGet_apiKeyType || 'str';
        this.CallsByApiKeyAndUuidGet_apiSecret = config.CallsByApiKeyAndUuidGet_apiSecret;
        this.CallsByApiKeyAndUuidGet_apiSecretType = config.CallsByApiKeyAndUuidGet_apiSecretType || 'str';
        this.CallsByApiKeyAndUuidGet_uuid = config.CallsByApiKeyAndUuidGet_uuid;
        this.CallsByApiKeyAndUuidGet_uuidType = config.CallsByApiKeyAndUuidGet_uuidType || 'str';
        this.CallsByApiKeyAndUuidPost_apiKey = config.CallsByApiKeyAndUuidPost_apiKey;
        this.CallsByApiKeyAndUuidPost_apiKeyType = config.CallsByApiKeyAndUuidPost_apiKeyType || 'str';
        this.CallsByApiKeyAndUuidPost_apiSecret = config.CallsByApiKeyAndUuidPost_apiSecret;
        this.CallsByApiKeyAndUuidPost_apiSecretType = config.CallsByApiKeyAndUuidPost_apiSecretType || 'str';
        this.CallsByApiKeyAndUuidPost_url = config.CallsByApiKeyAndUuidPost_url;
        this.CallsByApiKeyAndUuidPost_urlType = config.CallsByApiKeyAndUuidPost_urlType || 'str';
        this.CallsByApiKeyAndUuidPost_uuid = config.CallsByApiKeyAndUuidPost_uuid;
        this.CallsByApiKeyAndUuidPost_uuidType = config.CallsByApiKeyAndUuidPost_uuidType || 'str';
        this.MediafilesByApiKeyGet_apiKey = config.MediafilesByApiKeyGet_apiKey;
        this.MediafilesByApiKeyGet_apiKeyType = config.MediafilesByApiKeyGet_apiKeyType || 'str';
        this.MediafilesByApiKeyGet_apiSecret = config.MediafilesByApiKeyGet_apiSecret;
        this.MediafilesByApiKeyGet_apiSecretType = config.MediafilesByApiKeyGet_apiSecretType || 'str';
        this.MediafilesByApiKeyPost_apiKey = config.MediafilesByApiKeyPost_apiKey;
        this.MediafilesByApiKeyPost_apiKeyType = config.MediafilesByApiKeyPost_apiKeyType || 'str';
        this.MediafilesByApiKeyPost_apiSecret = config.MediafilesByApiKeyPost_apiSecret;
        this.MediafilesByApiKeyPost_apiSecretType = config.MediafilesByApiKeyPost_apiSecretType || 'str';
        this.MediafilesByApiKeyPost_name = config.MediafilesByApiKeyPost_name;
        this.MediafilesByApiKeyPost_nameType = config.MediafilesByApiKeyPost_nameType || 'str';
        this.MediafilesByApiKeyPost_mediafile = config.MediafilesByApiKeyPost_mediafile;
        this.MediafilesByApiKeyPost_mediafileType = config.MediafilesByApiKeyPost_mediafileType || 'str';
        this.MediafilesByApiKeyDelete_apiKey = config.MediafilesByApiKeyDelete_apiKey;
        this.MediafilesByApiKeyDelete_apiKeyType = config.MediafilesByApiKeyDelete_apiKeyType || 'str';
        this.MediafilesByApiKeyDelete_apiSecret = config.MediafilesByApiKeyDelete_apiSecret;
        this.MediafilesByApiKeyDelete_apiSecretType = config.MediafilesByApiKeyDelete_apiSecretType || 'str';
        this.MediafilesByApiKeyDelete_name = config.MediafilesByApiKeyDelete_name;
        this.MediafilesByApiKeyDelete_nameType = config.MediafilesByApiKeyDelete_nameType || 'str';
        this.RecordingsByApiKeyGet_apiKey = config.RecordingsByApiKeyGet_apiKey;
        this.RecordingsByApiKeyGet_apiKeyType = config.RecordingsByApiKeyGet_apiKeyType || 'str';
        this.RecordingsByApiKeyGet_apiSecret = config.RecordingsByApiKeyGet_apiSecret;
        this.RecordingsByApiKeyGet_apiSecretType = config.RecordingsByApiKeyGet_apiSecretType || 'str';
        this.RecordingsByApiKeyAndFileNameGet_apiKey = config.RecordingsByApiKeyAndFileNameGet_apiKey;
        this.RecordingsByApiKeyAndFileNameGet_apiKeyType = config.RecordingsByApiKeyAndFileNameGet_apiKeyType || 'str';
        this.RecordingsByApiKeyAndFileNameGet_apiSecret = config.RecordingsByApiKeyAndFileNameGet_apiSecret;
        this.RecordingsByApiKeyAndFileNameGet_apiSecretType = config.RecordingsByApiKeyAndFileNameGet_apiSecretType || 'str';
        this.RecordingsByApiKeyAndFileNameGet_fileName = config.RecordingsByApiKeyAndFileNameGet_fileName;
        this.RecordingsByApiKeyAndFileNameGet_fileNameType = config.RecordingsByApiKeyAndFileNameGet_fileNameType || 'str';
        this.RecordingsByApiKeyAndFileNameDelete_apiKey = config.RecordingsByApiKeyAndFileNameDelete_apiKey;
        this.RecordingsByApiKeyAndFileNameDelete_apiKeyType = config.RecordingsByApiKeyAndFileNameDelete_apiKeyType || 'str';
        this.RecordingsByApiKeyAndFileNameDelete_apiSecret = config.RecordingsByApiKeyAndFileNameDelete_apiSecret;
        this.RecordingsByApiKeyAndFileNameDelete_apiSecretType = config.RecordingsByApiKeyAndFileNameDelete_apiSecretType || 'str';
        this.RecordingsByApiKeyAndFileNameDelete_name = config.RecordingsByApiKeyAndFileNameDelete_name;
        this.RecordingsByApiKeyAndFileNameDelete_nameType = config.RecordingsByApiKeyAndFileNameDelete_nameType || 'str';
        this.RecordingsByApiKeyAndFileNameDelete_fileName = config.RecordingsByApiKeyAndFileNameDelete_fileName;
        this.RecordingsByApiKeyAndFileNameDelete_fileNameType = config.RecordingsByApiKeyAndFileNameDelete_fileNameType || 'str';
        this.ValidatesByApiKeyGet_apiKey = config.ValidatesByApiKeyGet_apiKey;
        this.ValidatesByApiKeyGet_apiKeyType = config.ValidatesByApiKeyGet_apiKeyType || 'str';
        this.ValidatesByApiKeyGet_apiSecret = config.ValidatesByApiKeyGet_apiSecret;
        this.ValidatesByApiKeyGet_apiSecretType = config.ValidatesByApiKeyGet_apiSecretType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client = new lib.ApidazeRestApi();
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'ExternalscriptsGet') {
                var ExternalscriptsGet_parameters = [];
                var ExternalscriptsGet_nodeParam;
                var ExternalscriptsGet_nodeParamType;

                ExternalscriptsGet_nodeParam = node.ExternalscriptsGet_apiKey;
                ExternalscriptsGet_nodeParamType = node.ExternalscriptsGet_apiKeyType;
                if (ExternalscriptsGet_nodeParamType === 'str') {
                    ExternalscriptsGet_parameters.apiKey = ExternalscriptsGet_nodeParam || '';
                } else {
                    ExternalscriptsGet_parameters.apiKey = RED.util.getMessageProperty(msg, ExternalscriptsGet_nodeParam);
                }
                ExternalscriptsGet_parameters.apiKey = !!ExternalscriptsGet_parameters.apiKey ? ExternalscriptsGet_parameters.apiKey : msg.payload;
                
                ExternalscriptsGet_nodeParam = node.ExternalscriptsGet_apiSecret;
                ExternalscriptsGet_nodeParamType = node.ExternalscriptsGet_apiSecretType;
                if (ExternalscriptsGet_nodeParamType === 'str') {
                    ExternalscriptsGet_parameters.apiSecret = ExternalscriptsGet_nodeParam || '';
                } else {
                    ExternalscriptsGet_parameters.apiSecret = RED.util.getMessageProperty(msg, ExternalscriptsGet_nodeParam);
                }
                ExternalscriptsGet_parameters.apiSecret = !!ExternalscriptsGet_parameters.apiSecret ? ExternalscriptsGet_parameters.apiSecret : msg.payload;
                                result = client.ExternalscriptsGet(ExternalscriptsGet_parameters);
            }
            if (!errorFlag && node.method === 'ExternalscriptsByApiKeyPost') {
                var ExternalscriptsByApiKeyPost_parameters = [];
                var ExternalscriptsByApiKeyPost_nodeParam;
                var ExternalscriptsByApiKeyPost_nodeParamType;

                ExternalscriptsByApiKeyPost_nodeParam = node.ExternalscriptsByApiKeyPost_apiKey;
                ExternalscriptsByApiKeyPost_nodeParamType = node.ExternalscriptsByApiKeyPost_apiKeyType;
                if (ExternalscriptsByApiKeyPost_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyPost_parameters.apiKey = ExternalscriptsByApiKeyPost_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyPost_parameters.apiKey = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyPost_nodeParam);
                }
                ExternalscriptsByApiKeyPost_parameters.apiKey = !!ExternalscriptsByApiKeyPost_parameters.apiKey ? ExternalscriptsByApiKeyPost_parameters.apiKey : msg.payload;
                
                ExternalscriptsByApiKeyPost_nodeParam = node.ExternalscriptsByApiKeyPost_apiSecret;
                ExternalscriptsByApiKeyPost_nodeParamType = node.ExternalscriptsByApiKeyPost_apiSecretType;
                if (ExternalscriptsByApiKeyPost_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyPost_parameters.apiSecret = ExternalscriptsByApiKeyPost_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyPost_parameters.apiSecret = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyPost_nodeParam);
                }
                ExternalscriptsByApiKeyPost_parameters.apiSecret = !!ExternalscriptsByApiKeyPost_parameters.apiSecret ? ExternalscriptsByApiKeyPost_parameters.apiSecret : msg.payload;
                
                ExternalscriptsByApiKeyPost_nodeParam = node.ExternalscriptsByApiKeyPost_name;
                ExternalscriptsByApiKeyPost_nodeParamType = node.ExternalscriptsByApiKeyPost_nameType;
                if (ExternalscriptsByApiKeyPost_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyPost_parameters.name = ExternalscriptsByApiKeyPost_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyPost_parameters.name = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyPost_nodeParam);
                }
                ExternalscriptsByApiKeyPost_parameters.name = !!ExternalscriptsByApiKeyPost_parameters.name ? ExternalscriptsByApiKeyPost_parameters.name : msg.payload;
                
                ExternalscriptsByApiKeyPost_nodeParam = node.ExternalscriptsByApiKeyPost_url;
                ExternalscriptsByApiKeyPost_nodeParamType = node.ExternalscriptsByApiKeyPost_urlType;
                if (ExternalscriptsByApiKeyPost_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyPost_parameters.url = ExternalscriptsByApiKeyPost_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyPost_parameters.url = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyPost_nodeParam);
                }
                ExternalscriptsByApiKeyPost_parameters.url = !!ExternalscriptsByApiKeyPost_parameters.url ? ExternalscriptsByApiKeyPost_parameters.url : msg.payload;
                                result = client.ExternalscriptsByApiKeyPost(ExternalscriptsByApiKeyPost_parameters);
            }
            if (!errorFlag && node.method === 'ExternalscriptsByApiKeyAndScriptIdGet') {
                var ExternalscriptsByApiKeyAndScriptIdGet_parameters = [];
                var ExternalscriptsByApiKeyAndScriptIdGet_nodeParam;
                var ExternalscriptsByApiKeyAndScriptIdGet_nodeParamType;

                ExternalscriptsByApiKeyAndScriptIdGet_nodeParam = node.ExternalscriptsByApiKeyAndScriptIdGet_apiKey;
                ExternalscriptsByApiKeyAndScriptIdGet_nodeParamType = node.ExternalscriptsByApiKeyAndScriptIdGet_apiKeyType;
                if (ExternalscriptsByApiKeyAndScriptIdGet_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyAndScriptIdGet_parameters.apiKey = ExternalscriptsByApiKeyAndScriptIdGet_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyAndScriptIdGet_parameters.apiKey = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyAndScriptIdGet_nodeParam);
                }
                ExternalscriptsByApiKeyAndScriptIdGet_parameters.apiKey = !!ExternalscriptsByApiKeyAndScriptIdGet_parameters.apiKey ? ExternalscriptsByApiKeyAndScriptIdGet_parameters.apiKey : msg.payload;
                
                ExternalscriptsByApiKeyAndScriptIdGet_nodeParam = node.ExternalscriptsByApiKeyAndScriptIdGet_apiSecret;
                ExternalscriptsByApiKeyAndScriptIdGet_nodeParamType = node.ExternalscriptsByApiKeyAndScriptIdGet_apiSecretType;
                if (ExternalscriptsByApiKeyAndScriptIdGet_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyAndScriptIdGet_parameters.apiSecret = ExternalscriptsByApiKeyAndScriptIdGet_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyAndScriptIdGet_parameters.apiSecret = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyAndScriptIdGet_nodeParam);
                }
                ExternalscriptsByApiKeyAndScriptIdGet_parameters.apiSecret = !!ExternalscriptsByApiKeyAndScriptIdGet_parameters.apiSecret ? ExternalscriptsByApiKeyAndScriptIdGet_parameters.apiSecret : msg.payload;
                
                ExternalscriptsByApiKeyAndScriptIdGet_nodeParam = node.ExternalscriptsByApiKeyAndScriptIdGet_scriptId;
                ExternalscriptsByApiKeyAndScriptIdGet_nodeParamType = node.ExternalscriptsByApiKeyAndScriptIdGet_scriptIdType;
                if (ExternalscriptsByApiKeyAndScriptIdGet_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyAndScriptIdGet_parameters.scriptId = ExternalscriptsByApiKeyAndScriptIdGet_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyAndScriptIdGet_parameters.scriptId = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyAndScriptIdGet_nodeParam);
                }
                ExternalscriptsByApiKeyAndScriptIdGet_parameters.scriptId = !!ExternalscriptsByApiKeyAndScriptIdGet_parameters.scriptId ? ExternalscriptsByApiKeyAndScriptIdGet_parameters.scriptId : msg.payload;
                                result = client.ExternalscriptsByApiKeyAndScriptIdGet(ExternalscriptsByApiKeyAndScriptIdGet_parameters);
            }
            if (!errorFlag && node.method === 'ExternalscriptsByApiKeyAndScriptIdPut') {
                var ExternalscriptsByApiKeyAndScriptIdPut_parameters = [];
                var ExternalscriptsByApiKeyAndScriptIdPut_nodeParam;
                var ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType;

                ExternalscriptsByApiKeyAndScriptIdPut_nodeParam = node.ExternalscriptsByApiKeyAndScriptIdPut_apiKey;
                ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType = node.ExternalscriptsByApiKeyAndScriptIdPut_apiKeyType;
                if (ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyAndScriptIdPut_parameters.apiKey = ExternalscriptsByApiKeyAndScriptIdPut_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyAndScriptIdPut_parameters.apiKey = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyAndScriptIdPut_nodeParam);
                }
                ExternalscriptsByApiKeyAndScriptIdPut_parameters.apiKey = !!ExternalscriptsByApiKeyAndScriptIdPut_parameters.apiKey ? ExternalscriptsByApiKeyAndScriptIdPut_parameters.apiKey : msg.payload;
                
                ExternalscriptsByApiKeyAndScriptIdPut_nodeParam = node.ExternalscriptsByApiKeyAndScriptIdPut_apiSecret;
                ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType = node.ExternalscriptsByApiKeyAndScriptIdPut_apiSecretType;
                if (ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyAndScriptIdPut_parameters.apiSecret = ExternalscriptsByApiKeyAndScriptIdPut_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyAndScriptIdPut_parameters.apiSecret = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyAndScriptIdPut_nodeParam);
                }
                ExternalscriptsByApiKeyAndScriptIdPut_parameters.apiSecret = !!ExternalscriptsByApiKeyAndScriptIdPut_parameters.apiSecret ? ExternalscriptsByApiKeyAndScriptIdPut_parameters.apiSecret : msg.payload;
                
                ExternalscriptsByApiKeyAndScriptIdPut_nodeParam = node.ExternalscriptsByApiKeyAndScriptIdPut_scriptId;
                ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType = node.ExternalscriptsByApiKeyAndScriptIdPut_scriptIdType;
                if (ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyAndScriptIdPut_parameters.scriptId = ExternalscriptsByApiKeyAndScriptIdPut_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyAndScriptIdPut_parameters.scriptId = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyAndScriptIdPut_nodeParam);
                }
                ExternalscriptsByApiKeyAndScriptIdPut_parameters.scriptId = !!ExternalscriptsByApiKeyAndScriptIdPut_parameters.scriptId ? ExternalscriptsByApiKeyAndScriptIdPut_parameters.scriptId : msg.payload;
                
                ExternalscriptsByApiKeyAndScriptIdPut_nodeParam = node.ExternalscriptsByApiKeyAndScriptIdPut_name;
                ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType = node.ExternalscriptsByApiKeyAndScriptIdPut_nameType;
                if (ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyAndScriptIdPut_parameters.name = ExternalscriptsByApiKeyAndScriptIdPut_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyAndScriptIdPut_parameters.name = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyAndScriptIdPut_nodeParam);
                }
                ExternalscriptsByApiKeyAndScriptIdPut_parameters.name = !!ExternalscriptsByApiKeyAndScriptIdPut_parameters.name ? ExternalscriptsByApiKeyAndScriptIdPut_parameters.name : msg.payload;
                
                ExternalscriptsByApiKeyAndScriptIdPut_nodeParam = node.ExternalscriptsByApiKeyAndScriptIdPut_url;
                ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType = node.ExternalscriptsByApiKeyAndScriptIdPut_urlType;
                if (ExternalscriptsByApiKeyAndScriptIdPut_nodeParamType === 'str') {
                    ExternalscriptsByApiKeyAndScriptIdPut_parameters.url = ExternalscriptsByApiKeyAndScriptIdPut_nodeParam || '';
                } else {
                    ExternalscriptsByApiKeyAndScriptIdPut_parameters.url = RED.util.getMessageProperty(msg, ExternalscriptsByApiKeyAndScriptIdPut_nodeParam);
                }
                ExternalscriptsByApiKeyAndScriptIdPut_parameters.url = !!ExternalscriptsByApiKeyAndScriptIdPut_parameters.url ? ExternalscriptsByApiKeyAndScriptIdPut_parameters.url : msg.payload;
                                result = client.ExternalscriptsByApiKeyAndScriptIdPut(ExternalscriptsByApiKeyAndScriptIdPut_parameters);
            }
            if (!errorFlag && node.method === 'UnnammedEndpointDelete') {
                var UnnammedEndpointDelete_parameters = [];
                var UnnammedEndpointDelete_nodeParam;
                var UnnammedEndpointDelete_nodeParamType;

                UnnammedEndpointDelete_nodeParam = node.UnnammedEndpointDelete_apiKey;
                UnnammedEndpointDelete_nodeParamType = node.UnnammedEndpointDelete_apiKeyType;
                if (UnnammedEndpointDelete_nodeParamType === 'str') {
                    UnnammedEndpointDelete_parameters.apiKey = UnnammedEndpointDelete_nodeParam || '';
                } else {
                    UnnammedEndpointDelete_parameters.apiKey = RED.util.getMessageProperty(msg, UnnammedEndpointDelete_nodeParam);
                }
                UnnammedEndpointDelete_parameters.apiKey = !!UnnammedEndpointDelete_parameters.apiKey ? UnnammedEndpointDelete_parameters.apiKey : msg.payload;
                
                UnnammedEndpointDelete_nodeParam = node.UnnammedEndpointDelete_apiSecret;
                UnnammedEndpointDelete_nodeParamType = node.UnnammedEndpointDelete_apiSecretType;
                if (UnnammedEndpointDelete_nodeParamType === 'str') {
                    UnnammedEndpointDelete_parameters.apiSecret = UnnammedEndpointDelete_nodeParam || '';
                } else {
                    UnnammedEndpointDelete_parameters.apiSecret = RED.util.getMessageProperty(msg, UnnammedEndpointDelete_nodeParam);
                }
                UnnammedEndpointDelete_parameters.apiSecret = !!UnnammedEndpointDelete_parameters.apiSecret ? UnnammedEndpointDelete_parameters.apiSecret : msg.payload;
                
                UnnammedEndpointDelete_nodeParam = node.UnnammedEndpointDelete_scriptId;
                UnnammedEndpointDelete_nodeParamType = node.UnnammedEndpointDelete_scriptIdType;
                if (UnnammedEndpointDelete_nodeParamType === 'str') {
                    UnnammedEndpointDelete_parameters.scriptId = UnnammedEndpointDelete_nodeParam || '';
                } else {
                    UnnammedEndpointDelete_parameters.scriptId = RED.util.getMessageProperty(msg, UnnammedEndpointDelete_nodeParam);
                }
                UnnammedEndpointDelete_parameters.scriptId = !!UnnammedEndpointDelete_parameters.scriptId ? UnnammedEndpointDelete_parameters.scriptId : msg.payload;
                
                UnnammedEndpointDelete_nodeParam = node.UnnammedEndpointDelete_contentType;
                UnnammedEndpointDelete_nodeParamType = node.UnnammedEndpointDelete_contentTypeType;
                if (UnnammedEndpointDelete_nodeParamType === 'str') {
                    UnnammedEndpointDelete_parameters.contentType = UnnammedEndpointDelete_nodeParam || '';
                } else {
                    UnnammedEndpointDelete_parameters.contentType = RED.util.getMessageProperty(msg, UnnammedEndpointDelete_nodeParam);
                }
                UnnammedEndpointDelete_parameters.contentType = !!UnnammedEndpointDelete_parameters.contentType ? UnnammedEndpointDelete_parameters.contentType : msg.payload;
                                result = client.UnnammedEndpointDelete(UnnammedEndpointDelete_parameters);
            }
            if (!errorFlag && node.method === 'UnnammedEndpointGet') {
                var UnnammedEndpointGet_parameters = [];
                var UnnammedEndpointGet_nodeParam;
                var UnnammedEndpointGet_nodeParamType;

                UnnammedEndpointGet_nodeParam = node.UnnammedEndpointGet_destinationNumber;
                UnnammedEndpointGet_nodeParamType = node.UnnammedEndpointGet_destinationNumberType;
                if (UnnammedEndpointGet_nodeParamType === 'str') {
                    UnnammedEndpointGet_parameters.destinationNumber = UnnammedEndpointGet_nodeParam || '';
                } else {
                    UnnammedEndpointGet_parameters.destinationNumber = RED.util.getMessageProperty(msg, UnnammedEndpointGet_nodeParam);
                }
                UnnammedEndpointGet_parameters.destinationNumber = !!UnnammedEndpointGet_parameters.destinationNumber ? UnnammedEndpointGet_parameters.destinationNumber : msg.payload;
                
                UnnammedEndpointGet_nodeParam = node.UnnammedEndpointGet_callerUsername;
                UnnammedEndpointGet_nodeParamType = node.UnnammedEndpointGet_callerUsernameType;
                if (UnnammedEndpointGet_nodeParamType === 'str') {
                    UnnammedEndpointGet_parameters.callerUsername = UnnammedEndpointGet_nodeParam || '';
                } else {
                    UnnammedEndpointGet_parameters.callerUsername = RED.util.getMessageProperty(msg, UnnammedEndpointGet_nodeParam);
                }
                UnnammedEndpointGet_parameters.callerUsername = !!UnnammedEndpointGet_parameters.callerUsername ? UnnammedEndpointGet_parameters.callerUsername : msg.payload;
                
                UnnammedEndpointGet_nodeParam = node.UnnammedEndpointGet_sessionId;
                UnnammedEndpointGet_nodeParamType = node.UnnammedEndpointGet_sessionIdType;
                if (UnnammedEndpointGet_nodeParamType === 'str') {
                    UnnammedEndpointGet_parameters.sessionId = UnnammedEndpointGet_nodeParam || '';
                } else {
                    UnnammedEndpointGet_parameters.sessionId = RED.util.getMessageProperty(msg, UnnammedEndpointGet_nodeParam);
                }
                UnnammedEndpointGet_parameters.sessionId = !!UnnammedEndpointGet_parameters.sessionId ? UnnammedEndpointGet_parameters.sessionId : msg.payload;
                
                UnnammedEndpointGet_nodeParam = node.UnnammedEndpointGet_callerIdNumber;
                UnnammedEndpointGet_nodeParamType = node.UnnammedEndpointGet_callerIdNumberType;
                if (UnnammedEndpointGet_nodeParamType === 'str') {
                    UnnammedEndpointGet_parameters.callerIdNumber = UnnammedEndpointGet_nodeParam || '';
                } else {
                    UnnammedEndpointGet_parameters.callerIdNumber = RED.util.getMessageProperty(msg, UnnammedEndpointGet_nodeParam);
                }
                UnnammedEndpointGet_parameters.callerIdNumber = !!UnnammedEndpointGet_parameters.callerIdNumber ? UnnammedEndpointGet_parameters.callerIdNumber : msg.payload;
                
                UnnammedEndpointGet_nodeParam = node.UnnammedEndpointGet_uuid;
                UnnammedEndpointGet_nodeParamType = node.UnnammedEndpointGet_uuidType;
                if (UnnammedEndpointGet_nodeParamType === 'str') {
                    UnnammedEndpointGet_parameters.uuid = UnnammedEndpointGet_nodeParam || '';
                } else {
                    UnnammedEndpointGet_parameters.uuid = RED.util.getMessageProperty(msg, UnnammedEndpointGet_nodeParam);
                }
                UnnammedEndpointGet_parameters.uuid = !!UnnammedEndpointGet_parameters.uuid ? UnnammedEndpointGet_parameters.uuid : msg.payload;
                
                UnnammedEndpointGet_nodeParam = node.UnnammedEndpointGet_url;
                UnnammedEndpointGet_nodeParamType = node.UnnammedEndpointGet_urlType;
                if (UnnammedEndpointGet_nodeParamType === 'str') {
                    UnnammedEndpointGet_parameters.url = UnnammedEndpointGet_nodeParam || '';
                } else {
                    UnnammedEndpointGet_parameters.url = RED.util.getMessageProperty(msg, UnnammedEndpointGet_nodeParam);
                }
                UnnammedEndpointGet_parameters.url = !!UnnammedEndpointGet_parameters.url ? UnnammedEndpointGet_parameters.url : msg.payload;
                                result = client.UnnammedEndpointGet(UnnammedEndpointGet_parameters);
            }
            if (!errorFlag && node.method === 'UnnammedEndpointPost') {
                var UnnammedEndpointPost_parameters = [];
                var UnnammedEndpointPost_nodeParam;
                var UnnammedEndpointPost_nodeParamType;

                UnnammedEndpointPost_nodeParam = node.UnnammedEndpointPost_contentType;
                UnnammedEndpointPost_nodeParamType = node.UnnammedEndpointPost_contentTypeType;
                if (UnnammedEndpointPost_nodeParamType === 'str') {
                    UnnammedEndpointPost_parameters.contentType = UnnammedEndpointPost_nodeParam || '';
                } else {
                    UnnammedEndpointPost_parameters.contentType = RED.util.getMessageProperty(msg, UnnammedEndpointPost_nodeParam);
                }
                UnnammedEndpointPost_parameters.contentType = !!UnnammedEndpointPost_parameters.contentType ? UnnammedEndpointPost_parameters.contentType : msg.payload;
                
                if (typeof msg.payload === 'object') {
                    UnnammedEndpointPost_parameters.body = msg.payload;
                } else {
                    node.error('Unsupported type: \'' + (typeof msg.payload) + '\', ' + 'msg.payload must be JSON object or buffer.', msg);
                    errorFlag = true;
                }
                                result = client.UnnammedEndpointPost(UnnammedEndpointPost_parameters);
            }
            if (!errorFlag && node.method === 'SmsSendPost') {
                var SmsSendPost_parameters = [];
                var SmsSendPost_nodeParam;
                var SmsSendPost_nodeParamType;

                SmsSendPost_nodeParam = node.SmsSendPost_apiKey;
                SmsSendPost_nodeParamType = node.SmsSendPost_apiKeyType;
                if (SmsSendPost_nodeParamType === 'str') {
                    SmsSendPost_parameters.apiKey = SmsSendPost_nodeParam || '';
                } else {
                    SmsSendPost_parameters.apiKey = RED.util.getMessageProperty(msg, SmsSendPost_nodeParam);
                }
                SmsSendPost_parameters.apiKey = !!SmsSendPost_parameters.apiKey ? SmsSendPost_parameters.apiKey : msg.payload;
                
                SmsSendPost_nodeParam = node.SmsSendPost_apiSecret;
                SmsSendPost_nodeParamType = node.SmsSendPost_apiSecretType;
                if (SmsSendPost_nodeParamType === 'str') {
                    SmsSendPost_parameters.apiSecret = SmsSendPost_nodeParam || '';
                } else {
                    SmsSendPost_parameters.apiSecret = RED.util.getMessageProperty(msg, SmsSendPost_nodeParam);
                }
                SmsSendPost_parameters.apiSecret = !!SmsSendPost_parameters.apiSecret ? SmsSendPost_parameters.apiSecret : msg.payload;
                
                SmsSendPost_nodeParam = node.SmsSendPost_from;
                SmsSendPost_nodeParamType = node.SmsSendPost_fromType;
                if (SmsSendPost_nodeParamType === 'str') {
                    SmsSendPost_parameters.from = SmsSendPost_nodeParam || '';
                } else {
                    SmsSendPost_parameters.from = RED.util.getMessageProperty(msg, SmsSendPost_nodeParam);
                }
                SmsSendPost_parameters.from = !!SmsSendPost_parameters.from ? SmsSendPost_parameters.from : msg.payload;
                
                SmsSendPost_nodeParam = node.SmsSendPost_to;
                SmsSendPost_nodeParamType = node.SmsSendPost_toType;
                if (SmsSendPost_nodeParamType === 'str') {
                    SmsSendPost_parameters.to = SmsSendPost_nodeParam || '';
                } else {
                    SmsSendPost_parameters.to = RED.util.getMessageProperty(msg, SmsSendPost_nodeParam);
                }
                SmsSendPost_parameters.to = !!SmsSendPost_parameters.to ? SmsSendPost_parameters.to : msg.payload;
                
                SmsSendPost_nodeParam = node.SmsSendPost_body;
                SmsSendPost_nodeParamType = node.SmsSendPost_bodyType;
                if (SmsSendPost_nodeParamType === 'str') {
                    SmsSendPost_parameters.body = SmsSendPost_nodeParam || '';
                } else {
                    SmsSendPost_parameters.body = RED.util.getMessageProperty(msg, SmsSendPost_nodeParam);
                }
                SmsSendPost_parameters.body = !!SmsSendPost_parameters.body ? SmsSendPost_parameters.body : msg.payload;
                
                                result = client.SmsSendPost(SmsSendPost_parameters);
            }
            if (!errorFlag && node.method === 'CallsByApiKeyGet') {
                var CallsByApiKeyGet_parameters = [];
                var CallsByApiKeyGet_nodeParam;
                var CallsByApiKeyGet_nodeParamType;

                CallsByApiKeyGet_nodeParam = node.CallsByApiKeyGet_apiKey;
                CallsByApiKeyGet_nodeParamType = node.CallsByApiKeyGet_apiKeyType;
                if (CallsByApiKeyGet_nodeParamType === 'str') {
                    CallsByApiKeyGet_parameters.apiKey = CallsByApiKeyGet_nodeParam || '';
                } else {
                    CallsByApiKeyGet_parameters.apiKey = RED.util.getMessageProperty(msg, CallsByApiKeyGet_nodeParam);
                }
                CallsByApiKeyGet_parameters.apiKey = !!CallsByApiKeyGet_parameters.apiKey ? CallsByApiKeyGet_parameters.apiKey : msg.payload;
                
                CallsByApiKeyGet_nodeParam = node.CallsByApiKeyGet_apiSecret;
                CallsByApiKeyGet_nodeParamType = node.CallsByApiKeyGet_apiSecretType;
                if (CallsByApiKeyGet_nodeParamType === 'str') {
                    CallsByApiKeyGet_parameters.apiSecret = CallsByApiKeyGet_nodeParam || '';
                } else {
                    CallsByApiKeyGet_parameters.apiSecret = RED.util.getMessageProperty(msg, CallsByApiKeyGet_nodeParam);
                }
                CallsByApiKeyGet_parameters.apiSecret = !!CallsByApiKeyGet_parameters.apiSecret ? CallsByApiKeyGet_parameters.apiSecret : msg.payload;
                                result = client.CallsByApiKeyGet(CallsByApiKeyGet_parameters);
            }
            if (!errorFlag && node.method === 'CallsByApiKeyPost') {
                var CallsByApiKeyPost_parameters = [];
                var CallsByApiKeyPost_nodeParam;
                var CallsByApiKeyPost_nodeParamType;

                CallsByApiKeyPost_nodeParam = node.CallsByApiKeyPost_apiKey;
                CallsByApiKeyPost_nodeParamType = node.CallsByApiKeyPost_apiKeyType;
                if (CallsByApiKeyPost_nodeParamType === 'str') {
                    CallsByApiKeyPost_parameters.apiKey = CallsByApiKeyPost_nodeParam || '';
                } else {
                    CallsByApiKeyPost_parameters.apiKey = RED.util.getMessageProperty(msg, CallsByApiKeyPost_nodeParam);
                }
                CallsByApiKeyPost_parameters.apiKey = !!CallsByApiKeyPost_parameters.apiKey ? CallsByApiKeyPost_parameters.apiKey : msg.payload;
                
                CallsByApiKeyPost_nodeParam = node.CallsByApiKeyPost_apiSecret;
                CallsByApiKeyPost_nodeParamType = node.CallsByApiKeyPost_apiSecretType;
                if (CallsByApiKeyPost_nodeParamType === 'str') {
                    CallsByApiKeyPost_parameters.apiSecret = CallsByApiKeyPost_nodeParam || '';
                } else {
                    CallsByApiKeyPost_parameters.apiSecret = RED.util.getMessageProperty(msg, CallsByApiKeyPost_nodeParam);
                }
                CallsByApiKeyPost_parameters.apiSecret = !!CallsByApiKeyPost_parameters.apiSecret ? CallsByApiKeyPost_parameters.apiSecret : msg.payload;
                
                CallsByApiKeyPost_nodeParam = node.CallsByApiKeyPost_callerid;
                CallsByApiKeyPost_nodeParamType = node.CallsByApiKeyPost_calleridType;
                if (CallsByApiKeyPost_nodeParamType === 'str') {
                    CallsByApiKeyPost_parameters.callerid = CallsByApiKeyPost_nodeParam || '';
                } else {
                    CallsByApiKeyPost_parameters.callerid = RED.util.getMessageProperty(msg, CallsByApiKeyPost_nodeParam);
                }
                CallsByApiKeyPost_parameters.callerid = !!CallsByApiKeyPost_parameters.callerid ? CallsByApiKeyPost_parameters.callerid : msg.payload;
                
                CallsByApiKeyPost_nodeParam = node.CallsByApiKeyPost_origin;
                CallsByApiKeyPost_nodeParamType = node.CallsByApiKeyPost_originType;
                if (CallsByApiKeyPost_nodeParamType === 'str') {
                    CallsByApiKeyPost_parameters.origin = CallsByApiKeyPost_nodeParam || '';
                } else {
                    CallsByApiKeyPost_parameters.origin = RED.util.getMessageProperty(msg, CallsByApiKeyPost_nodeParam);
                }
                CallsByApiKeyPost_parameters.origin = !!CallsByApiKeyPost_parameters.origin ? CallsByApiKeyPost_parameters.origin : msg.payload;
                
                CallsByApiKeyPost_nodeParam = node.CallsByApiKeyPost_destination;
                CallsByApiKeyPost_nodeParamType = node.CallsByApiKeyPost_destinationType;
                if (CallsByApiKeyPost_nodeParamType === 'str') {
                    CallsByApiKeyPost_parameters.destination = CallsByApiKeyPost_nodeParam || '';
                } else {
                    CallsByApiKeyPost_parameters.destination = RED.util.getMessageProperty(msg, CallsByApiKeyPost_nodeParam);
                }
                CallsByApiKeyPost_parameters.destination = !!CallsByApiKeyPost_parameters.destination ? CallsByApiKeyPost_parameters.destination : msg.payload;
                
                CallsByApiKeyPost_nodeParam = node.CallsByApiKeyPost_type;
                CallsByApiKeyPost_nodeParamType = node.CallsByApiKeyPost_typeType;
                if (CallsByApiKeyPost_nodeParamType === 'str') {
                    CallsByApiKeyPost_parameters.type = CallsByApiKeyPost_nodeParam || '';
                } else {
                    CallsByApiKeyPost_parameters.type = RED.util.getMessageProperty(msg, CallsByApiKeyPost_nodeParam);
                }
                CallsByApiKeyPost_parameters.type = !!CallsByApiKeyPost_parameters.type ? CallsByApiKeyPost_parameters.type : msg.payload;
                                result = client.CallsByApiKeyPost(CallsByApiKeyPost_parameters);
            }
            if (!errorFlag && node.method === 'CallsByApiKeyAndUuidGet') {
                var CallsByApiKeyAndUuidGet_parameters = [];
                var CallsByApiKeyAndUuidGet_nodeParam;
                var CallsByApiKeyAndUuidGet_nodeParamType;

                CallsByApiKeyAndUuidGet_nodeParam = node.CallsByApiKeyAndUuidGet_apiKey;
                CallsByApiKeyAndUuidGet_nodeParamType = node.CallsByApiKeyAndUuidGet_apiKeyType;
                if (CallsByApiKeyAndUuidGet_nodeParamType === 'str') {
                    CallsByApiKeyAndUuidGet_parameters.apiKey = CallsByApiKeyAndUuidGet_nodeParam || '';
                } else {
                    CallsByApiKeyAndUuidGet_parameters.apiKey = RED.util.getMessageProperty(msg, CallsByApiKeyAndUuidGet_nodeParam);
                }
                CallsByApiKeyAndUuidGet_parameters.apiKey = !!CallsByApiKeyAndUuidGet_parameters.apiKey ? CallsByApiKeyAndUuidGet_parameters.apiKey : msg.payload;
                
                CallsByApiKeyAndUuidGet_nodeParam = node.CallsByApiKeyAndUuidGet_apiSecret;
                CallsByApiKeyAndUuidGet_nodeParamType = node.CallsByApiKeyAndUuidGet_apiSecretType;
                if (CallsByApiKeyAndUuidGet_nodeParamType === 'str') {
                    CallsByApiKeyAndUuidGet_parameters.apiSecret = CallsByApiKeyAndUuidGet_nodeParam || '';
                } else {
                    CallsByApiKeyAndUuidGet_parameters.apiSecret = RED.util.getMessageProperty(msg, CallsByApiKeyAndUuidGet_nodeParam);
                }
                CallsByApiKeyAndUuidGet_parameters.apiSecret = !!CallsByApiKeyAndUuidGet_parameters.apiSecret ? CallsByApiKeyAndUuidGet_parameters.apiSecret : msg.payload;
                
                CallsByApiKeyAndUuidGet_nodeParam = node.CallsByApiKeyAndUuidGet_uuid;
                CallsByApiKeyAndUuidGet_nodeParamType = node.CallsByApiKeyAndUuidGet_uuidType;
                if (CallsByApiKeyAndUuidGet_nodeParamType === 'str') {
                    CallsByApiKeyAndUuidGet_parameters.uuid = CallsByApiKeyAndUuidGet_nodeParam || '';
                } else {
                    CallsByApiKeyAndUuidGet_parameters.uuid = RED.util.getMessageProperty(msg, CallsByApiKeyAndUuidGet_nodeParam);
                }
                CallsByApiKeyAndUuidGet_parameters.uuid = !!CallsByApiKeyAndUuidGet_parameters.uuid ? CallsByApiKeyAndUuidGet_parameters.uuid : msg.payload;
                                result = client.CallsByApiKeyAndUuidGet(CallsByApiKeyAndUuidGet_parameters);
            }
            if (!errorFlag && node.method === 'CallsByApiKeyAndUuidPost') {
                var CallsByApiKeyAndUuidPost_parameters = [];
                var CallsByApiKeyAndUuidPost_nodeParam;
                var CallsByApiKeyAndUuidPost_nodeParamType;

                CallsByApiKeyAndUuidPost_nodeParam = node.CallsByApiKeyAndUuidPost_apiKey;
                CallsByApiKeyAndUuidPost_nodeParamType = node.CallsByApiKeyAndUuidPost_apiKeyType;
                if (CallsByApiKeyAndUuidPost_nodeParamType === 'str') {
                    CallsByApiKeyAndUuidPost_parameters.apiKey = CallsByApiKeyAndUuidPost_nodeParam || '';
                } else {
                    CallsByApiKeyAndUuidPost_parameters.apiKey = RED.util.getMessageProperty(msg, CallsByApiKeyAndUuidPost_nodeParam);
                }
                CallsByApiKeyAndUuidPost_parameters.apiKey = !!CallsByApiKeyAndUuidPost_parameters.apiKey ? CallsByApiKeyAndUuidPost_parameters.apiKey : msg.payload;
                
                CallsByApiKeyAndUuidPost_nodeParam = node.CallsByApiKeyAndUuidPost_apiSecret;
                CallsByApiKeyAndUuidPost_nodeParamType = node.CallsByApiKeyAndUuidPost_apiSecretType;
                if (CallsByApiKeyAndUuidPost_nodeParamType === 'str') {
                    CallsByApiKeyAndUuidPost_parameters.apiSecret = CallsByApiKeyAndUuidPost_nodeParam || '';
                } else {
                    CallsByApiKeyAndUuidPost_parameters.apiSecret = RED.util.getMessageProperty(msg, CallsByApiKeyAndUuidPost_nodeParam);
                }
                CallsByApiKeyAndUuidPost_parameters.apiSecret = !!CallsByApiKeyAndUuidPost_parameters.apiSecret ? CallsByApiKeyAndUuidPost_parameters.apiSecret : msg.payload;
                
                CallsByApiKeyAndUuidPost_nodeParam = node.CallsByApiKeyAndUuidPost_url;
                CallsByApiKeyAndUuidPost_nodeParamType = node.CallsByApiKeyAndUuidPost_urlType;
                if (CallsByApiKeyAndUuidPost_nodeParamType === 'str') {
                    CallsByApiKeyAndUuidPost_parameters.url = CallsByApiKeyAndUuidPost_nodeParam || '';
                } else {
                    CallsByApiKeyAndUuidPost_parameters.url = RED.util.getMessageProperty(msg, CallsByApiKeyAndUuidPost_nodeParam);
                }
                CallsByApiKeyAndUuidPost_parameters.url = !!CallsByApiKeyAndUuidPost_parameters.url ? CallsByApiKeyAndUuidPost_parameters.url : msg.payload;
                
                CallsByApiKeyAndUuidPost_nodeParam = node.CallsByApiKeyAndUuidPost_uuid;
                CallsByApiKeyAndUuidPost_nodeParamType = node.CallsByApiKeyAndUuidPost_uuidType;
                if (CallsByApiKeyAndUuidPost_nodeParamType === 'str') {
                    CallsByApiKeyAndUuidPost_parameters.uuid = CallsByApiKeyAndUuidPost_nodeParam || '';
                } else {
                    CallsByApiKeyAndUuidPost_parameters.uuid = RED.util.getMessageProperty(msg, CallsByApiKeyAndUuidPost_nodeParam);
                }
                CallsByApiKeyAndUuidPost_parameters.uuid = !!CallsByApiKeyAndUuidPost_parameters.uuid ? CallsByApiKeyAndUuidPost_parameters.uuid : msg.payload;
                                result = client.CallsByApiKeyAndUuidPost(CallsByApiKeyAndUuidPost_parameters);
            }
            if (!errorFlag && node.method === 'MediafilesByApiKeyGet') {
                var MediafilesByApiKeyGet_parameters = [];
                var MediafilesByApiKeyGet_nodeParam;
                var MediafilesByApiKeyGet_nodeParamType;

                MediafilesByApiKeyGet_nodeParam = node.MediafilesByApiKeyGet_apiKey;
                MediafilesByApiKeyGet_nodeParamType = node.MediafilesByApiKeyGet_apiKeyType;
                if (MediafilesByApiKeyGet_nodeParamType === 'str') {
                    MediafilesByApiKeyGet_parameters.apiKey = MediafilesByApiKeyGet_nodeParam || '';
                } else {
                    MediafilesByApiKeyGet_parameters.apiKey = RED.util.getMessageProperty(msg, MediafilesByApiKeyGet_nodeParam);
                }
                MediafilesByApiKeyGet_parameters.apiKey = !!MediafilesByApiKeyGet_parameters.apiKey ? MediafilesByApiKeyGet_parameters.apiKey : msg.payload;
                
                MediafilesByApiKeyGet_nodeParam = node.MediafilesByApiKeyGet_apiSecret;
                MediafilesByApiKeyGet_nodeParamType = node.MediafilesByApiKeyGet_apiSecretType;
                if (MediafilesByApiKeyGet_nodeParamType === 'str') {
                    MediafilesByApiKeyGet_parameters.apiSecret = MediafilesByApiKeyGet_nodeParam || '';
                } else {
                    MediafilesByApiKeyGet_parameters.apiSecret = RED.util.getMessageProperty(msg, MediafilesByApiKeyGet_nodeParam);
                }
                MediafilesByApiKeyGet_parameters.apiSecret = !!MediafilesByApiKeyGet_parameters.apiSecret ? MediafilesByApiKeyGet_parameters.apiSecret : msg.payload;
                                result = client.MediafilesByApiKeyGet(MediafilesByApiKeyGet_parameters);
            }
            if (!errorFlag && node.method === 'MediafilesByApiKeyPost') {
                var MediafilesByApiKeyPost_parameters = [];
                var MediafilesByApiKeyPost_nodeParam;
                var MediafilesByApiKeyPost_nodeParamType;

                MediafilesByApiKeyPost_nodeParam = node.MediafilesByApiKeyPost_apiKey;
                MediafilesByApiKeyPost_nodeParamType = node.MediafilesByApiKeyPost_apiKeyType;
                if (MediafilesByApiKeyPost_nodeParamType === 'str') {
                    MediafilesByApiKeyPost_parameters.apiKey = MediafilesByApiKeyPost_nodeParam || '';
                } else {
                    MediafilesByApiKeyPost_parameters.apiKey = RED.util.getMessageProperty(msg, MediafilesByApiKeyPost_nodeParam);
                }
                MediafilesByApiKeyPost_parameters.apiKey = !!MediafilesByApiKeyPost_parameters.apiKey ? MediafilesByApiKeyPost_parameters.apiKey : msg.payload;
                
                MediafilesByApiKeyPost_nodeParam = node.MediafilesByApiKeyPost_apiSecret;
                MediafilesByApiKeyPost_nodeParamType = node.MediafilesByApiKeyPost_apiSecretType;
                if (MediafilesByApiKeyPost_nodeParamType === 'str') {
                    MediafilesByApiKeyPost_parameters.apiSecret = MediafilesByApiKeyPost_nodeParam || '';
                } else {
                    MediafilesByApiKeyPost_parameters.apiSecret = RED.util.getMessageProperty(msg, MediafilesByApiKeyPost_nodeParam);
                }
                MediafilesByApiKeyPost_parameters.apiSecret = !!MediafilesByApiKeyPost_parameters.apiSecret ? MediafilesByApiKeyPost_parameters.apiSecret : msg.payload;
                
                MediafilesByApiKeyPost_nodeParam = node.MediafilesByApiKeyPost_name;
                MediafilesByApiKeyPost_nodeParamType = node.MediafilesByApiKeyPost_nameType;
                if (MediafilesByApiKeyPost_nodeParamType === 'str') {
                    MediafilesByApiKeyPost_parameters.name = MediafilesByApiKeyPost_nodeParam || '';
                } else {
                    MediafilesByApiKeyPost_parameters.name = RED.util.getMessageProperty(msg, MediafilesByApiKeyPost_nodeParam);
                }
                MediafilesByApiKeyPost_parameters.name = !!MediafilesByApiKeyPost_parameters.name ? MediafilesByApiKeyPost_parameters.name : msg.payload;
                
                MediafilesByApiKeyPost_nodeParam = node.MediafilesByApiKeyPost_mediafile;
                MediafilesByApiKeyPost_nodeParamType = node.MediafilesByApiKeyPost_mediafileType;
                if (MediafilesByApiKeyPost_nodeParamType === 'str') {
                    MediafilesByApiKeyPost_parameters.mediafile = MediafilesByApiKeyPost_nodeParam || '';
                } else {
                    MediafilesByApiKeyPost_parameters.mediafile = RED.util.getMessageProperty(msg, MediafilesByApiKeyPost_nodeParam);
                }
                MediafilesByApiKeyPost_parameters.mediafile = !!MediafilesByApiKeyPost_parameters.mediafile ? MediafilesByApiKeyPost_parameters.mediafile : msg.payload;
                                result = client.MediafilesByApiKeyPost(MediafilesByApiKeyPost_parameters);
            }
            if (!errorFlag && node.method === 'MediafilesByApiKeyDelete') {
                var MediafilesByApiKeyDelete_parameters = [];
                var MediafilesByApiKeyDelete_nodeParam;
                var MediafilesByApiKeyDelete_nodeParamType;

                MediafilesByApiKeyDelete_nodeParam = node.MediafilesByApiKeyDelete_apiKey;
                MediafilesByApiKeyDelete_nodeParamType = node.MediafilesByApiKeyDelete_apiKeyType;
                if (MediafilesByApiKeyDelete_nodeParamType === 'str') {
                    MediafilesByApiKeyDelete_parameters.apiKey = MediafilesByApiKeyDelete_nodeParam || '';
                } else {
                    MediafilesByApiKeyDelete_parameters.apiKey = RED.util.getMessageProperty(msg, MediafilesByApiKeyDelete_nodeParam);
                }
                MediafilesByApiKeyDelete_parameters.apiKey = !!MediafilesByApiKeyDelete_parameters.apiKey ? MediafilesByApiKeyDelete_parameters.apiKey : msg.payload;
                
                MediafilesByApiKeyDelete_nodeParam = node.MediafilesByApiKeyDelete_apiSecret;
                MediafilesByApiKeyDelete_nodeParamType = node.MediafilesByApiKeyDelete_apiSecretType;
                if (MediafilesByApiKeyDelete_nodeParamType === 'str') {
                    MediafilesByApiKeyDelete_parameters.apiSecret = MediafilesByApiKeyDelete_nodeParam || '';
                } else {
                    MediafilesByApiKeyDelete_parameters.apiSecret = RED.util.getMessageProperty(msg, MediafilesByApiKeyDelete_nodeParam);
                }
                MediafilesByApiKeyDelete_parameters.apiSecret = !!MediafilesByApiKeyDelete_parameters.apiSecret ? MediafilesByApiKeyDelete_parameters.apiSecret : msg.payload;
                
                MediafilesByApiKeyDelete_nodeParam = node.MediafilesByApiKeyDelete_name;
                MediafilesByApiKeyDelete_nodeParamType = node.MediafilesByApiKeyDelete_nameType;
                if (MediafilesByApiKeyDelete_nodeParamType === 'str') {
                    MediafilesByApiKeyDelete_parameters.name = MediafilesByApiKeyDelete_nodeParam || '';
                } else {
                    MediafilesByApiKeyDelete_parameters.name = RED.util.getMessageProperty(msg, MediafilesByApiKeyDelete_nodeParam);
                }
                MediafilesByApiKeyDelete_parameters.name = !!MediafilesByApiKeyDelete_parameters.name ? MediafilesByApiKeyDelete_parameters.name : msg.payload;
                                result = client.MediafilesByApiKeyDelete(MediafilesByApiKeyDelete_parameters);
            }
            if (!errorFlag && node.method === 'RecordingsByApiKeyGet') {
                var RecordingsByApiKeyGet_parameters = [];
                var RecordingsByApiKeyGet_nodeParam;
                var RecordingsByApiKeyGet_nodeParamType;

                RecordingsByApiKeyGet_nodeParam = node.RecordingsByApiKeyGet_apiKey;
                RecordingsByApiKeyGet_nodeParamType = node.RecordingsByApiKeyGet_apiKeyType;
                if (RecordingsByApiKeyGet_nodeParamType === 'str') {
                    RecordingsByApiKeyGet_parameters.apiKey = RecordingsByApiKeyGet_nodeParam || '';
                } else {
                    RecordingsByApiKeyGet_parameters.apiKey = RED.util.getMessageProperty(msg, RecordingsByApiKeyGet_nodeParam);
                }
                RecordingsByApiKeyGet_parameters.apiKey = !!RecordingsByApiKeyGet_parameters.apiKey ? RecordingsByApiKeyGet_parameters.apiKey : msg.payload;
                
                RecordingsByApiKeyGet_nodeParam = node.RecordingsByApiKeyGet_apiSecret;
                RecordingsByApiKeyGet_nodeParamType = node.RecordingsByApiKeyGet_apiSecretType;
                if (RecordingsByApiKeyGet_nodeParamType === 'str') {
                    RecordingsByApiKeyGet_parameters.apiSecret = RecordingsByApiKeyGet_nodeParam || '';
                } else {
                    RecordingsByApiKeyGet_parameters.apiSecret = RED.util.getMessageProperty(msg, RecordingsByApiKeyGet_nodeParam);
                }
                RecordingsByApiKeyGet_parameters.apiSecret = !!RecordingsByApiKeyGet_parameters.apiSecret ? RecordingsByApiKeyGet_parameters.apiSecret : msg.payload;
                                result = client.RecordingsByApiKeyGet(RecordingsByApiKeyGet_parameters);
            }
            if (!errorFlag && node.method === 'RecordingsByApiKeyAndFileNameGet') {
                var RecordingsByApiKeyAndFileNameGet_parameters = [];
                var RecordingsByApiKeyAndFileNameGet_nodeParam;
                var RecordingsByApiKeyAndFileNameGet_nodeParamType;

                RecordingsByApiKeyAndFileNameGet_nodeParam = node.RecordingsByApiKeyAndFileNameGet_apiKey;
                RecordingsByApiKeyAndFileNameGet_nodeParamType = node.RecordingsByApiKeyAndFileNameGet_apiKeyType;
                if (RecordingsByApiKeyAndFileNameGet_nodeParamType === 'str') {
                    RecordingsByApiKeyAndFileNameGet_parameters.apiKey = RecordingsByApiKeyAndFileNameGet_nodeParam || '';
                } else {
                    RecordingsByApiKeyAndFileNameGet_parameters.apiKey = RED.util.getMessageProperty(msg, RecordingsByApiKeyAndFileNameGet_nodeParam);
                }
                RecordingsByApiKeyAndFileNameGet_parameters.apiKey = !!RecordingsByApiKeyAndFileNameGet_parameters.apiKey ? RecordingsByApiKeyAndFileNameGet_parameters.apiKey : msg.payload;
                
                RecordingsByApiKeyAndFileNameGet_nodeParam = node.RecordingsByApiKeyAndFileNameGet_apiSecret;
                RecordingsByApiKeyAndFileNameGet_nodeParamType = node.RecordingsByApiKeyAndFileNameGet_apiSecretType;
                if (RecordingsByApiKeyAndFileNameGet_nodeParamType === 'str') {
                    RecordingsByApiKeyAndFileNameGet_parameters.apiSecret = RecordingsByApiKeyAndFileNameGet_nodeParam || '';
                } else {
                    RecordingsByApiKeyAndFileNameGet_parameters.apiSecret = RED.util.getMessageProperty(msg, RecordingsByApiKeyAndFileNameGet_nodeParam);
                }
                RecordingsByApiKeyAndFileNameGet_parameters.apiSecret = !!RecordingsByApiKeyAndFileNameGet_parameters.apiSecret ? RecordingsByApiKeyAndFileNameGet_parameters.apiSecret : msg.payload;
                
                RecordingsByApiKeyAndFileNameGet_nodeParam = node.RecordingsByApiKeyAndFileNameGet_fileName;
                RecordingsByApiKeyAndFileNameGet_nodeParamType = node.RecordingsByApiKeyAndFileNameGet_fileNameType;
                if (RecordingsByApiKeyAndFileNameGet_nodeParamType === 'str') {
                    RecordingsByApiKeyAndFileNameGet_parameters.fileName = RecordingsByApiKeyAndFileNameGet_nodeParam || '';
                } else {
                    RecordingsByApiKeyAndFileNameGet_parameters.fileName = RED.util.getMessageProperty(msg, RecordingsByApiKeyAndFileNameGet_nodeParam);
                }
                RecordingsByApiKeyAndFileNameGet_parameters.fileName = !!RecordingsByApiKeyAndFileNameGet_parameters.fileName ? RecordingsByApiKeyAndFileNameGet_parameters.fileName : msg.payload;
                                result = client.RecordingsByApiKeyAndFileNameGet(RecordingsByApiKeyAndFileNameGet_parameters);
            }
            if (!errorFlag && node.method === 'RecordingsByApiKeyAndFileNameDelete') {
                var RecordingsByApiKeyAndFileNameDelete_parameters = [];
                var RecordingsByApiKeyAndFileNameDelete_nodeParam;
                var RecordingsByApiKeyAndFileNameDelete_nodeParamType;

                RecordingsByApiKeyAndFileNameDelete_nodeParam = node.RecordingsByApiKeyAndFileNameDelete_apiKey;
                RecordingsByApiKeyAndFileNameDelete_nodeParamType = node.RecordingsByApiKeyAndFileNameDelete_apiKeyType;
                if (RecordingsByApiKeyAndFileNameDelete_nodeParamType === 'str') {
                    RecordingsByApiKeyAndFileNameDelete_parameters.apiKey = RecordingsByApiKeyAndFileNameDelete_nodeParam || '';
                } else {
                    RecordingsByApiKeyAndFileNameDelete_parameters.apiKey = RED.util.getMessageProperty(msg, RecordingsByApiKeyAndFileNameDelete_nodeParam);
                }
                RecordingsByApiKeyAndFileNameDelete_parameters.apiKey = !!RecordingsByApiKeyAndFileNameDelete_parameters.apiKey ? RecordingsByApiKeyAndFileNameDelete_parameters.apiKey : msg.payload;
                
                RecordingsByApiKeyAndFileNameDelete_nodeParam = node.RecordingsByApiKeyAndFileNameDelete_apiSecret;
                RecordingsByApiKeyAndFileNameDelete_nodeParamType = node.RecordingsByApiKeyAndFileNameDelete_apiSecretType;
                if (RecordingsByApiKeyAndFileNameDelete_nodeParamType === 'str') {
                    RecordingsByApiKeyAndFileNameDelete_parameters.apiSecret = RecordingsByApiKeyAndFileNameDelete_nodeParam || '';
                } else {
                    RecordingsByApiKeyAndFileNameDelete_parameters.apiSecret = RED.util.getMessageProperty(msg, RecordingsByApiKeyAndFileNameDelete_nodeParam);
                }
                RecordingsByApiKeyAndFileNameDelete_parameters.apiSecret = !!RecordingsByApiKeyAndFileNameDelete_parameters.apiSecret ? RecordingsByApiKeyAndFileNameDelete_parameters.apiSecret : msg.payload;
                
                RecordingsByApiKeyAndFileNameDelete_nodeParam = node.RecordingsByApiKeyAndFileNameDelete_name;
                RecordingsByApiKeyAndFileNameDelete_nodeParamType = node.RecordingsByApiKeyAndFileNameDelete_nameType;
                if (RecordingsByApiKeyAndFileNameDelete_nodeParamType === 'str') {
                    RecordingsByApiKeyAndFileNameDelete_parameters.name = RecordingsByApiKeyAndFileNameDelete_nodeParam || '';
                } else {
                    RecordingsByApiKeyAndFileNameDelete_parameters.name = RED.util.getMessageProperty(msg, RecordingsByApiKeyAndFileNameDelete_nodeParam);
                }
                RecordingsByApiKeyAndFileNameDelete_parameters.name = !!RecordingsByApiKeyAndFileNameDelete_parameters.name ? RecordingsByApiKeyAndFileNameDelete_parameters.name : msg.payload;
                
                RecordingsByApiKeyAndFileNameDelete_nodeParam = node.RecordingsByApiKeyAndFileNameDelete_fileName;
                RecordingsByApiKeyAndFileNameDelete_nodeParamType = node.RecordingsByApiKeyAndFileNameDelete_fileNameType;
                if (RecordingsByApiKeyAndFileNameDelete_nodeParamType === 'str') {
                    RecordingsByApiKeyAndFileNameDelete_parameters.fileName = RecordingsByApiKeyAndFileNameDelete_nodeParam || '';
                } else {
                    RecordingsByApiKeyAndFileNameDelete_parameters.fileName = RED.util.getMessageProperty(msg, RecordingsByApiKeyAndFileNameDelete_nodeParam);
                }
                RecordingsByApiKeyAndFileNameDelete_parameters.fileName = !!RecordingsByApiKeyAndFileNameDelete_parameters.fileName ? RecordingsByApiKeyAndFileNameDelete_parameters.fileName : msg.payload;
                                result = client.RecordingsByApiKeyAndFileNameDelete(RecordingsByApiKeyAndFileNameDelete_parameters);
            }
            if (!errorFlag && node.method === 'ValidatesByApiKeyGet') {
                var ValidatesByApiKeyGet_parameters = [];
                var ValidatesByApiKeyGet_nodeParam;
                var ValidatesByApiKeyGet_nodeParamType;

                ValidatesByApiKeyGet_nodeParam = node.ValidatesByApiKeyGet_apiKey;
                ValidatesByApiKeyGet_nodeParamType = node.ValidatesByApiKeyGet_apiKeyType;
                if (ValidatesByApiKeyGet_nodeParamType === 'str') {
                    ValidatesByApiKeyGet_parameters.apiKey = ValidatesByApiKeyGet_nodeParam || '';
                } else {
                    ValidatesByApiKeyGet_parameters.apiKey = RED.util.getMessageProperty(msg, ValidatesByApiKeyGet_nodeParam);
                }
                ValidatesByApiKeyGet_parameters.apiKey = !!ValidatesByApiKeyGet_parameters.apiKey ? ValidatesByApiKeyGet_parameters.apiKey : msg.payload;
                
                ValidatesByApiKeyGet_nodeParam = node.ValidatesByApiKeyGet_apiSecret;
                ValidatesByApiKeyGet_nodeParamType = node.ValidatesByApiKeyGet_apiSecretType;
                if (ValidatesByApiKeyGet_nodeParamType === 'str') {
                    ValidatesByApiKeyGet_parameters.apiSecret = ValidatesByApiKeyGet_nodeParam || '';
                } else {
                    ValidatesByApiKeyGet_parameters.apiSecret = RED.util.getMessageProperty(msg, ValidatesByApiKeyGet_nodeParam);
                }
                ValidatesByApiKeyGet_parameters.apiSecret = !!ValidatesByApiKeyGet_parameters.apiSecret ? ValidatesByApiKeyGet_parameters.apiSecret : msg.payload;
                                result = client.ValidatesByApiKeyGet(ValidatesByApiKeyGet_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'ApidazeRestApi.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('apidaze-rest-api', ApidazeRestApiNode);
};
