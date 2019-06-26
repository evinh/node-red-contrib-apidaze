node-red-contrib-apidaze
=====================

Node-RED node for apidaze-rest-api

Apidaze is the platform powering the Voip Innovations Programmable Communications product.  For more information, please visit https://voipinnovations.com/programmable.

With this REST API, you will be able to do the following:

- Place and manage calls, send SMS, and send faxes

- Manage your voice prompts, retrieve recorded conversations, etc.

You can find our JavaScript API and examples at https://github.com/apidaze

To test API methods in Postman, click the Run in Postman button.  In the Postman App, edit the Apidaze.template in your Environments settings to reflect your api_key and api_secret.

Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

        npm install node-red-contrib-apidaze-rest-api

Usage
-----

### Methods

- ExternalscriptsGet

    Returns the list of the external scripts for your domain.

- ExternalscriptsByApiKeyPost

    Creates a new external script.
Only one external script is allowed per domain.

- ExternalscriptsByApiKeyAndScriptIdGet

    Returns the External Script object details by id.

- ExternalscriptsByApiKeyAndScriptIdPut

    Updates an external script.

- UnnammedEndpointDelete

    Deletes an external script.

- UnnammedEndpointGet

    This is an example GET that an inbound call to your application will request to your script/application URL.

- UnnammedEndpointPost

    This is an example POST that an inbound SMS to your application will request to your script/application URL.  Keep in mind that if your application replies to the SMS, it must use the Send a SMS method via the REST API, not an XML response.

- SmsSendPost

    Sends a SMS.

- CallsByApiKeyGet

    Gets list of active calls with UUID of each call.

- CallsByApiKeyPost

    Creates a call (click-to-call use case).

- CallsByApiKeyAndUuidGet

    Get an active call by UUID.

- CallsByApiKeyAndUuidPost

    Transfer a call.

- MediafilesByApiKeyGet

    Get a list of media files.

- MediafilesByApiKeyPost

    Get a specific media file.

- MediafilesByApiKeyDelete

    Delete a media file.

- RecordingsByApiKeyGet

    Get a list of recordings.

- RecordingsByApiKeyAndFileNameGet

    Get a specific recording.

- RecordingsByApiKeyAndFileNameDelete

    Delete a recording.

- ValidatesByApiKeyGet

    Validate your apikey and secret.
