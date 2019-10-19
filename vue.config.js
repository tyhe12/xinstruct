// const s3Deploy = {
//     registry: undefined,
//     awsProfile: 'default',
//     region: 'us-west-1',
//     bucket: 'xinstruct.com',
//     createBucket: false,
//     staticHosting: true,
//     staticIndexPage: 'index.html',
//     staticErrorPage: 'index.html',
//     assetPath: 'dist',
//     assetMatch: '**',
//     deployPath: '/',
//     acl: 'public-read',
//     pwa: false,
//     uploadConcurrency: 5,
//     pluginVersion: '3.0.0',
//     enableCloudfront: false,
//     cloudfrontId: '',
//     cloudfrontMatchers: '/*'
// }

module.exports = {
    pluginOptions: {
        s3Deploy: {
            registry: undefined,
            awsProfile: 'default',
            region: 'us-west-1',
            bucket: 'xinstruct.com',
            createBucket: true,
            staticHosting: true,
            staticIndexPage: 'index.html',
            staticErrorPage: 'index.html',
            assetPath: 'dist',
            assetMatch: '**',
            deployPath: '/',
            acl: 'public-read',
            pwa: false,
            uploadConcurrency: 5,
            pluginVersion: '3.0.0',
            enableCloudfront: false,
            cloudfrontId: '',
            cloudfrontMatchers: '/*'
        }
    }
}
