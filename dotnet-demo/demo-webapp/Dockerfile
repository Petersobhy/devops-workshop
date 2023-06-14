FROM mcr.microsoft.com/dotnet/sdk:6.0-alpine as builder
WORKDIR /app
COPY ./demo-webapp.csproj .
RUN dotnet restore --runtime linux-musl-x64
COPY . .
RUN dotnet publish -c Release -o /app/publish --no-restore --runtime linux-musl-x64 --self-contained true

FROM mcr.microsoft.com/dotnet/runtime-deps:6.0-alpine
WORKDIR /app
COPY --from=builder /app/publish .
EXPOSE 80
CMD ["./demo-webapp"]
