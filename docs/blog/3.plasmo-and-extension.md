---
date: 2023-11-05
---

# Why Plasmo is an Excellent Choice for Developing Browser Extensions

![](https://s2.loli.net/2023/11/04/phSMLOmulnER7C6.webp)

## Introduction

Getting started with browser extension development can be quite challenging, often leading inexperienced developers to spend hours or even days troubleshooting issues that are unrelated to the application logic.

This article aims to address the common pain points encountered in conventional browser development and explore how [Plasmo](https://www.plasmo.com/) alleviates these issues, ultimately enhancing the developer experience.

## Why the Need for Something Else?

The structure of browser extensions in the [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/mv3/) appears deceptively simple, resembling the most basic web development. However, this structure, as described in the documentation, is primarily a release structure, often representing the final stage of the development process.

Similar to how most developers prefer using tools like React, TypeScript, or Tailwind CSS, a good library or framework significantly accelerates development. Few opt for hand-writing CSS, JavaScript, or HTML due to the low development efficiency and maintainability it implies.

According to a [simple data analysis](https://gist.github.com/aiktb/057c3d18b0653edb4e3d710143171fb4) of the top 50 browser extensions on Github sorted by star count, the majority employ webpack or manually scripted builds, with nearly one-third utilizing TypeScript. This data serves as a testament to the issue at hand.

![Browser Extension Stats](/img/2023-11-08-19-35.webp)

## Why Plasmo Stands Out

After reviewing the various building methods used by the top 50 browser extensions on GitHub, only one employed Plasmo. However, after experimenting with numerous methods, I discovered that Plasmo was the only tool that truly proved to be effective, significantly reducing the burdens on developers.

Tools like Webpack or Vite aren’t inherently tailored for browser extension development. Existing ecosystem plugins for browser extension development rely on intricate configurations, causing frustration, particularly when these plugins frequently don’t align well with certain common tech stacks.

For instance, when I aimed to develop a browser plugin to inject the `translate="no"` attribute into `pre` elements on a page to prevent erroneous translations by translators, it should have been a task requiring less than 400 lines of code, excluding various configuration files. However, before I used Plasmo, it took me a week to figure out how to integrate Vue, TypeScript, Tailwind CSS, and more into browser extension development.

So, when I opened the [Plasmo README.md](https://github.com/PlasmoHQ/plasmo#readme), I was immediately captivated. It's a tool built specifically for browser extension development, offering key features like:

- First-class support for React and **Typescript**
- **Declarative Development**
- **Live-reloading** and React HMR
- Optional support for Svelte and **Vue**

Plasmo provides everything I need in browser development. It’s nearly zero-config and doesn’t even require a `manifest.json`.

Simply install dependencies, include `tailwind.config.ts`, `tsconfig.json`, and more. Write TS files directly in the `contents` directory or Vue files in the `popup` directory (of course, React is also an option). Then, start the development server with `pnpm dev`, open Developer mode in the browser, click on **Load unpacked**, load the `build/chrome-mv3-dev` directory, and enjoy it.

All of these elements should be fundamental in a modern JavaScript project. However, browser development before using Plasmo was an exasperating experience. The work done by [@PlasmoHQ](https://github.com/PlasmoHQ/) is commendable, as they've made browser development feel like a breeze instead of a struggle!

## Conclusion

If you're eager to dive straight into developing the application logic for your browser extension, don't hesitate—immediately check out the [Plasmo documentation](https://docs.plasmo.com/)!

Plasmo boasts a relatively active community where you can seek assistance through [Github Issues](https://github.com/PlasmoHQ/plasmo/issues) and [Github Discussions](https://github.com/PlasmoHQ/plasmo/discussions).

Recommended Reading: **_["4 Keys to Getting Started with Plasmo in Browser Extension Development"](./getting-started-with-plasmo)_**.
