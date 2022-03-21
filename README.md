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

To enter the develop container, please use `./startup-node.sh` to startup quickly.
This script provide us an one-shot container for develop everytime.
We don't save the container at all because we just use node cli like it installed on the host.
node_modules is shared with host.

#### How can I open another shell to the running container

You can enter with a new bin/sh (and so on) with the container ID:

```sh
% docker ps
CONTAINER ID   IMAGE                                            COMMAND                  CREATED          STATUS          PORTS                    NAMES
771b901ba902   cubenoy22/docker-react-tailwindcss-ts-template   "docker-entrypoint.s…"   43 minutes ago   Up 43 minutes   0.0.0.0:3000->3000/tcp   nostalgic_sinoussi

% docker exec -it 771b901ba902 /bin/sh
# npm run build
```

### Container (for production)

This is not ready. We can use popular deployment services (i.g. Netlify) already.
