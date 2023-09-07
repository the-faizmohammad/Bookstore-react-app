function generateAppId() {
    return fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/', {
        method: 'POST'
    })
    .then(response => response.text())
    .then(appId => {
        return appId;
    })
    .catch(error => {
        console.error('Error:', error);
        return null; 
    });
}

generateAppId()
    .then(appId => {
        if (appId) {
            console.log('Generated App ID:', appId);
        } else {
            console.log('Failed to generate App ID.');
        }
    });
