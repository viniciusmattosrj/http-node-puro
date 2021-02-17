## Exemplos Uso

Exemplo 1 - Utilizando curl:

```
curl -H "Accept-language:pt-br" \
    -H "Accept: text/html" \
    -H "Cache-control: no-cache" \
    -H "User-agent: Mozila" \
    http://localhost:3001
```

Exemplo 2 - Utilizando a lib nativa do node http
```
request
    .get({
        url: "http://localhost:3001",
        headers: {
            "Cache-control: no-cache",
            "Accept: text/html",
            "Accept-language:pt-br",
            "User-agent: Mozila"
        }
    })
```
