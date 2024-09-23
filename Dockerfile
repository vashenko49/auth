FROM node:18.14.2-alpine AS BUILD_PROD_IMAGE

RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    && rm -rf /var/cache/apk/*

RUN npm install -g pnpm
WORKDIR /usr/src/app
COPY . .

RUN pnpm install --prod --no-optional=true --frozen-lockfile=true

FROM node:18.14.2-alpine AS BUILD_IMAGE

# Install dependencies for canvas node-gyp build
RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    && rm -rf /var/cache/apk/*
RUN npm install -g pnpm
WORKDIR /usr/src/app
COPY . .
## Install dev dependencies
RUN pnpm install
# build application
RUN pnpm build


FROM alpine:3.17.2
RUN apk add nodejs
RUN apk add --update --no-cache \
    make \
    g++ \
    jpeg-dev \
    cairo-dev \
    giflib-dev \
    pango-dev \
    && rm -rf /var/cache/apk/*
WORKDIR /usr/src/app
# copy from build image
COPY --from=BUILD_IMAGE /usr/src/app/apps/api/dist ./apps/api/dist
COPY --from=BUILD_PROD_IMAGE /usr/src/app/apps/api/node_modules ./apps/api/node_modules
COPY --from=BUILD_PROD_IMAGE /usr/src/app/node_modules ./node_modules
EXPOSE 3000
CMD [ "node", "./apps/api/dist/apps/api/src/main" ]