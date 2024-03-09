const axios = require('axios')
const NodeCache = require('node-cache')
const dotenv = require('dotenv')

dotenv.config()
const cache = new NodeCache()

const axiosAdminClient = axios.create({
    baseURL: ProcessingInstruction.env.ADMIN_API_URL,
})

async function getToken() {
    let token = cache.get('token')
    if (!token) {
        const m2m_credentials = {
            client_id: process.env.ADMIN_API_M2M
        }
    }
}