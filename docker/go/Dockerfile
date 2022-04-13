# Passo 1: Criar o programa em GO
FROM golang AS builder

COPY ./src ./src

RUN go build -o /go/bin /go/src/hello.go

# Passo 2: Criar a menor imagem possível
FROM scratch

COPY --from=builder /go/bin/hello /go/bin/hello

ENTRYPOINT ["/go/bin/hello"]