# Neko-Punch 🐈👊

[![Apache License](https://img.shields.io/badge/license-Apache%202.0-orange.svg?style=flat&color=important)](http://www.apache.org/licenses/LICENSE-2.0)

Neko-Punch is a web component designed to execute workflows with ease via [GA4GH WES API](https://github.com/ga4gh/workflow-execution-service-schemas).
It enables you to embed the workflow execution interface effortlessly onto various pages, such as database pages, paper pages, and so on.

## Embedding Instructions

Load the `neko-punch.js` in the HTML head tag and write the `neko-punch` tag inside the body tag.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="/dist/neko-punch.js" type="module"></script>
  </head>
  <body>
    <neko-punch
      wes-location="http://localhost:1122"
      yevis-metadata-url="https://raw.githubusercontent.com/sapporo-wes/yevis-cli/main/tests/test-metadata-CWL-validated.yml"
    />
  </body>
</html>
```

### Attributes

- `wes-location`
  - The URL of the WES API endpoint
  - Currently, it only supports [Sapporo-WES](https://github.com/sapporo-wes/sapporo-service)
- `yevis-metadata-url`
  - The URL of the workflow metadata
  - Create using [Yevis-CLI](https://github.com/sapporo-wes/yevis-cli)
- `workflow-engine`
  - Optional
  - Choose the workflow engine you want to run on Sapporo-WES (Check the executable workflow engines with `GET /service-info`)
  - By default, it automatically selects the workflow engine from the workflow type

## Getting Started

You will need Sapporo-WES to run Neko-Punch.

```bash
$ curl -O https://raw.githubusercontent.com/sapporo-wes/sapporo-service/main/docker-compose.yml
$ docker-compose up -d
$ curl localhost:1122/service-info
{"auth_instructions_url":"https://github.com/sapporo-wes/sapporo-service", ...}
```

After setting up Sapporo-WES, the below command will clone the Neko-Punch repository, install dependencies, build the web component, start a development server.
Then you can access Neko-Punch on your local machine at http://localhost:8080

```bash
# Clone this repository
$ git clone https://github.com/sapporo-wes/neko-punch.git && cd neko-punch

# Install dependencies
$ npm ci

# Build a web component to dist/
$ npm run build

# Run a development server
$ npm run serve

# Access to http://localhost:8080
```

## Development

Node.js v18 or higher is recommended.

```bash
# Install dependencies
$ npm install

# Build a web component to dist/
$ npm run build

# Run a development server
$ npm run serve

# Access to http://localhost:8080
```

### Release

```bash
$ bash release.sh <version>
```

## License

This project is licensed under the [Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0) License.

See the [LICENSE](https://github.com/sapporo-wes/neko-punch/blob/main/LICENSE) for more information.
