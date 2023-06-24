import {getAccessToken} from "@/services/auth/auth.heleper";
import axios from "axios";
import config from "next/dist/server/typescript/rules/config";

const $api = axios.create({
	baseURL: process.env.SERVER_URl,
})

$api.interceptors.request.use(async config => {
	const accessToken = getAccessToken()
	
	if (config && config.headers && accessToken) {
		config.headers.Authorization = `Token ${accessToken}`
	}
	
	return config
})



// $api.interceptors.response.use(config => {
//
// })
