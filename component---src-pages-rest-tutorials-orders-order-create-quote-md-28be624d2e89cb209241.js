"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[9443],{99690:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return c}});var a,o=n(87462),r=n(63366),i=(n(15007),n(64983)),s=n(91515),m=["components"],d={},l=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),u={_frontmatter:d},p=s.Z;function c(e){var t=e.components,n=(0,r.Z)(e,m);return(0,i.mdx)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"step-4-create-a-quote"},"Step 4. Create a quote"),(0,i.mdx)("p",null,"When a customer adds an item to their shopping cart for the first time, Adobe Commerce creates a quote. Commerce uses a quote to perform tasks such as"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Track each item the customer wants to buy, including the quantity and base cost"),(0,i.mdx)("li",{parentName:"ul"},"Gather information about the customer, including billing and shipping addresses"),(0,i.mdx)("li",{parentName:"ul"},"Determine shipping costs"),(0,i.mdx)("li",{parentName:"ul"},"Calculate the subtotal, add costs (shipping fees, taxes, etc.) and apply coupons to determine the grand total"),(0,i.mdx)("li",{parentName:"ul"},"Determine the payment method"),(0,i.mdx)("li",{parentName:"ul"},"Place the order so that the merchant can fulfill it.")),(0,i.mdx)("h3",{id:"types-of-carts"},"Types of carts"),(0,i.mdx)("p",null,"Commerce identifies three types of users that can create a shopping cart:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"An admin user can create a cart on behalf of a customer. For all admin requests, you must provide an admin authorization token in the call's authorization header."),(0,i.mdx)("li",{parentName:"ul"},"A logged-in customer. Calls to create a cart and add items must contain the customer's authorization token in the authorization header."),(0,i.mdx)("li",{parentName:"ul"},"A guest user. These users could be customers who haven't logged in yet, or they could be users who have no intention of creating an account. An anonymous user's cart is called a guest cart.")),(0,i.mdx)("h3",{id:"create-a-cart-for-a-logged-in-customer"},"Create a cart for a logged-in customer"),(0,i.mdx)("p",null,"All calls for a logged in customer must specify customer's token ",(0,i.mdx)("inlineCode",{parentName:"p"},"q0u66k8h42yaevtchv09uyy3y9gaj2ap")," in the header."),(0,i.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"V1/guest-carts")," endpoint to create a cart on behalf of a guest. Do not include an authorization token. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"quoteId")," for the guest customer quote will be masked."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Endpoint:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"POST <host>/rest/<store_code>/V1/carts/mine")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Headers:")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Content-Type: application/json")),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Authorization: Bearer <customer token>")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Payload:")),(0,i.mdx)("p",null,"None"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Response:")),(0,i.mdx)("p",null,"The response is the ",(0,i.mdx)("inlineCode",{parentName:"p"},"quoteId: 4")),(0,i.mdx)(l,{variant:"success",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Some calls refer to this parameter as the ",(0,i.mdx)("inlineCode",{parentName:"p"},"cartId"),"."),(0,i.mdx)("h3",{id:"verify-this-step"},"Verify this step"),(0,i.mdx)("p",null,"There are no additional verification steps.",(0,i.mdx)("inlineCode",{parentName:"p"},"quoteId")," values are not displayed on the website or in Admin."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-tutorials-orders-order-create-quote-md-28be624d2e89cb209241.js.map