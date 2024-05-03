import { config } from "dotenv";
// import * as env from 'env-var'
import env from 'env-var'

config()
const PORT = env.get('PORT').required().asPortNumber()


console.log(PORT)