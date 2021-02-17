## Instalação

Faça um git clone do projeto http-node-puro:
```
git@github.com:viniciusmattosrj/http-node-puro.git
```

## Encoding

Todos os arquivos estão em **UTF-8**.


#### Importante para que o git não considere alterações de permissão como modificações a serem rastreadas

```
git config core.fileMode false
```

#### Usando o nvm

No projeto **http-node-puro** execute o comando abaixo:
```
npm install
node src/index
```

#### Utilizando o NVM

Será necessário realizar a cópia do arquivo example:
```
cp -v .env.example .env
```

#### Somente em ambiente de dev deve ser concedido a permissão nas pastas:

```
sudo chmod 777 -R node_modules
```