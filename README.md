# Silverstripe Headless
Tutorial: [Headless Silverstripe with Nuxt.JS](https://olivernorden.se/blog/headless-silverstripe-with-nuxt)

## Set up locally
1. Make sure you have Docker or Docker desktop installed
2. Clone repository
3. Run `cp .env.example .env` in the repository root. This will add the default env file. This .env file may require changes depending on other running services, user/group id etc.
4. Run `docker-compose run --rm silverstripe composer i`. This will install PHP dependencies.
5. Run `docker-compose run --rm node npm i --prefix nuxt`. This will install Nuxt JS dependencies.
6. Run `docker-compose run --rm node npm i --prefix next`. This will install Next JS dependencies.
7. Run `docker-compose up -d`. This will start the local development environment.
8. Run `docker-compose run --rm silverstripe php vendor/silverstripe/framework/cli-script.php dev/build` in the repository root. This will build the Silverstripe database.
9. Access application on localhost and the admin interface on localhost/admin. The admin credentials are admin:password
10. In the event of a 502 response code, please wait while the client environment is being set up
