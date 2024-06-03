# Contributing

## Before getting started

### Thank you for contributing to our project!

First of all, we would like to extend our heartfelt thanks to all members of the community who have contributed their time, expertise, and support to this project. Whether you've reported a bug, suggested a feature, or submitted code, your contributions have made a significant impact, and we are truly grateful for all your efforts.

In case you want to talk about the project, or perhaps there are some questions, ideas, or concerns, do not hesitate to reach out to us. We are here to support you and ensure that your contributions are acknowledged and appreciated.

## How to contribute

### Introduce into dev environment

#### Dependencies
 
 * We use [git][git] as our version control system.

 * In the project we have the [yarn][yarn] package manager.

 * [NodeJS][node] version 18.18 works fine. In case you use a lower version and the project works, let us know.

#### Preparing a local project instance

 * Make a new [fork][fork] based on main branch.
 * [Clone][git-clone] the fork locally.
```bash
git clone https://github.com/<username>/hc-scoreboardui.git
```
 * Go to the local project directory. Default:
```bash
cd hc-scoreboardui
```

 * Install dependencies
```bash
yarn
```

### Commands

Command `dev` starts watching mode. The mode rebuilds the mjs output script when package modules are changed.

```bash
yarn dev
```

To watch changes in the game use:

```bash
yarn dev:game
```

And then after the build, in the game console refresh the resource with this UI.

```lua
ensure qbx_scoreboard --for qbx
```


#### If you need further guidance, you can reach out our team on the following:

* [our discord][discord]
* [email][email]

Please note we have a [code of conduct][COC], so follow it in all your interactions with the project.

## Getting started

For further guidance about getting started, please refer to the related links:

* [PULL REQUEST][PR]
* [FEATURE REQUEST ISSUE][FEATURE_REQUEST]
* [BUG REPORT ISSUE][BUG_REPORT]

## Coding conventions

In order to sanitize coding standards, please follow our [eslint][eslint] recommendations.

[yarn]: https://yarnpkg.com/
[node]: https://nodejs.org/
[git]: https://git-scm.com/
[git-clone]: https://git-scm.com/docs/git-clone
[fork]: https://github.com/hedge-code/hc-scoreboardui/fork
[discord]: https://discord.gg/A57b4Rycbt
[email]: contact.hedgecode@gmail.com
[COC]: CODE_OF_CONDUCT.md
[PR]: .github/ISSUE_TEMPLATE/PULL_REQUEST_TEMPLATE.md
[FEATURE_REQUEST]: .github/ISSUE_TEMPLATE/FEATURE_REQUEST.md
[BUG_REPORT]: .github/ISSUE_TEMPLATE/BUG_REPORT.md
[eslint]: eslintrc.cjs
