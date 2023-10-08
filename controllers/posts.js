import Post from '../models/Post.js'
import User from '../models/User.js'
import path, {dirname} from 'path'
import { fileURLToPath  } from 'url'



// Create post
export const createPost = async (req, res) => {
    try {
        const {title, text} = req.body
        const user = await User.findById(req.userId)

        if(req.files){
            let fileName = Date.now().toString + req.files.image.name

            // path to this folder
            const __dirname = dirname(fileURLToPath(import.meta.url))


            // '..' - we go to folder server-backend ------ like '../'
            req.files.image.mv(path.join(__dirname, '..', uploads, fileName))

            const newPostWithImage = new Post({
                username : user.username,
                title,
                text,
                imgUrl : fileName,
                author : req.userId
            })

            await newPostWithImage.save()
        }

    } catch (error) {
        console.log(object)
    }
}

