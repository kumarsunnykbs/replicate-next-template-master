import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import starmorphlogo from "../public/starmorph-wide.png";
import { SMHeader } from "../components/SMHeader";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default function Home() {
	const [prediction, setPrediction] = useState(null);
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("/api/predictions", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				prompt: e.target.prompt.value,
			}),
		});
		let prediction = await response.json();
		if (response.status !== 201) {
			setError(prediction.detail);
			return;
		}
		setPrediction(prediction);

		while (
			prediction.status !== "succeeded" &&
			prediction.status !== "failed"
		) {
			await sleep(1000);
			const response = await fetch("/api/predictions/" + prediction.id);
			prediction = await response.json();
			if (response.status !== 200) {
				setError(prediction.detail);
				return;
			}
			console.log({ prediction });
			setPrediction(prediction);
		}
	};

	return (
		<div className="">
			<Head>
				<title>Stable Diffusion 1.5 Webui | Text to Image Art Generator </title>
				<meta
					property="og:title"
					content="Stable Diffusion 1.5 Webui | Text to Image Art Generator"
				/>
				<meta property="og:type" content="article" />
				<meta
					property="og:description"
					content="Looking for  way to generate photorealistic images? Look no further than Stable Diffusion 1.5 Webui by Starmorph. Our advanced Text to Image Art Generator leverages state-of-the-art algorithms to create stunningly realistic images from textual descriptions. Try it today and see the power of Stable Diffusion 1.5 Webui in action!"
				/>
				<meta property="og:image" content="https://i.imgur.com/JXKloOD.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<script
					defer
					data-domain="texttoimage.starmorph.com"
					src="https://plausible.io/js/script.outbound-links.js"
				/>
			</Head>
			<SMHeader />
			<div class="container max-w-2xl p-12 mx-auto">
				<h1 className="py-6 mb-4 text-center font-medium text-3xl">
					OpenJourney{" "}
				</h1>
				<p className="mb-4">
					{" "}
					a high fantasy generator in Midjourney style. Good for fictional
					portraits.{" "}
				</p>

				<form className="w-full flex" onSubmit={handleSubmit}>
					<input
						type="text"
						className="flex-grow"
						name="prompt"
						placeholder="Enter a prompt to create an image"
					/>
					<button className="button" type="submit">
						Dream
					</button>
				</form>
			</div>

			{error && <div>{error}</div>}

			{prediction && (
				<>
					{prediction.output && (
						<div className="image-wrapper mt-5 container max-w-2xl mx-auto">
							<Image
								fill
								src={prediction.output[prediction.output.length - 1]}
								alt="output"
								sizes="100vw"
							/>
						</div>
					)}
					<p className=" bg-green-600 px-6 mx-auto text-center mt-3 py-3 text-xl opacity-50">
						status: {prediction.status}
					</p>
				</>
			)}
		</div>
	);
}
