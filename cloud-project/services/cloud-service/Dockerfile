FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env

WORKDIR /app
COPY . ./

RUN dotnet restore "/app/Test.Cloud.Api/Test.Cloud.Api.csproj"
RUN dotnet publish "/app/Test.Cloud.Api/Test.Cloud.Api.csproj" -c Release -o out

FROM mcr.microsoft.com/dotnet/aspnet:6.0.15-alpine3.17
WORKDIR /app
COPY --from=build-env /app/out .

RUN apk add icu-libs --no-cache tzdata
RUN apk add libgdiplus --repository https://dl-3.alpinelinux.org/alpine/edge/testing/
RUN apk update

ENV TZ America/Mexico_City
EXPOSE 1221

ENTRYPOINT ["dotnet", "Test.Cloud.Api.dll"]
