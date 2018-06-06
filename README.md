# webpack4-express4-react16-bootstrap4-starterkit
As it says in the title. Just a starter kit uses webpack4 express4 react16 bootstrap4.

Clone the repo:  
`$ git clone https://github.com/reyou/webpack4-express4-react16-bootstrap4-starter-kit.git`

Install missing packages:  
`$ npm i`

Run the application:  
`$ npm run start`

This will run following command at package.json:  
`"start": "concurrently \"webpack --watch  --progress\" \"nodemon server.js\"",`

Just to run Webpack then:  
`$ npm run webpack`

If you do not need server, just front-end, then you can use Webpack Dev Server:  
`$ npm run server`

You should see something like below:

![](https://i.imgur.com/XGX6BOg.png)
