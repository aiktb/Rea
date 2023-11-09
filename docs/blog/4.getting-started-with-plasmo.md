---
date: 2023-11-06
---

# 4 Key Points for Getting Started with Plasmo in Browser Extension Development

![](/img/2023-11-08-19-31.webp)

## Introduction

To understand how [Plasmo](https;//plasmo.com) enhances the developer experience, explore **_["Why Plasmo is an Excellent Choice for Developing Browser Extensions"](./plasmo-and-extension)_**.

This article integrates Plasmo with traditional browser development tools, emphasizing two critical issues to aid effective utilization and addressing peculiar behaviors to clarify developers' confusion.

All code examples in this article are from [Furigana Maker](https://github.com/aiktb/FuriganaMaker) and [Don't translate code](https://github.com/aiktb/DontTranslateCode), which I developed.

## Preparing for Coding

To broaden the extension's potential user base, it's essential to consider supporting multiple browsers. As I lack a Mac OS device, this article will only attempt to support Chrome, Edge, and Firefox, excluding Safari.

### Scripts in package.json

Given the high compatibility between Edge and Chrome, most cases allow the use of the same scripts, often eliminating the need for separate testing in Edge.

- `pnpm dev` starts the development server with Live-reloading functionality. Both Chrome and Edge can share the generated `build/chrome-mv3-dev` directory.
- `pnpm debug`, an extension of `pnpm dev`, provides additional logging information for error troubleshooting.
- `pnpm build` generates the production-ready output without any development-specific elements (e.g. `console.log`), occasionally differing from the behavior of `pnpm dev`.
- `pnpm package` compresses the directory created by `pnpm build` into `chrome-mv3-prod.zip`, suitable for submission to the Chrome Web Store for review.

```json [package.json]
{
  "scripts": {
    "dev": "plasmo dev",
    "dev:firefox": "plasmo dev --target=firefox-mv2",
    "debug": "plasmo dev --verbose",
    "debug:firefox": "plasmo dev --target=firefox-mv2 --verbose",
    "build": "plasmo build",
    "build:firefox": "plasmo build --target=firefox-mv2",
    "package": "plasmo package",
    "package:firefox": "plasmo package --target=firefox-mv2"
  }
}
```

Developers also need to install the [web-ext](https://github.com/mozilla/web-ext) dependency, which allows them to quickly open a clean window in Firefox or Chromium to load the extension (similar to incognito mode). This is very useful during final testing.

Add the following scripts to `package.json`:

```json [package.json]
{
  "scripts": {
    "start": "web-ext run --source-dir ./build/chrome-mv3-dev -t chromium --start-url chrome://newtab",
    "start:firefox": "web-ext run --source-dir ./build/firefox-mv2-dev"
  }
}
```

Without the `--start-url chrome://newtab` parameter, web-ext defaults to opening the `about:blank` page in Chromium, which can be too glaring.

The package manager issues warnings regarding peer dependencies and deprecated subdependencies. These warnings, introduced by Plasmo and web-ext upstream dependencies, persist until addressed at the upstream level. However, you can choose to [ignore these warnings](https://pnpm.io/package_json#pnpmpeerdependencyrules) for now.

Additionally, you might receive GitHub vulnerability alerts related to web-ext, used solely in the development environment. Code with vulnerabilities doesn’t enter the production build, making it safe to disregard these alerts.

### Chrome and Browser Namespace Compatibility

Despite Firefox and Edge having widespread support for the Chrome namespace by default, some APIs remain incompatible, like `chrome.tabs.query`. To run the code seamlessly across different browsers without altering the code, introduce the [webextension-polyfill](https://github.com/mozilla/webextension-polyfill) dependency. Use the following code in places where `chrome` namespace is required:

```typescript
import Browser from 'webextension-polyfill'

//chrome.tabs.sendMessage(...)
Browser.tabs.sendMessage(...)
```

This adaptation allows a smoother transition across browsers without changing the underlying codebase.

## Sending Messages Across Extension Components

Given the confusion resulting from Chrome Developer's unclear documentation, it's crucial to delve deeper into this topic.

### Sending to Content Script

Though seemingly straightforward, the usage can be perplexing. Take the following example:

::: code-group

```vue [popup.vue]
<script setup lang="ts">
...
const addFurigana = async () => {
  const tabs = await Browser.tabs.query({ active: true, currentWindow: true })
  sendMessage(tabs[0]!.id!, ExtensionEvent.AddFurigana)
}
...
</script>
```

```typescript [content.ts]
Browser.runtime.onMessage.addListener((event: ExtensionEvent) => {
  switch (event) {
    ...
  }
})
```

:::

The `{ active: true, currentWindow: true }` selection targets the current window with the open popup. However, calling it in `chrome://newtab` raises a "Could not establish connection. Receiving end does not exist." runtime error.

The reason is that numerous pages in Chrome can't inject content scripts. These pages lack registered event listeners, leaving no method in the popup to verify if the page has event listeners. To mitigate this, the `sendMessage` function can be encapsulated to capture this error.

```typescript
export const sendMessage = async (id: number, event: ExtensionEvent) => {
  try {
    await Browser.tabs.sendMessage(id, event)
  } catch (error) {
    if (
      !(error instanceof Error) ||
      error.message !== 'Could not establish connection. Receiving end does not exist.'
    ) {
      throw error
    }
  }
}
```

Avoid using `tabs.query` with the `url` parameter to determine if a page registers event listeners, as it need `tab` or `activeTab` permissions, potentially causing issues with Chrome's approval process.

### Sending to Service Worker

Plasmo registers all files in the `background` directory as a [Service Worker](https://developer.chrome.com/docs/extensions/mv3/service_workers/), ensuring the extension doesn't consume resources when idle and simplifying Service Worker usage.

Basic functionalities in `background/index.ts` using `runtime.onInstalled`, `commands.onCommand`, etc., can be employed for user settings initialization or shortcut registrations.

Beyond that, Plasmo offers more advanced capabilities through [@plasmohq/messaging](https://docs.plasmo.com/framework/messaging). This feature enables seamless messaging from popup or content scripts to the Service Worker, allowing message exchanges.

Prefer using the `@plasmohq/messaging` API over `runtime.onMessage.addListener` and `runtime.sendMessage`.

### Sending to CSUI

CSUI ([Content Scripts UI](https://docs.plasmo.com/framework/content-scripts-ui)) is a method provided by Plasmo to directly inject UIs written in Vue or React onto a page. Interaction often necessitates bidirectional communication between regular content scripts and CSUI.

As content scripts lack permission to use `runtime.onMessage.addListener`, sending messages to CSUI via `runtime.sendMessage` is impossible.

Utilizing [Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM), CSUI permits message exchange using [window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage). For bidirectional communication, register listeners both in CSUI and content scripts:

```vue [contents/CSUI.vue]
<script setup lang="ts">
window.addEventListener("message", (event) => {
  ...
  event.source.postMessage(
    ...
  );
});
</script>
```

## Accessing Extension File Assets

Plasmo generally recognizes file path references in the source code, bundling them into the build output automatically. However, at times, unconventional methods are needed to specify files for packaging.

Future Plasmo versions will support `plasmo.config.ts` to alleviate the clutter in `package.json`. But for now, add the following code:

```json [package.json]
"manifest": {
  "web_accessible_resources": [
    {
      "resources": [
        "assets/dicts/*.dat.gz"
      ],
      "matches": [
        "https://*/*"
      ]
    }
  ]
}
```

This bundles files to the specified `chrome-mv3-prod/assets` directory, accessible using [runtime.getURL](https://developer.chrome.com/docs/extensions/reference/runtime/).

Service Workers lack access to [Web Accessible Resources](https://developer.chrome.com/docs/extensions/mv3/manifest/web_accessible_resources/). Specify file locations based on Plasmo's bundled file structure, as files within the `background` directory are merged into `static/background/index.js`.

Plasmo can inline JSON data, ideal for initializing user data with [@plasmohq/storage](https://docs.plasmo.com/framework/storage). Here's a simple example:

```typescript
import { Storage } from '@plasmohq/storage'
import { ExtensionStorage } from '~contents/core'
import Browser from 'webextension-polyfill'

import defaultRules from '../../assets/rules.json'

Browser.runtime.onInstalled.addListener(async () => {
  const storage = new Storage({ area: 'local' })
  const oldRules = await storage.get(ExtensionStorage.UserRule)
  if (!oldRules) {
    await storage.set(ExtensionStorage.UserRule, defaultRules)
  }
})
```

## Addressing Common Issues in Plasmo

### Inability to Use Top-Level Await

Common scenarios demand content scripts to check user settings in storage at runtime. Attempting top-level await like this:

```typescript
import { Option } from '~contents/constants';

const storage = new Storage({ area: 'local' });
const forceConvertFont = await storage.get(Option.forceModifyFont);
if (!forceConvertFont) {
  return;
}
```

Unfortunately, this won't work due to Plasmo's packaging within a nested IIFE ([Immediately Invoked Function Expression](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)). To address this, use an IIFE to counter the nested structure:

```typescript
;(async function doSomething() {
  const storage = new Storage({ area: 'local' })
  const forceConvertFont = await storage.get(Option.forceModifyFont)
  if (!forceConvertFont) {
    return
  }
})()
```

Additionally, Chrome extension Service Workers do not permit the use of top-level await.

### Upstream Parcel Issues

Most of the issues encountered in Plasmo development seem linked to Parcel issues. To resolve these problems, it's recommended to refer to the [Parcel Github Repository](https://github.com/parcel-bundler/parcel).

Examples of such issues include:

1. Loss of SVG `viewBox` attribute in inline SVG files in the production environment, causing image scaling issues ([plasmo#728](https://github.com/PlasmoHQ/plasmo/issues/728)).
2. Specifying `engines` in `package.json` resulting in build failures ([plasmo#750](https://github.com/PlasmoHQ/plasmo/issues/750)).

These issues persist due to challenges in Plasmo's underlying Parcel integration, making their resolution uncertain.
