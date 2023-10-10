"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[4319],{34183:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return u}});var t,d=a(87462),l=a(63366),r=(a(15007),a(64983)),i=a(91515),m=["components"],o={},p=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),c={_frontmatter:o},s=i.Z;function u(e){var n=e.components,a=(0,l.Z)(e,m);return(0,r.mdx)(s,(0,d.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"dynamicblocks-query"},"dynamicBlocks query"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"dynamicBlocks")," query returns a list of dynamic blocks that have been placed in a Dynamic Blocks Rotator inline widget and meet the specified criteria."),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The Banner functionality was removed from Adobe Commerce and Magento Open Source 2.4.0 and replaced with dynamic blocks."),(0,r.mdx)("p",null,"When a ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/cms/dynamic-blocks-rotate.html"},"Dynamic Blocks Rotator inline widget is created"),", the administrator can select the following options:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Specified Dynamic Blocks")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Cart Price Rule Related")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Catalog Price Rule Related"))),(0,r.mdx)("p",null,"Widgets defined with the ",(0,r.mdx)("strong",{parentName:"p"},"Specified Dynamic Blocks")," option affect CMS page rendering. The other two options are used for rendering cart, product, and catalog pages and are not applicable for PWA applications. Therefore, in most cases for a CMS page, your query should assign the value of ",(0,r.mdx)("inlineCode",{parentName:"p"},"SPECIFIED")," to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"type")," input attribute."),(0,r.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"Adobe Commerce and Magento Open Source GraphQL supports the ",(0,r.mdx)("strong",{parentName:"p"},"Display all instead of rotating")," rotation mode only."),(0,r.mdx)("p",null,"The following input fields are available only if specialized modules have been installed:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"audience_id")," field"),(0,r.mdx)("td",{parentName:"tr",align:null},"FilterEqualTypeInput"),(0,r.mdx)("td",{parentName:"tr",align:null},"The Audience ID for this block. Available in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"magento/audiences")," module only.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"cart_id")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"The unique ID that identifies the customer's cart. Available in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"magento2-pwa-commerce")," module only.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"product_uid")),(0,r.mdx)("td",{parentName:"tr",align:null},"ID"),(0,r.mdx)("td",{parentName:"tr",align:null},"The unique ID of the currently viewed product. Available in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"magento2-pwa-commerce")," module only.")))),(0,r.mdx)("p",null,"If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"magento/audiences")," module is installed, the following field can be returned:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"DynamicBlocks.audience_id")),(0,r.mdx)("td",{parentName:"tr",align:null},"[ID]"),(0,r.mdx)("td",{parentName:"tr",align:null},"An array of Audience IDs for this block. Available in the ",(0,r.mdx)("inlineCode",{parentName:"td"},"magento/audiences")," module only.")))),(0,r.mdx)("h2",{id:"syntax"},"Syntax"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"dynamicBlocks(\n    input: DynamicBlocksFilterInput\n    pageSize: Int\n    currentPage: Int\n    ): DynamicBlocks!\n")),(0,r.mdx)("h2",{id:"reference"},"Reference"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql-api/index.html#query-dynamicBlocks"},(0,r.mdx)("inlineCode",{parentName:"a"},"dynamic_blocks"))," reference provides detailed information about the types and fields defined in this query."),(0,r.mdx)("h2",{id:"example-usage"},"Example usage"),(0,r.mdx)("p",null,"The following query returns all dynamic blocks of type ",(0,r.mdx)("inlineCode",{parentName:"p"},"SPECIFIED"),". The returned item is a dynamic block containing only text. The second item contains a PNG file."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Request:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-graphql"},"{\n  dynamicBlocks(input:\n  {\n    type: SPECIFIED\n  })\n  {\n    items {\n      uid\n      content {\n        html\n      }\n    }\n    page_info {\n      current_page\n      page_size\n      total_pages\n    }\n    total_count\n  }\n}\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Response:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "dynamicBlocks": {\n      "items": [\n        {\n          "uid": "MQ==",\n          "content": {\n            "html": "<h2><strong>SAVE 20%</strong></h2>\\r\\n<p>(some restrictions apply)</p>\\r\\n<p>&nbsp;</p>"\n          }\n        },\n        {\n          "uid": "Mg==",\n          "content": {\n            "html": "<p><img src=\\"{{media url=&quot;wysiwyg/save20.png&quot;}}\\" alt=\\"save 20% red\\"></p>"\n          }\n        }\n      ],\n      "page_info": {\n        "current_page": 1,\n        "page_size": 20,\n        "total_pages": 1\n      },\n      "total_count": 2\n    }\n  }\n}\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"cmsPage query response:")),(0,r.mdx)("p",null,"The following code illustrates the definition of the dynamic block with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"uid")," of ",(0,r.mdx)("inlineCode",{parentName:"p"},"MQ=="),", as returned by the ",(0,r.mdx)("a",{parentName:"p",href:"../../store/queries/cms-page.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"cmsPage")," query"),". The response has been reformatted for readability."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},'<div class=\\"widget block block-banners\\"\n  data-bind=\\"scope: \'banner\'\\"\n  data-banner-id=\\"833e4819d6c46ab41e9910f17dc04f72329cb84f1b0dc3aa76d43bcb11d605a6\\"\n  data-types=\\"\\"\n  data-display-mode=\\"fixed\\"\n  data-ids=\\"1\\"\n  data-rotate=\\"\\"\n  data-store-id=\\"1\\"\n  data-uids=\\"MQ==\\">\\n\n\n  <ul class=\\"banner-items\\"\n    data-bind=\\"afterRender: registerBanner\\">\\n\n\n    \x3c!-- ko foreach: getItems833e4819d6c46ab41e9910f17dc04f72329cb84f1b0dc3aa76d43bcb11d605a6() --\x3e\\n\n\n    <li class=\\"banner-item\\"\n      data-bind=\\"attr: {\'data-banner-id\': $data.bannerId}\\">\\n\n\n      <div class=\\"banner-item-content\\" data-bind=\\"bindHtml: $data.html\\"></div>\\n\n    </li>\\n\n\n    \x3c!-- /ko --\x3e\\n\n  </ul>\\n\n</div>\n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-graphql-schema-store-queries-dynamic-blocks-md-82e7ee3004bd348c9d90.js.map