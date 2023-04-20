# CloudDeploy
Service for deploy in cloud service

## Docker File
Para el despliegue se construyen las imagenes Docker File del Frontend y Backend respectivamente

## AWS
Se requiere configurar una instancia EC2 de aws, lo requerido para el proyecto es:
- Git
- docker
- docker compose
- mysql

Configurando lo anterior sobre la instancia

# Pasos
Al configurar la instancia se prosigue con lo siguiente:

### Ruta
Definimos una ruta en la instancia especifica para clonar el repositorio, para el caso practico creamos un directorio:

mkdir ./CloudTest

### Instalar git
Con el siguiente comando instalamos git utilizando rol de administrador

sudo apt install git

### Instalar docker
Se instala docker y docker compose en la maquina utilizada

sudo apt install docker-ce

### Clonar el repositorio 
Sobre la ruta especificada clonar este repositorio

sudo git clone https://github.com/4NGEL1/CloudDeploy.git

### Deploy mediante docker compose

sudo docker compose up -d
