# About this template

This template make you possible to develop new web application with following technologies:

- Docker (instead of host's Node.js, you just need install Docker to start)
- React (with cra)
  - Jest
- TypeScript
- ESLint + Prettier
- Tailwind CSS

## About Docker environment

### Image

We just use pure `node:lts-alpine` currently.

### Container (for develop)

To enter the develop container, please use `./startup-node.sh` to start up quickly.
This script provide us an one-shot container for develop everytime.
We don't save the container at all because we just use node cli like host installed.
node_modules is shared with host.

### Container (for production)

This is not ready. We can use popular deployment services (i.g. Netlify) already.
