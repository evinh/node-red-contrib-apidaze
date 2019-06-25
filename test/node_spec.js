var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('apidaze-rest-api node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'apidaze-rest-api');
            done();
        });
    });

    it('should handle ExternalscriptsGet()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'ExternalscriptsGet',
                ExternalscriptsGet_apiKey: '<node property>', // (1) define node properties
                ExternalscriptsGet_apiSecret: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ExternalscriptsByApiKeyPost()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'ExternalscriptsByApiKeyPost',
                ExternalscriptsByApiKeyPost_apiKey: '<node property>', // (1) define node properties
                ExternalscriptsByApiKeyPost_apiSecret: '<node property>', // (1) define node properties
                ExternalscriptsByApiKeyPost_name: '<node property>', // (1) define node properties
                ExternalscriptsByApiKeyPost_url: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ExternalscriptsByApiKeyAndScriptIdGet()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'ExternalscriptsByApiKeyAndScriptIdGet',
                ExternalscriptsByApiKeyAndScriptIdGet_apiKey: '<node property>', // (1) define node properties
                ExternalscriptsByApiKeyAndScriptIdGet_apiSecret: '<node property>', // (1) define node properties
                ExternalscriptsByApiKeyAndScriptIdGet_scriptId: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ExternalscriptsByApiKeyAndScriptIdPut()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'ExternalscriptsByApiKeyAndScriptIdPut',
                ExternalscriptsByApiKeyAndScriptIdPut_apiKey: '<node property>', // (1) define node properties
                ExternalscriptsByApiKeyAndScriptIdPut_apiSecret: '<node property>', // (1) define node properties
                ExternalscriptsByApiKeyAndScriptIdPut_scriptId: '<node property>', // (1) define node properties
                ExternalscriptsByApiKeyAndScriptIdPut_name: '<node property>', // (1) define node properties
                ExternalscriptsByApiKeyAndScriptIdPut_url: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UnnammedEndpointDelete()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'UnnammedEndpointDelete',
                UnnammedEndpointDelete_apiKey: '<node property>', // (1) define node properties
                UnnammedEndpointDelete_apiSecret: '<node property>', // (1) define node properties
                UnnammedEndpointDelete_scriptId: '<node property>', // (1) define node properties
                UnnammedEndpointDelete_contentType: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UnnammedEndpointGet()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'UnnammedEndpointGet',
                UnnammedEndpointGet_destinationNumber: '<node property>', // (1) define node properties
                UnnammedEndpointGet_callerUsername: '<node property>', // (1) define node properties
                UnnammedEndpointGet_sessionId: '<node property>', // (1) define node properties
                UnnammedEndpointGet_callerIdNumber: '<node property>', // (1) define node properties
                UnnammedEndpointGet_uuid: '<node property>', // (1) define node properties
                UnnammedEndpointGet_url: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle UnnammedEndpointPost()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'UnnammedEndpointPost',
                UnnammedEndpointPost_contentType: '<node property>', // (1) define node properties
                UnnammedEndpointPost_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle SmsSendPost()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'SmsSendPost',
                SmsSendPost_apiKey: '<node property>', // (1) define node properties
                SmsSendPost_apiSecret: '<node property>', // (1) define node properties
                SmsSendPost_from: '<node property>', // (1) define node properties
                SmsSendPost_to: '<node property>', // (1) define node properties
                SmsSendPost_body: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle CallsByApiKeyGet()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'CallsByApiKeyGet',
                CallsByApiKeyGet_apiKey: '<node property>', // (1) define node properties
                CallsByApiKeyGet_apiSecret: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle CallsByApiKeyPost()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'CallsByApiKeyPost',
                CallsByApiKeyPost_apiKey: '<node property>', // (1) define node properties
                CallsByApiKeyPost_apiSecret: '<node property>', // (1) define node properties
                CallsByApiKeyPost_callerid: '<node property>', // (1) define node properties
                CallsByApiKeyPost_origin: '<node property>', // (1) define node properties
                CallsByApiKeyPost_destination: '<node property>', // (1) define node properties
                CallsByApiKeyPost_type: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle CallsByApiKeyAndUuidGet()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'CallsByApiKeyAndUuidGet',
                CallsByApiKeyAndUuidGet_apiKey: '<node property>', // (1) define node properties
                CallsByApiKeyAndUuidGet_apiSecret: '<node property>', // (1) define node properties
                CallsByApiKeyAndUuidGet_uuid: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle CallsByApiKeyAndUuidPost()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'CallsByApiKeyAndUuidPost',
                CallsByApiKeyAndUuidPost_apiKey: '<node property>', // (1) define node properties
                CallsByApiKeyAndUuidPost_apiSecret: '<node property>', // (1) define node properties
                CallsByApiKeyAndUuidPost_url: '<node property>', // (1) define node properties
                CallsByApiKeyAndUuidPost_uuid: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle MediafilesByApiKeyGet()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'MediafilesByApiKeyGet',
                MediafilesByApiKeyGet_apiKey: '<node property>', // (1) define node properties
                MediafilesByApiKeyGet_apiSecret: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle MediafilesByApiKeyPost()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'MediafilesByApiKeyPost',
                MediafilesByApiKeyPost_apiKey: '<node property>', // (1) define node properties
                MediafilesByApiKeyPost_apiSecret: '<node property>', // (1) define node properties
                MediafilesByApiKeyPost_name: '<node property>', // (1) define node properties
                MediafilesByApiKeyPost_mediafile: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle MediafilesByApiKeyDelete()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'MediafilesByApiKeyDelete',
                MediafilesByApiKeyDelete_apiKey: '<node property>', // (1) define node properties
                MediafilesByApiKeyDelete_apiSecret: '<node property>', // (1) define node properties
                MediafilesByApiKeyDelete_name: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle RecordingsByApiKeyGet()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'RecordingsByApiKeyGet',
                RecordingsByApiKeyGet_apiKey: '<node property>', // (1) define node properties
                RecordingsByApiKeyGet_apiSecret: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle RecordingsByApiKeyAndFileNameGet()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'RecordingsByApiKeyAndFileNameGet',
                RecordingsByApiKeyAndFileNameGet_apiKey: '<node property>', // (1) define node properties
                RecordingsByApiKeyAndFileNameGet_apiSecret: '<node property>', // (1) define node properties
                RecordingsByApiKeyAndFileNameGet_fileName: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle RecordingsByApiKeyAndFileNameDelete()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'RecordingsByApiKeyAndFileNameDelete',
                RecordingsByApiKeyAndFileNameDelete_apiKey: '<node property>', // (1) define node properties
                RecordingsByApiKeyAndFileNameDelete_apiSecret: '<node property>', // (1) define node properties
                RecordingsByApiKeyAndFileNameDelete_name: '<node property>', // (1) define node properties
                RecordingsByApiKeyAndFileNameDelete_fileName: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle ValidatesByApiKeyGet()', function (done) {
        var flow = [
            { id: 'n1', type: 'apidaze-rest-api', name: 'apidaze-rest-api',
                method: 'ValidatesByApiKeyGet',
                ValidatesByApiKeyGet_apiKey: '<node property>', // (1) define node properties
                ValidatesByApiKeyGet_apiSecret: '<node property>', // (1) define node properties
                wires: [['n3']]
            },
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
