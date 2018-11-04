import { fetchApi } from './API'
import { tasteDive } from './API_keys'

const key = tasteDive;
let url = `https://tastedive.com/api/similar?k=${key}&info=1&limit=100&q=`

let result = fetchApi(url)