import { createClient } from '@typeform/api-client'

type Typeform = {
	token: string
	baseUrl: string
}

export async function main(resource: Typeform, imageId: string) {
	const typeformAPI = createClient({
		token: resource.token,
		apiBaseUrl: resource.baseUrl
	})

	return await typeformAPI.images.delete({
		id: imageId
	})
}
