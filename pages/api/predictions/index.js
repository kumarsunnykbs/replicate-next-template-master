import Replicate from "replicate";

const replicate = new Replicate({
	auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
	if (!process.env.REPLICATE_API_TOKEN) {
		throw new Error(
			"The REPLICATE_API_TOKEN environment variable is not set. See README.md for instructions on how to set it.",
		);
	}

	const prediction = await replicate.predictions.create({
		// Pinned to a specific version of Stable Diffusion
		// See https://replicate.com/stability-ai/stable-diffussion/versions
		version: "9936c2001faa2194a261c01381f90e65261879985476014a0a37a334593a05eb",

		// This is the text prompt that will be submitted by a form on the frontend
		input: {
			prompt:
				req.body.prompt +
				" mdjrny-v4 style, intricate, elegant, highly detailed, midjourney, digital painting, artstation, concept art, smooth, sharp focus, illustration, 8k",
			negative_prompt:
				"poorly Rendered face poorly drawn face poor facial details poorly drawn hands poorly rendered hands low resolution Images cut out at the top, left, right, bottom. bad composition mutated body parts blurry image disfigured oversaturated bad anatomy deformed body features. Negative prompt text: out of frame, lowres, text, error, cropped, worst quality, low quality, jpeg artifacts, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, dehydrated, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, fused fingers, too many fingers, long neck, username, watermark, signature",
		},
	});

	if (prediction?.error) {
		res.statusCode = 500;
		res.end(JSON.stringify({ detail: prediction.error }));
		return;
	}

	res.statusCode = 201;
	res.end(JSON.stringify(prediction));
}
