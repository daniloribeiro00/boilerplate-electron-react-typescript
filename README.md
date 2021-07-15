# Boilerplate Electron + React + TypeScript


Boilerplate for a project using [Electron](https://www.electronjs.org), [React JS](https://reactjs.org), [TypeScript](https://www.typescriptlang.org/) and [Styled Components](https://styled-components.com).

Boilerplate para um projeto usando [Electron](https://www.electronjs.org), [React JS](https://pt-br.reactjs.org), [TypeScript](https://www.typescriptlang.org/pt/) e [Styled Components](https://styled-components.com).

<br>

If you want the application to run at OS startup and in background, click [here](https://github.com/daniloribeiro00/boilerplate-electron-react-typescript-startup-background).

Caso queira que a aplicação inicie junto com o sistema operacional e em background, clique [aqui](https://github.com/daniloribeiro00/boilerplate-electron-react-typescript-startup-background).

<br>
<hr>
<br>

## Installation / Instalação:

Note: You must have both [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com) installed on your computer.

Clone the repository to your computer and then run the following script:

<br>

OBS: É necessário ter o [Node.js](https://nodejs.org/pt-br/) e o [Yarn](https://yarnpkg.com) instalados em sua máquina.

Clone o repositório para sua máquina e, em seguida, execute o seguinte comando:

```bash
yarn
```

<br>
<hr>
<br>

## Execution / Execução:

To start the application, run the script below:

<br>

Para executar a aplicação, execute o comando abaixo:

```bash
yarn start
```

<br>
<hr>
<br>

## Installers Exportation / Exportação de Instaladores:

In order to create installer files run one of the following scripts:

The files will be created in `/dist` folder.

<br>

Para gerar arquivos instaladores da aplicação, execute um dos seguintes comandos:

Os arquivos serão criados na pasta `/dist`.

<br>

### The OS you are currently running:

```bash
yarn dist
```

<br>

### Windows:

- #### 32bits / 64bits

    ```bash
    yarn dist:windows
    ```

- #### ARM 64bits

    ```bash
    yarn dist:windows-arm
    ```

<br>

### MacOS:

(Note: MacOS computer required)

(OBS: Necessário estar em uma máquina com MacOS)

- #### Intel 32 bits

    The creation of installers for Mac computers with 32bits Intel processors using Electron Builder is unavailable at the moment.

    No momento, a criação de instaladores para Macs com processador Intel de 32 bits pelo Electron Builder encontra-se indisponível.

- #### Intel 64 bits

    ```bash
    yarn dist:mac
    ```

- #### Apple Silicon

    ```bash
    yarn dist:mac-arm
    ```

<br>

### Linux:

(Using a Linux or MacOS computer)

(Utilizando uma máquina com Linux ou MacOS)

- #### 32bits / 64bits

    ```bash
    yarn dist:linux
    ```

- #### ARM 64bits

    ```bash
    yarn dist:linux-arm
    ```

#### Note / Observação:

- #### Creating Linux installer using a Windows computer / Criando instalador para Linux utilizando uma máquina com Windows:

    Unfortunately, due to electron-build-service unavailability ([learn more](https://github.com/electron-userland/electron-build-service/issues/9)), follow the steps bellow to create a Linux installer using a Windows computer:

    Infelizmente, devido à indisponibilidade do electron-build-service ([saiba mais](https://github.com/electron-userland/electron-build-service/issues/9)), para criar um instalador para Linux utilizando uma máquina com Windows siga os passos abaixo:

    1 - Install [Docker](https://docs.docker.com/get-docker/) / Instale o [Docker](https://docs.docker.com/get-docker/).

    2 - Run the following script in PowerShell / Execute o seguinte comando pelo PowerShell:

    ```bash
    docker pull electronuserland/builder
    ```

    3 - Run the following script in the project root folder to initialize the container / Execute o seguinte comando com o caminho da pasta raíz do projeto para inicializar o container:

    ```bash
    docker run --rm -ti -v C:\project-folder\:/project -w /project electronuserland/builder
    ```

    4 - Open Docker, start the container terminal and run the following scripts / Abra o Docker, inicie o terminal do container e digite os seguintes comandos:

    ```bash
    cd /project
    yarn upgrade
    yarn global add electron-builder
    yarn dist:linux <-or/ou-> yarn dist:linux-arm
    ```

    5 - The file will be created in `/dist` folder / O arquivo será criado na pasta `/dist`.

<br>
<hr>
<br>

## Known Issues / Problemas conhecidos:

If any script throws an error, erase folders `/dist`, `/out` and `/.webpack` (DO NOT CONFUSE WITH `/webpack`), then run the desired script again.

Caso algum dos script gere erro, apague as pastas `/dist`, `/out` e `/.webpack` (NÃO CONFUNDIR COM `/webpack`), e execute o script desejado novamente.

<br>
<hr>
<br>

## Credits / Créditos:

Based on the boilerplate develop by Diego Fernandes, available [here](https://github.com/diego3g/electron-typescript-react).

Baseado no boilerplate desenvolvido por Diego Fernandes, disponível [aqui](https://github.com/diego3g/electron-typescript-react).

<br>

Solution for creating Linux installer in a Windows computer posted by Darkseal [here](https://github.com/electron-userland/electron-build-service/issues/9#issuecomment-704069238).

Solução para criação de instalados do Linux em máquinas com Windows disponibilizada por Darkseal [aqui](https://github.com/electron-userland/electron-build-service/issues/9#issuecomment-704069238).

<br>

Icons made by [Smashicons](https://www.flaticon.com/authors/smashicons) from [flaticon](https://www.flaticon.com/).

<br>
<hr>
<br>

## License / Licença:

[MIT](https://choosealicense.com/licenses/mit/)
