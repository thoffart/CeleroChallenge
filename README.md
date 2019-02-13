# CeleroChallenge

Projeto de desenvolvimento de um jogo da velha utilizando a [API](https://developer.marvel.com) fornecida pela Marvel.

## Quick start

Clone o repositório:

```bash
git clone https://github.com/thoffart/CeleroChallenge.git

cd CeleroChallenge
```

Crie um arquivo config.ts na seguinte pasta `src/app/config/` com suas [chaves](https://developer.marvel.com/account) de API da marvel da seguinte maneira:

```bash
export const config = {
    marvel: {
        publicKey: 'YOUR_PUBLIC_KEY',
        privateKey: 'YOUR_PRIVATE_KEY'
    }
};

```

Após isso rode o projeto:

```bash
npm start
```


## Tests

Para rodar os testes:

```bash
npm run test
```

## Documentation

Para a documentação foi utilizado o [Compodoc](https://compodoc.app/). Rode:
```bash
npm run compodoc
```