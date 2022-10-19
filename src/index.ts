import express from 'express';
import connect from './database';
import  healthcheck  from './api/healthcheck/healthcheck.routes';
import users  from './api/users/users.routes';
import publications  from './api/publications/publications.routes';



const app = express()
connect()



app.set('port', process.env.PORT || 8080)


app.use(express.json())
app.use(healthcheck)
app.use(users)
app.use(publications)



app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`)
})




