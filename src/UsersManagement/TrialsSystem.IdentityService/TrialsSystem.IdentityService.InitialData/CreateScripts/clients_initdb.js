var identityServerDb = db.getSiblingDB('TS-IdentityServer');
var collection = identityServerDb.getCollection("Clients");

if (collection.countDocuments({}) === 0) {
  collection.insertMany(
    [{
        "Enabled": true,
        "ClientId": "reporting_service",
        "ProtocolType": "oidc",
        "ClientSecrets": [{
          "Description": null,
          "Value": "4uN3rKQbQw9pkJBI2CbG0VycdNc3GYKGvZrNCzZrmPw=",
          "Expiration": null,
          "Type": "SharedSecret",
          "Created": new Date()
        }],
        "RequireClientSecret": false,
        "ClientName": null,
        "Description": null,
        "ClientUri": null,
        "LogoUri": null,
        "RequireConsent": false,
        "AllowRememberConsent": true,
        "AlwaysIncludeUserClaimsInIdToken": true,
        "AllowedGrantTypes": [
          "authorization_code"
        ],
        "RequirePkce": true,
        "AllowPlainTextPkce": false,
        "RequireRequestObject": false,
        "AllowAccessTokensViaBrowser": true,
        "RedirectUris": [
          "http://localhost:8080",
          "http://localhost:3000",
          "https://se.qa.meine-inka.de",
          "http://192.168.68.102:3000",
          "https://ts.stg.meine-inka.de"
        ],
        "PostLogoutRedirectUris": [
          "http://localhost:8080",
          "http://localhost:3000",
          "https://se.qa.meine-inka.de",
          "http://192.168.68.102:3000",
          "https://ts.stg.meine-inka.de"
        ],
        "FrontChannelLogoutUri": null,
        "FrontChannelLogoutSessionRequired": true,
        "BackChannelLogoutUri": null,
        "BackChannelLogoutSessionRequired": true,
        "AllowOfflineAccess": true,
        "AllowedScopes": [
          "treatment",
          "openid"
        ],
        "IdentityTokenLifetime": 300.0,
        "AllowedIdentityTokenSigningAlgorithms": [],
        "AccessTokenLifetime": 3600.0,
        "AuthorizationCodeLifetime": 300.0,
        "AbsoluteRefreshTokenLifetime": 2592000.0,
        "SlidingRefreshTokenLifetime": 1296000.0,
        "ConsentLifetime": null,
        "RefreshTokenUsage": 1.0,
        "UpdateAccessTokenClaimsOnRefresh": false,
        "RefreshTokenExpiration": 1.0,
        "AccessTokenType": 0.0,
        "EnableLocalLogin": true,
        "IdentityProviderRestrictions": [],
        "IncludeJwtId": true,
        "Claims": [],
        "AlwaysSendClientClaims": true,
        "ClientClaimsPrefix": "client_",
        "PairWiseSubjectSalt": null,
        "UserSsoLifetime": null,
        "UserCodeType": null,
        "DeviceCodeLifetime": 300.0,
        "AllowedCorsOrigins": [],
        "Properties": [],
        "Created": ISODate("2022-03-08T19:13:00.569Z"),
        "Updated": null,
        "LastAccessed": null
      },
      {
        "Enabled": true,
        "ClientId": "systematic_evaluation",
        "ProtocolType": "oidc",
        "ClientSecrets": [{
          "Description": null,
          "Value": "KAQu70uuYSUGVOSKsg/H0VWzOaNQybOBEzf8TVw87+E=",
          "Expiration": null,
          "Type": "SharedSecret",
          "Created": ISODate("2022-03-08T19:13:00.569Z")
        }],
        "RequireClientSecret": false,
        "ClientName": null,
        "Description": null,
        "ClientUri": null,
        "LogoUri": null,
        "RequireConsent": false,
        "AllowRememberConsent": true,
        "AlwaysIncludeUserClaimsInIdToken": true,
        "AllowedGrantTypes": [
          "authorization_code"
        ],
        "RequirePkce": true,
        "AllowPlainTextPkce": false,
        "RequireRequestObject": false,
        "AllowAccessTokensViaBrowser": true,
        "RedirectUris": [
          "http://localhost:8080",
          "http://localhost:3000",
          "https://se.qa.meine-inka.de",
          "http://192.168.68.102:3000",
          "https://ts.stg.meine-inka.de"
        ],
        "PostLogoutRedirectUris": [
          "http://localhost:8080",
          "http://localhost:3000",
          "https://se.qa.meine-inka.de",
          "http://192.168.68.102:3000",
          "https://ts.stg.meine-inka.de"
        ],
        "FrontChannelLogoutUri": null,
        "FrontChannelLogoutSessionRequired": true,
        "BackChannelLogoutUri": null,
        "BackChannelLogoutSessionRequired": true,
        "AllowOfflineAccess": true,
        "AllowedScopes": [
          "treatment",
          "openid"
        ],
        "IdentityTokenLifetime": 300,
        "AllowedIdentityTokenSigningAlgorithms": [],
        "AccessTokenLifetime": 3600,
        "AuthorizationCodeLifetime": 300,
        "AbsoluteRefreshTokenLifetime": 2592000,
        "SlidingRefreshTokenLifetime": 1296000,
        "ConsentLifetime": null,
        "RefreshTokenUsage": 1,
        "UpdateAccessTokenClaimsOnRefresh": false,
        "RefreshTokenExpiration": 1,
        "AccessTokenType": 0,
        "EnableLocalLogin": true,
        "IdentityProviderRestrictions": [],
        "IncludeJwtId": true,
        "Claims": [],
        "AlwaysSendClientClaims": true,
        "ClientClaimsPrefix": "client_",
        "PairWiseSubjectSalt": null,
        "UserSsoLifetime": null,
        "UserCodeType": null,
        "DeviceCodeLifetime": 300,
        "AllowedCorsOrigins": [],
        "Properties": [],
        "Created": new Date(),
        "Updated": null,
        "LastAccessed": null
      },
      {
        "_id": ObjectId("61e1ab64c9662a8a72d52a35"),
        "Enabled": true,
        "ClientId": "mobile_android",
        "ProtocolType": "oidc",
        "ClientSecrets": [{
          "Description": null,
          "Value": "jylY49CdjGuHW2d6KhfLRwhQk9eoAR75i5S4jvF27pg=",
          "Expiration": null,
          "Type": "SharedSecret",
          "Created": new Date(),
        }],
        "RequireClientSecret": true,
        "ClientName": "mobile_android",
        "Description": null,
        "ClientUri": null,
        "LogoUri": null,
        "RequireConsent": false,
        "AllowRememberConsent": true,
        "AlwaysIncludeUserClaimsInIdToken": false,
        "AllowedGrantTypes": [
          "password"
        ],
        "RequirePkce": false,
        "AllowPlainTextPkce": false,
        "RequireRequestObject": false,
        "AllowAccessTokensViaBrowser": false,
        "RedirectUris": [],
        "PostLogoutRedirectUris": [],
        "FrontChannelLogoutUri": null,
        "FrontChannelLogoutSessionRequired": true,
        "BackChannelLogoutUri": null,
        "BackChannelLogoutSessionRequired": true,
        "AllowOfflineAccess": true,
        "AllowedScopes": [
          "treatment",
          "identity",
          "openid"
        ],
        "IdentityTokenLifetime": 300,
        "AllowedIdentityTokenSigningAlgorithms": [],
        "AccessTokenLifetime": 3600,
        "AuthorizationCodeLifetime": 300,
        "AbsoluteRefreshTokenLifetime": 2592000,
        "SlidingRefreshTokenLifetime": 1296000,
        "ConsentLifetime": null,
        "RefreshTokenUsage": 1,
        "UpdateAccessTokenClaimsOnRefresh": false,
        "RefreshTokenExpiration": 0,
        "AccessTokenType": 0,
        "EnableLocalLogin": true,
        "IdentityProviderRestrictions": [],
        "IncludeJwtId": true,
        "Claims": [],
        "AlwaysSendClientClaims": true,
        "ClientClaimsPrefix": "client_",
        "PairWiseSubjectSalt": null,
        "UserSsoLifetime": null,
        "UserCodeType": null,
        "DeviceCodeLifetime": 300,
        "AllowedCorsOrigins": [],
        "Properties": [],
        "Created": new Date(),
        "Updated": null,
        "LastAccessed": null
      },
      {
        "_id": ObjectId("61e1ab64c9662a8a72d52a34"),
        "Enabled": true,
        "ClientId": "mobile_ios_anonymous",
        "ProtocolType": "oidc",
        "ClientSecrets": [{
          "Description": null,
          "Value": "ej5b0f5so0IYj6JHTdoIvZaIqGmWEREzv/cjUwJMqN0=",
          "Expiration": null,
          "Type": "SharedSecret",
          "Created": new Date(),
        }],
        "RequireClientSecret": true,
        "ClientName": "mobile_ios_anonymous",
        "Description": null,
        "ClientUri": null,
        "LogoUri": null,
        "RequireConsent": false,
        "AllowRememberConsent": true,
        "AlwaysIncludeUserClaimsInIdToken": false,
        "AllowedGrantTypes": [
          "client_credentials"
        ],
        "RequirePkce": false,
        "AllowPlainTextPkce": false,
        "RequireRequestObject": false,
        "AllowAccessTokensViaBrowser": false,
        "RedirectUris": [],
        "PostLogoutRedirectUris": [],
        "FrontChannelLogoutUri": null,
        "FrontChannelLogoutSessionRequired": true,
        "BackChannelLogoutUri": null,
        "BackChannelLogoutSessionRequired": true,
        "AllowOfflineAccess": false,
        "AllowedScopes": [
          "identity"
        ],
        "IdentityTokenLifetime": 300,
        "AllowedIdentityTokenSigningAlgorithms": [],
        "AccessTokenLifetime": 7776000,
        "AuthorizationCodeLifetime": 300,
        "AbsoluteRefreshTokenLifetime": 2592000,
        "SlidingRefreshTokenLifetime": 1296000,
        "ConsentLifetime": null,
        "RefreshTokenUsage": 1,
        "UpdateAccessTokenClaimsOnRefresh": false,
        "RefreshTokenExpiration": 0,
        "AccessTokenType": 0,
        "EnableLocalLogin": true,
        "IdentityProviderRestrictions": [],
        "IncludeJwtId": true,
        "Claims": [],
        "AlwaysSendClientClaims": false,
        "ClientClaimsPrefix": "client_",
        "PairWiseSubjectSalt": null,
        "UserSsoLifetime": null,
        "UserCodeType": null,
        "DeviceCodeLifetime": 300,
        "AllowedCorsOrigins": [],
        "Properties": [],
        "Created": ISODate("2022-01-14T16:57:08.016Z"),
        "Updated": null,
        "LastAccessed": null
      }, {
        "_id": ObjectId("61e1ab64c9662a8a72d52a36"),
        "Enabled": true,
        "ClientId": "mobile_android_anonymous",
        "ProtocolType": "oidc",
        "ClientSecrets": [{
          "Description": null,
          "Value": "CD0rvHk8mztwNUfNWFsHQC+GTOapIDIo6ISMDA4vpsM=",
          "Expiration": null,
          "Type": "SharedSecret",
          "Created": new Date(),
        }],
        "RequireClientSecret": true,
        "ClientName": "mobile_android_anonymous",
        "Description": null,
        "ClientUri": null,
        "LogoUri": null,
        "RequireConsent": false,
        "AllowRememberConsent": true,
        "AlwaysIncludeUserClaimsInIdToken": false,
        "AllowedGrantTypes": [
          "client_credentials"
        ],
        "RequirePkce": false,
        "AllowPlainTextPkce": false,
        "RequireRequestObject": false,
        "AllowAccessTokensViaBrowser": false,
        "RedirectUris": [],
        "PostLogoutRedirectUris": [],
        "FrontChannelLogoutUri": null,
        "FrontChannelLogoutSessionRequired": true,
        "BackChannelLogoutUri": null,
        "BackChannelLogoutSessionRequired": true,
        "AllowOfflineAccess": false,
        "AllowedScopes": [
          "identity"
        ],
        "IdentityTokenLifetime": 300,
        "AllowedIdentityTokenSigningAlgorithms": [],
        "AccessTokenLifetime": 7776000,
        "AuthorizationCodeLifetime": 300,
        "AbsoluteRefreshTokenLifetime": 2592000,
        "SlidingRefreshTokenLifetime": 1296000,
        "ConsentLifetime": null,
        "RefreshTokenUsage": 1,
        "UpdateAccessTokenClaimsOnRefresh": false,
        "RefreshTokenExpiration": 0,
        "AccessTokenType": 0,
        "EnableLocalLogin": true,
        "IdentityProviderRestrictions": [],
        "IncludeJwtId": true,
        "Claims": [],
        "AlwaysSendClientClaims": false,
        "ClientClaimsPrefix": "client_",
        "PairWiseSubjectSalt": null,
        "UserSsoLifetime": null,
        "UserCodeType": null,
        "DeviceCodeLifetime": 300,
        "AllowedCorsOrigins": [],
        "Properties": [],
        "Created": ISODate("2022-01-14T16:57:08.016Z"),
        "Updated": null,
        "LastAccessed": null
      }, {
        "Enabled": true,
        "ClientId": "mobile_ios",
        "ProtocolType": "oidc",
        "ClientSecrets": [{
          "Description": null,
          "Value": "5Nq4F8HXLzcn+uphP+BHZ5KaYymHDAfIxVmFw1Rn64g=",
          "Expiration": null,
          "Type": "SharedSecret",
          "Created": new Date(),
        }],
        "RequireClientSecret": true,
        "ClientName": "mobile_ios",
        "Description": null,
        "ClientUri": null,
        "LogoUri": null,
        "RequireConsent": false,
        "AllowRememberConsent": true,
        "AlwaysIncludeUserClaimsInIdToken": false,
        "AllowedGrantTypes": [
          "password"
        ],
        "RequirePkce": false,
        "AllowPlainTextPkce": false,
        "RequireRequestObject": false,
        "AllowAccessTokensViaBrowser": false,
        "RedirectUris": [],
        "PostLogoutRedirectUris": [],
        "FrontChannelLogoutUri": null,
        "FrontChannelLogoutSessionRequired": true,
        "BackChannelLogoutUri": null,
        "BackChannelLogoutSessionRequired": true,
        "AllowOfflineAccess": true,
        "AllowedScopes": [
          "treatment",
          "identity",
          "openid"
        ],
        "IdentityTokenLifetime": 300,
        "AllowedIdentityTokenSigningAlgorithms": [],
        "AccessTokenLifetime": 3600,
        "AuthorizationCodeLifetime": 300,
        "AbsoluteRefreshTokenLifetime": 2592000,
        "SlidingRefreshTokenLifetime": 1296000,
        "ConsentLifetime": null,
        "RefreshTokenUsage": 1,
        "UpdateAccessTokenClaimsOnRefresh": false,
        "RefreshTokenExpiration": 0,
        "AccessTokenType": 0,
        "EnableLocalLogin": true,
        "IdentityProviderRestrictions": [],
        "IncludeJwtId": true,
        "Claims": [],
        "AlwaysSendClientClaims": false,
        "ClientClaimsPrefix": "client_",
        "PairWiseSubjectSalt": null,
        "UserSsoLifetime": null,
        "UserCodeType": null,
        "DeviceCodeLifetime": 300,
        "AllowedCorsOrigins": [],
        "Properties": [],
        "Created": new Date(),
        "Updated": null,
        "LastAccessed": null
      }
    ]
  );
}