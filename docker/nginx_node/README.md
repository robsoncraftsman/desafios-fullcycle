# Solução do desafio de criar um Docker Compose com MYSQL + NODE + NGINX

> Rodar o comando `docker-compose up -d` e acessar a url `http://localhost:8080`

## Dicas

### Dentro da pasta raíz do projeto

#### Iniciar os serviços / recriá-los se necessário

`docker-compose up -d --build`

#### Entrar no bash do banco de dados

`docker-compose exec db bash`

#### Dentro do bash do mysql, conectar no banco

`mysql -uroot -pteste curso_db`

### Dentro da pasta app

#### Criar a imagem de desenvolvimento para o node

`docker image build -f Dockerfile.dev -t node-dev .`

#### Rodar um container node com a imagem de desenvolvimento

`docker container run -it --rm -v $(pwd)/src:/usr/app/src node-dev bash`
