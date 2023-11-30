---
title: Payment Services product page workflow
description: Learn how Adobe Commerce uses GraphQL to process orders with Payment Services as a payment method from the product page.
keywords:
  - GraphQL
  - Payments
---

# Payment services product page workflow

These steps describe the additional flow of requests and responses required to place an order after [adding a product to your cart](../tutorials/checkout/add-product-to-cart.md) with the [Payment Services](https://experienceleague.adobe.com/docs/commerce-merchant-services/payment-services/guide-overview.html) solution enabled.

## Product page workflow

![Payment Services sequence diagram](../../_images/graphql/payment-services-minicart.svg)

1. Run `getPaymentConfig` to fetch the payment configuration to retrieve and render details about PayPal components, such as hosted fields, smart buttons, and Apple Pay.

1. Commerce returns payment configuration information.

1. Run `createPaymentOrder` to begin the authorization process.

1. Commerce forwards the request to PayPal.

1. PayPal returns an `id` value.

1. Adobe Commerce generates an `order_id` and forwards the value in the `mp_order_id` field and in the PayPal response in the `id` field.

1. Run `syncPaymentOrder` to get payment details and update the quote with shipping, billing, email, and phone number details.

1. Commerce returns details about the payment order.

1. Run `setShippingMethodsOnCart` to define the delivery methods for your order.

1. Commerce returns details about the delivery methods for your order.

1.  Run `placeOrder`.

1.  Commerce sends an authorization request to PayPal.

1.  PayPal returns the result to Commerce.

1.  Commerce creates an order.

## `setPaymentMethodOnCartInput` object

When you set the payment method to Payment Services in the [`setPaymentMethodOnCart`](../schema/cart/mutations/set-payment-method.md) mutation, the `setPaymentMethodOnCartInput` object must contain specific `Payment Services` attributes for the supported payment methods.

### Payment Services object

The `Payment Services` object must contain the following attributes:

Attribute |  Data Type | Description
--- | --- | ---
`is_active_payment_token_enabler` | Boolean | States whether a customer-entered credit/debit card should be tokenized for later usage. The default value is false. Required only if vaulting is enabled for Payment Services payment integration
`location` | PaymentLocation! | The origin location for that payment request. The possible values are PRODUCT_DETAIL, MINICART, CART, CHECKOUT, ADMIN
`payments_order_id` | String! | The unique order ID generated in Commerce if Payment Services is enabled after PayPal returns the `paypal_order_id`
`paypal_order_id` | String! | The unique order ID generated by PayPal when receiving the authorization request
`payment_source` | String! | The identifiable payment source for the payment method

### `setPaymentMethodOnCart` mutation example

The following example shows the `setPaymentMethodOnCart` mutation run with a `location: PRODUCT_DETAIL`:

**Request:**

```text
mutation {
    setPaymentMethodOnCart ( input: {
      cart_id: "uocGxUi5H97XFAMhY3s66q4aFYG3Bmdr",
      payment_method: {
        code: "payment_services_paypal_hosted_fields",
        payment_services_paypal_hosted_fields: {
          payment_source: "cc",
          payments_order_id: "mp-order-a4babd34-13d3-4ac0-b1b0-109bb7be1574",
          paypal_order_id: "9R90936863877801D",
          is_active_payment_token_enabler: true,
          location: PRODUCT_DETAIL
        }
      }
    }
    ) {
       cart {
         id
         selected_payment_method {
           code
         }
       }
    }
  }
```

**Response:**

```json
{
  "data": {
    "setPaymentMethodOnCart": {
      "cart": {
        "id": "r8TKHa58b7Y8VaZHLyABNxrEdS8hJJTZ",
        "selected_payment_method": {
          "code": "payment_services_paypal_hosted_fields"
        }
      }
    }
  }
}
```