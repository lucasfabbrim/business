import { fastify } from 'fastify'

const app = fastify();

const start = () => {
  try {
      app.listen({
        port: 3000,
   }).then(() => {
    console.log('Server is running on port 3000')
   })
  } catch(err){
    console.log(err)
    process.exit(1)
  }
}

start();