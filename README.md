# Next.js 15 App Router: Dynamic Route Segment with Dot (.) Causes Unexpected Behavior

This issue demonstrates unexpected behavior in the Next.js 15 App Router when using dynamic route segments that include a dot (.).  The issue is that these routes do not render correctly as expected.

## Bug Description:

When attempting to define a route like `/product/[id].json`, where `id` is a dynamic segment, the App Router fails to match the route as expected. This leads to a 404 error or incorrect rendering.

## Reproduction Steps:

1. Create a Next.js 15 application.
2. Create a page at `app/product/[id].json.js` with simple content.
3. Try to access a route such as `/product/123.json`.

## Expected Behavior:

The page at `/product/[id].json.js` should render successfully, showing data related to the specific `id`.

## Actual Behavior:

The App Router returns a 404 error or incorrectly renders the content, showing unexpected results.

## Solution:

The problem arises from the dot (`.`) in the file name.  To resolve this, we use a different convention in the dynamic segment or change the file naming convention to work around this limitation of the App Router.