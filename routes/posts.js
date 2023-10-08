import {Router} from 'express'
import { checkAuth } from '../middleware/checkAuth.js'
import { createPost } from '../controllers/posts.js'
const router = new Router()

// create post 
// localhost:5000/api/posts 

router.post('/',checkAuth, createPost)

  
export default router