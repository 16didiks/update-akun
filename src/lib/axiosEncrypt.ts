import axios from 'axios'

const axiosEncrypt = axios.create({
  baseURL: 'https://supportdev.mncsekuritas.id:30443/ws/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosEncrypt
