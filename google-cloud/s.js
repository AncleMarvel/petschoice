const soap = require('soap');

(async () => {
    try {
        const client = await soap.createClientAsync('novaPoshta.wsdl');
        // Если нужна BasicAuth:
        client.setSecurity(new soap.BasicAuthSecurity('web', 'web'));

        console.log(JSON.stringify(client.describe(), null, 2));
    } catch (error) {
        console.error('Error creating client:', error);
    }
})();
