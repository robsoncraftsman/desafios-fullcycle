# Solução do desafio de criar uma imagem de uma aplicação GO com menos de 2MB

> DockerHub: **robsoncraftsman/hello-go**

## Para criar a imagem

`docker image build -t robsoncraftsman/hello-go .`

## Para subir a imagem para o docker hub

`docker image push robsoncraftsman/hello-go`

## Para rodar o container baseado na imagem

`docker container run --rm robsoncraftsman/hello-go`
