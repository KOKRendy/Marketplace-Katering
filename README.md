# Odobi Laravel

## Requirement

- PHP 8.2
- PHP Extension: phpmyadmin
- Composer
- NodeJS 18

## Instalasi

-   Clone project

```shell
git clone https://github.com/KOKRendy/Marketplace-Katering.git
```

- Copy file `.env.example` to `.env`

```shell
cp .env.example .env
```

- Edit data credentials di file `.env`

- Install composer library

```shell
composer install
```

- Install node modules

```shell
yarn install
```

- Generate APP_KEY

```shell
php artisan key:generate
```

- Jalankan migration

```shell
php artisan migrate --seed
```

- Jalankan Vite JS

Vite JS adalah sebuah bundler untuk frontend development. Fitur Vite JS yang digunakan pada project ini adalah Hot Module Replacement (HMR).

```shell
yarn dev
```
