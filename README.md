node-red-contrib-apidaze-rest-api
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

    For an Inbound SMS example request to your configured appliction, please see this example [here](#430697e4-bfa8-ba71-926b-c7c806a1245d)

- CallsByApiKeyGet

    TODO: Add Description

- CallsByApiKeyPost

    TODO: Add Description

- CallsByApiKeyAndUuidGet

    TODO: Add Description

- CallsByApiKeyAndUuidPost

    TODO: Add Description

- MediafilesByApiKeyGet

    TODO: Add Description

- MediafilesByApiKeyPost

    TODO: Add Description

- MediafilesByApiKeyDelete

    TODO: Add Description

- RecordingsByApiKeyGet

    TODO: Add Description

- RecordingsByApiKeyAndFileNameGet

    TODO: Add Description

- RecordingsByApiKeyAndFileNameDelete

    TODO: Add Description

- ValidatesByApiKeyGet

    Validates your API key and secret.


