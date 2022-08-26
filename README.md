To run the project you need to install the **composer** for php and **npm**.

After that use command: `"compose install"` and `"npm install"` to download all dependencies.

Now you can configure the project. Rename _.env.example_ to _.env_ and set up the db connection in this file.

To migrate the tables to db use command: 

`php artisan migrate`

Probably you will need to install a few dependencies: 

`npm i --save @devexpress/dx-react-core @devexpress/dx-react-scheduler`

`npm i --save @devexpress/dx-react-scheduler-material-ui`

Now you can start the laravel webserver: 

_`php artisan serve`_ or _`php artisan serve --host="" --port=""`_

Default port is 8000

In separate terminal you also need to run command: 

`npm run watch`




