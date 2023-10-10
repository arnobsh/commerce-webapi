"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4056],{75641:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return u}});var a=n(87462),r=n(63366),s=(n(15007),n(64983)),o=n(91515),i=["components"],d={},m={_frontmatter:d},l=o.Z;function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.mdx)(l,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"token-based-authentication"},"Token-based authentication"),(0,s.mdx)("p",null,"To make a web API call from a client such as a mobile application, you must supply an ",(0,s.mdx)("em",{parentName:"p"},"access token")," on the call. The token acts like an electronic key that lets you access the API."),(0,s.mdx)("p",null,"Adobe Commerce and Magento Open Source issue the following types of access tokens:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Token type"),(0,s.mdx)("th",{parentName:"tr",align:null},"Description"),(0,s.mdx)("th",{parentName:"tr",align:null},"Default lifetime"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Integration"),(0,s.mdx)("td",{parentName:"tr",align:null},"The merchant determines which Commerce resources the integration can access."),(0,s.mdx)("td",{parentName:"tr",align:null},"Indefinite. It lasts until it is manually revoked.")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Admin"),(0,s.mdx)("td",{parentName:"tr",align:null},"The merchant determines which Commerce resources an admin user has access to."),(0,s.mdx)("td",{parentName:"tr",align:null},"4 hours")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,s.mdx)("td",{parentName:"tr",align:null},"Commerce grants access to resources with the ",(0,s.mdx)("inlineCode",{parentName:"td"},"anonymous")," or ",(0,s.mdx)("inlineCode",{parentName:"td"},"self")," permission. Merchants cannot edit these settings."),(0,s.mdx)("td",{parentName:"tr",align:null},"1 hour")))),(0,s.mdx)("h2",{id:"integration-tokens"},"Integration tokens"),(0,s.mdx)("p",null,"When a merchant creates and activates an integration, Commerce generates a consumer key, consumer secret, access token, and access token secret. All of these entities are used for ",(0,s.mdx)("a",{parentName:"p",href:"./gs-authentication-oauth.md"},"OAuth-based authentication"),"."),(0,s.mdx)("p",null,"In previous versions of Commerce, the access token could be used on its own for token-based authentication. This behavior has been disabled by default due to the security implications of a never-expiring access token. Namely, if the access token is compromised it provides undetected persistent access to a store."),(0,s.mdx)("p",null,"However, while it is not recommended, this behavior can be restored in the Admin by setting the ",(0,s.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,s.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,s.mdx)("strong",{parentName:"p"},"Services")," > ",(0,s.mdx)("strong",{parentName:"p"},"OAuth")," > ",(0,s.mdx)("strong",{parentName:"p"},"Consumer Settings")," > ",(0,s.mdx)("strong",{parentName:"p"},"Allow OAuth Access Tokens to be used as standalone Bearer tokens")," option to ",(0,s.mdx)("strong",{parentName:"p"},"Yes"),". You can also enable this setting from the CLI by running the following command:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento config:set oauth/consumer/enable_integration_as_bearer 1\n")),(0,s.mdx)("p",null,"If you are trying to upgrade from a previous version and need to update your integration implementation to properly utilize the OAuth workflow, review ",(0,s.mdx)("a",{parentName:"p",href:"./gs-authentication-oauth.md"},"OAuth-based Authentication"),". Otherwise, you can partially update your integration to simply store and utilize all four credentials to sign your requests."),(0,s.mdx)("p",null,"There is a comprehensive guide for this on the OAuth-based authentication page, but can also be done in isolation without supporting the entire OAuth workflow. For example, in the following script the four credentials are used to create a new CMS page without using external libraries or implementing the full OAuth handshake."),(0,s.mdx)("p",null),(0,s.mdx)("details",null,(0,s.mdx)("summary",null,(0,s.mdx)("b",null,"standalone-oauth.php ")),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\nconst CONSUMER_KEY = '<placeholder>';\nconst CONSUMER_SECRET = '<placeholder>';\nconst ACCESS_TOKEN = '<placeholder>';\nconst ACCESS_TOKEN_SECRET = '<placeholder>';\n\nclass RequestDTO {\n    public function __construct(\n        public string $url,\n        public string $method = 'GET',\n        public ?string $body = null,\n        public array $headers = [],\n    ) {}\n}\nclass OAuthCredentialsDTO {\n    public function __construct(\n        public string $consumerKey,\n        public string $consumerSecret,\n        public string $accessToken,\n        public string $accessTokenSecret\n    ) {}\n}\n\nclass OAuthRequestSigner\n{\n    public function sign(\n        RequestDTO $request,\n        OAuthCredentialsDTO $credentials\n    ): string {\n        $urlParts = parse_url($request->url);\n        // Normalize the OAuth params for the base string\n        $normalizedHeaders = $request->headers;\n        sort($normalizedHeaders);\n        $oauthParams = [\n            'oauth_consumer_key' => $credentials->consumerKey,\n            'oauth_nonce' => base64_encode(random_bytes(32)),\n            'oauth_signature_method' => 'HMAC-SHA256',\n            'oauth_timestamp' => time(),\n            'oauth_token' => $credentials->accessToken\n        ];\n        // Create the base string\n        $signingUrl = $urlParts['scheme'] . '://' . $urlParts['host'] . $urlParts['path'];\n        $paramString = $this->createParamString($urlParts['query'] ?? null, $oauthParams);\n        $baseString = strtoupper($request->method) . '&' . rawurlencode($signingUrl) . '&' . rawurlencode($paramString);\n        // Create the signature\n        $signatureKey = $credentials->consumerSecret . '&' . $credentials->accessTokenSecret;\n        $signature = base64_encode(hash_hmac('sha256', $baseString, $signatureKey, true));\n        return $this->createOAuthHeader($oauthParams, $signature);\n    }\n    private function createParamString(?string $query, array $oauthParams): string\n    {\n        // Create the params string\n        $params = array_merge([], $oauthParams);\n        if (!empty($query)) {\n            foreach (explode('&', $query) as $paramToValue) {\n                $paramData = explode('=', $paramToValue);\n                if (count($paramData) === 2) {\n                    $params[rawurldecode($paramData[0])] = rawurldecode($paramData[1]);\n                }\n            }\n        }\n        ksort($params);\n        $paramString = '';\n        foreach ($params as $param => $value) {\n            $paramString .= rawurlencode($param) . '=' . rawurlencode($value) . '&';\n        }\n        return rtrim($paramString, '&');\n    }\n    private function createOAuthHeader(array $oauthParams, string $signature): string\n    {\n        // Create the OAuth header\n        $oauthHeader = \"Authorization: Oauth \";\n        foreach ($oauthParams as $param => $value) {\n            $oauthHeader .= \"$param=\\\"$value\\\",\";\n        }\n        return $oauthHeader . \"oauth_signature=\\\"$signature\\\"\";\n    }\n}\n\nfunction send(RequestDTO $request): string\n{\n    $ch = curl_init();\n    curl_setopt($ch, CURLOPT_URL, $request->url);\n    curl_setopt($ch, CURLOPT_HEADER, false);\n    curl_setopt($ch, CURLOPT_HTTPHEADER, $request->headers);\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $request->method);\n    curl_setopt($ch, CURLOPT_POSTFIELDS, $request->body ?? '');\n    return (string)curl_exec($ch);\n}\n\n$oauthSigner = new OAuthRequestSigner();\n$request = new RequestDTO(\n    'https://example.com/rest/V1/cmsPage',\n    'POST',\n    '{\n          \"page\": {\n            \"identifier\": \"test-page\",\n            \"title\": \"my-page\",\n            \"content\": \"<h1>hello</h1>\",\n            \"active\": true\n          }\n        }',\n    ['Content-Type: application/json']\n);\n$request->headers[] = $oauthSigner->sign(\n    $request,\n    new OAuthCredentialsDTO(\n        CONSUMER_KEY,\n        CONSUMER_SECRET,\n        ACCESS_TOKEN,\n        ACCESS_TOKEN_SECRET\n    )\n);\necho send($request);\n"))),(0,s.mdx)("h2",{id:"admin-and-customer-access-tokens"},"Admin and customer access tokens"),(0,s.mdx)("p",null,"Commerce provides a separate token service for administrators and customers. When you request a token from one of these services, the service returns a unique access token in exchange for an account's username and password."),(0,s.mdx)("p",null,"The web API framework allows ",(0,s.mdx)("em",{parentName:"p"},"guest users")," to access resources that are configured with the permission level of anonymous. Guest users are users who the framework cannot authenticate through existing authentication mechanisms. As a guest user, you do not need to, but you can, specify a token in a web API call for a resource with anonymous permission. ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/rest/use-rest/anonymous-api-security/"},"Restricting access to anonymous web APIs")," contains a list of APIs that do not require a token."),(0,s.mdx)("p",null,"The following table lists endpoints and services that can be used to get an authentication token. Admin accounts must be authenticated with a ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/testing/functional-testing-framework/two-factor-authentication/"},"two factor authentication")," provider. Some providers may require multiple calls."),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Token type"),(0,s.mdx)("th",{parentName:"tr",align:null},"REST"),(0,s.mdx)("th",{parentName:"tr",align:null},"SOAP"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Admin with Google Authenticator"),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"POST /V1/tfa/provider/google/authenticate")),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"twoFactorAuthGoogleAuthenticateV1"))),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Admin with Duo Security"),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"POST /V1/tfa/provider/duo-security/authenticate")),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"twoFactorAuthDuoAuthenticateV1"))),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Admin with Authy"),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"POST /V1/tfa/provider/authy/authenticate")),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"twoFactorAuthAuthyAuthenticateV1"))),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Admin with U2F"),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"POST /V1/tfa/provider/u2fkey/verify")),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"twoFactorAuthU2fKeyAuthenticateV1"))),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Customer"),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"POST /V1/integration/customer/token")),(0,s.mdx)("td",{parentName:"tr",align:null},(0,s.mdx)("inlineCode",{parentName:"td"},"integrationCustomerTokenServiceV1"))))),(0,s.mdx)("p",null,"For most web API calls, you supply this token in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Authorization")," request header with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"Bearer")," HTTP authorization scheme to prove your identity. By default, an admin token is valid for 4 hours, while a customer token is valid for 1 hour. You can change these values from Admin by selecting ",(0,s.mdx)("strong",{parentName:"p"},"Stores")," > ",(0,s.mdx)("strong",{parentName:"p"},"Settings")," > ",(0,s.mdx)("strong",{parentName:"p"},"Configuration")," > ",(0,s.mdx)("strong",{parentName:"p"},"Services")," > ",(0,s.mdx)("strong",{parentName:"p"},"OAuth")," > ",(0,s.mdx)("strong",{parentName:"p"},"Access Token Expiration"),"."),(0,s.mdx)("p",null,"A cron job that runs hourly removes all expired tokens."),(0,s.mdx)("h2",{id:"ims-access-tokens-for-web-api-calls"},"IMS access tokens for web API calls"),(0,s.mdx)("p",null,"Web API services and events need access tokens to provide authentication credentials to protected resources once the Commerce Admin is integrated with the IMS authentication workflow."),(0,s.mdx)("h3",{id:"ims-access-tokens-and-the-admin_adobe_ims_webapi-table"},"IMS access tokens and the admin_adobe_ims_webapi table"),(0,s.mdx)("p",null,"Each IMS access token is defined by an ",(0,s.mdx)("inlineCode",{parentName:"p"},"access_token_hash")," entry in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"admin_adobe_ims_webapi")," table. This table keeps a record of all validated access tokens. When a token is validated or invalidated, a record of its status is preserved here."),(0,s.mdx)("h3",{id:"access-token-expiration"},"Access token expiration"),(0,s.mdx)("p",null,"No dependency exists between IMS access token lifetime and Commerce session lifetime. Access token life is set by the Adobe IMS service and has a default value of 24 hours. Each access token's expiration time is saved in an ",(0,s.mdx)("inlineCode",{parentName:"p"},"expires_in")," value in the ",(0,s.mdx)("inlineCode",{parentName:"p"},"admin_adobe_ims_webapi")," table."),(0,s.mdx)("h3",{id:"commerce-session-management-and-adobe-ims-access-tokens"},"Commerce session management and Adobe IMS access tokens"),(0,s.mdx)("p",null,"Access tokens hold both user credentials and login session information. Once a user has been authenticated and a session has begun, these two variables are added to the user's session:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"token_last_check_time"),". Identifies the current time and is used by the ",(0,s.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AdminAdobeIms\\Plugin\\BackendAuthSessionPlugin")," plugin."),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"adobe_access_token")," — Identifies  the ",(0,s.mdx)("inlineCode",{parentName:"p"},"ACCESS_TOKEN")," value received during authorization."),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"\\Magento\\AdminAdobeIms\\Plugin\\BackendAuthSessionPlugin")," plugin checks if the ",(0,s.mdx)("inlineCode",{parentName:"p"},"token_last_check_time")," was updated 10 min ago. If the ",(0,s.mdx)("inlineCode",{parentName:"p"},"token_last_check_time")," was checked ten minutes ago, then the authentication workflow makes an API call to IMS to validate the access token, and the session continues. If the access token is valid, then the ",(0,s.mdx)("inlineCode",{parentName:"p"},"token_last_check_time")," value is updated to the current time. If the token is not valid, the session is terminated."),(0,s.mdx)("h2",{id:"request-a-token"},"Request a token"),(0,s.mdx)("p",null,"A access token request contains three basic elements:"),(0,s.mdx)("table",null,(0,s.mdx)("thead",{parentName:"table"},(0,s.mdx)("tr",{parentName:"thead"},(0,s.mdx)("th",{parentName:"tr",align:null},"Component"),(0,s.mdx)("th",{parentName:"tr",align:null},"Specifies"))),(0,s.mdx)("tbody",{parentName:"table"},(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Endpoint"),(0,s.mdx)("td",{parentName:"tr",align:null},"A combination of the ",(0,s.mdx)("em",{parentName:"td"},"server")," that fulfills the request, the web service, and the ",(0,s.mdx)("inlineCode",{parentName:"td"},"resource")," against which the request is being made.",(0,s.mdx)("br",null),(0,s.mdx)("br",null),"For example, in the ",(0,s.mdx)("inlineCode",{parentName:"td"},"POST <host>/rest/<store_code>/V1/integration/customer/token")," endpoint:",(0,s.mdx)("br",null),"The server is ",(0,s.mdx)("inlineCode",{parentName:"td"},"magento.host/index.php/"),",",(0,s.mdx)("br",null)," the web service is ",(0,s.mdx)("inlineCode",{parentName:"td"},"rest"),".",(0,s.mdx)("br",null)," and the resource is ",(0,s.mdx)("inlineCode",{parentName:"td"},"/V1/integration/customer/token"),".")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Content type"),(0,s.mdx)("td",{parentName:"tr",align:null},"The content type of the request body. Set this value to either ",(0,s.mdx)("inlineCode",{parentName:"td"},'"Content-Type:application/json"')," or ",(0,s.mdx)("inlineCode",{parentName:"td"},'"Content-Type:application/xml"'),".")),(0,s.mdx)("tr",{parentName:"tbody"},(0,s.mdx)("td",{parentName:"tr",align:null},"Credentials"),(0,s.mdx)("td",{parentName:"tr",align:null},"The username and password for a Commerce account.",(0,s.mdx)("br",null),(0,s.mdx)("br",null),"To specify these credentials in a JSON request body, include code similar to the following in the call: ",(0,s.mdx)("br",null),(0,s.mdx)("br",null),(0,s.mdx)("inlineCode",{parentName:"td"},'{"username":"<USER-NAME>", "password":"<PASSWORD>"}'),(0,s.mdx)("br",null),(0,s.mdx)("br",null),"To specify these credentials in XML, include code similar to the following in the call:",(0,s.mdx)("br",null),(0,s.mdx)("br",null),(0,s.mdx)("inlineCode",{parentName:"td"},"<login><username>customer1</username><password>customer1pw</password></login>"))))),(0,s.mdx)("h3",{id:"examples"},"Examples"),(0,s.mdx)("p",null,"The following image shows a token request for the admin account using a REST client:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/5530d/gs_auth_token1.webp 320w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/0c8fb/gs_auth_token1.webp 640w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/94b1e/gs_auth_token1.webp 1280w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/0b34d/gs_auth_token1.webp 1920w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/63696/gs_auth_token1.webp 1948w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/dd4a7/gs_auth_token1.png 320w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/0f09e/gs_auth_token1.png 640w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/bbbf7/gs_auth_token1.png 1280w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/ac7a9/gs_auth_token1.png 1920w","/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/46dcf/gs_auth_token1.png 1948w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-webapi/static/ae799da73e18e3727f6db2cf6d2d95d9/bbbf7/gs_auth_token1.png",alt:"REST client",title:"REST client",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,"The following example uses the ",(0,s.mdx)("inlineCode",{parentName:"p"},"curl")," command to request a token for a customer account:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://<host>/rest/default/V1/integration/customer/token" \\\n     -H "Content-Type:application/json" \\\n     -d \'{"username":"customer@example.com", "password":"customer_password"}\'\n')),(0,s.mdx)("p",null,"The following example makes the same request with XML for a customer account token:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "http://<host>/rest/default/V1/integration/customer/token" \\\n     -H "Content-Type:application/xml"  \\\n     -d "<login><username>customer1</username><password>customer1pw</password></login>"\n')),(0,s.mdx)("p",null,"For more information about the ",(0,s.mdx)("inlineCode",{parentName:"p"},"curl")," command, see ",(0,s.mdx)("a",{parentName:"p",href:"../gs-curl.md"},"Use cURL to run the request")),(0,s.mdx)("h2",{id:"authentication-token-response"},"Authentication token response"),(0,s.mdx)("p",null,"A successful request returns a response body with the token, as follows:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"asdf3hjklp5iuytre")),(0,s.mdx)("h2",{id:"use-the-token-in-a-web-api-request"},"Use the token in a Web API request"),(0,s.mdx)("p",null,"Any web API call that accesses a resource that requires a permission level higher than anonymous must contain the authentication token in the header To do this, specify a HTTP header in the following format:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},"Authorization: Bearer <authentication token>")),(0,s.mdx)("h3",{id:"admin-access"},"Admin access"),(0,s.mdx)("p",null,"Admins can access any resources for which they are authorized."),(0,s.mdx)("p",null,"For example, to make a web API call with an admin token:"),(0,s.mdx)("p",null,(0,s.mdx)("inlineCode",{parentName:"p"},'curl -X GET "http://<host>/rest/default/V1/customers/2" -H "Authorization: Bearer vbnf3hjklp5iuytre"')),(0,s.mdx)("h3",{id:"customer-access"},"Customer access"),(0,s.mdx)("p",null,"Customers can access only resources with ",(0,s.mdx)("inlineCode",{parentName:"p"},"self")," permissions."),(0,s.mdx)("p",null,"For example, to make a web API call with a customer token:\n",(0,s.mdx)("inlineCode",{parentName:"p"},'curl -X GET "http://<host>/rest/default/V1/customers/me" -H "Authorization: Bearer asdf3hjklp5iuytre"')),(0,s.mdx)("h4",{id:"related-topics"},"Related topics"),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"../gs-web-api-request.md"},"Construct a request")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/web-api/services/"},"Configure services as web APIs")),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/rest/use-rest/anonymous-api-security/"},"Restricting access to anonymous web APIs")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-get-started-authentication-gs-authentication-token-md-ada4aaf9ac3b2dd6cb00.js.map