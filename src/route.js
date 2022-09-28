import express from "express";
import aws from 'aws-sdk'
const router  = express.Router()
import cloud from './handler.js'

router.post('/write-file-aws',cloud)




export default router