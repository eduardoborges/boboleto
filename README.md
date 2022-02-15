

<h1 align="center">💸 Boboleto</h1>

<p align="center">Uma simples bibliotequinha com algumas funções úteis para os devs que trabalham em fintechs (ou não);</p>

<p align="center">
  <a href="https://www.npmjs.com/package/boboleto"><img src="https://img.shields.io/npm/v/boboleto/latest.svg?style=flat-square" alt="NPM version" /> </a>
  <a href="https://www.npmjs.com/package/boboleto"><img src="https://img.shields.io/npm/dm/boboleto.svg?style=flat-square" alt="NPM downloads"/> </a>
  <a href="https://snyk.io/test/github/eduardoborges/boboleto"><img src="https://snyk.io/test/github/eduardoborges/boboleto/badge.svg?style=flat-square" alt="Known vulnerabilities"/> </a>
  <a href="https://coveralls.io/github/eduardoborges/boboleto?branch=main"><img src="https://coveralls.io/repos/github/kulshekhar/boboleto/badge.svg?branch=main" alt="Coverage status"/> </a>
  <a href="https://github.com/eduardoborges/boboleto/actions/workflows/cd.yml"><img alt="GitHub actions" src="https://github.com/eduardoborges/boboleto/actions/workflows/cd.yml/badge.svg" /> </a>
  <a href="https://github.com/eduardoborges/boboleto/blob/main/LICENSE.md"><img src="https://img.shields.io/npm/l/boboleto.svg?style=flat-square" alt="GitHub license"/> </a>
</p>

##  IN PROGRESS WORK

Esse é um fork do [boleto-utils](https://github.com/mrmgomes/boleto-utils) onde o autos fez um excelente trabalho, mas podemos refatorar, não é crianças?
## 💰 Uso

```shell
npm install boboleto
# ou
yarn install boboleto
```

## 🤑 Funções Disponiveis

### `detectCodeType(code: string): string`

Verifica a numeração e retorna o tipo do código inserido. `BAR` ou `DIGITABLE`. Requer numeração completa (com ou sem formatação).

