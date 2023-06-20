import { get } from 'mongoose'
import {createJob,deleteJob,showStats,updateJob,getAllJobs} from '../controllers/jobsController.js'
import express from 'express'
const router = express.Router()

router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').post(createJob).get(getAllJobs)
router.route('/:id').delete(deleteJob).patch(updateJob)
export default router