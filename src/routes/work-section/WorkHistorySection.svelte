<script lang="ts">
	import Lseg from '$lib/images/lseg.jpeg';
	import Connecture from '$lib/images/connecture.png';
	import Deso from '$lib/images/DesoLogo.jpeg';
	import Liberty from '$lib/images/liberty.png';
	import ContentPreview from '$lib/components/ContentPreview.svelte';
	export let device: 'mobile' | 'desktop' = 'mobile';
	const jobs: { description: string; img: string; title: string }[] = [
		{
			title: 'Developer Advocate Engineer',
			img: Deso,
			description: `
I created and managed the DeSo Protocol and DeSo Protocol Types library, boosting developer efficiency. Hosting multiple MLH livestream events, I fostered community engagement in DeSo app development. Collaborating with the research team, I simplified Ethereum Metamask access to DeSo. Multiple developer calls gathered valuable feedback.

Enhancing the identity Iframe for seamless transactions, I connected any Metamask user to the deso blockchain. I built the DeSo Developer Hub, offering interactive resources. In partnership meetings, I contributed technical insights. I also crafted airdrop bots for user acquisition and showcased derived keys in a prototype messaging app for secure group chats on DeSo blockchain.`
		},
		{
			title: 'Lead Engineer',
			img: Lseg,
			description: `I was a seasoned software developer at Refinitiv, recognized for my contributions to modernizing financial applications by developing and maintaining reusable UI components. My expertise included Typescript, HTML5, CSS/SASS, JavaScript (Angular, Graphql, Jasmine), .Net Core, Postman, and Git (GitLab).

I also led critical process improvements, including design, software release, and team estimation. I championed agile methodologies to align with Product Owners and Business Analysts, ensuring the successful delivery of high-quality products that met evolving business needs.`
		},
		{
			title: 'Software Engineer',
			img: Connecture,
			description: ` I gained extensive knowledge in building WCAG and HIPAA Compliant web applications using Typescript and Angular 2+. Designed a client parsing service that read in JSON configurations and dynamically generated custom sites for clients. Closely followed acceptance criteria from business analysts and graphic designers to ensure that the functionality and appearance of our app were met.`
		},
		{
			title: 'Tech Start intern',
			img: Liberty,
			description: `I maintained Liberty Mutual's legacy application, Vantage Port, a central portal for employees providing access to tools, documents, and reporting. The application was built with jQuery and Spring Boot, where I ensured its stability, performance, and continuous improvements. Additionally, I developed an interactive collaboration board that enabled users to whiteboard ideas in real-time using WebSockets, enhancing team communication and brainstorming capabilities.`
		}
	];
</script>

{#each jobs as job, i}
	{#if i !== 0}<div class="min-h-[40px] bg-secondary" />
	{/if}

	<ContentPreview
		{device}
		color="text-text"
		bg="bg-primary"
		img={job.img}
		title={job.title}
		url={'TODO'}
		description={job.description}
	/>

	{#if i === jobs.length - 1}<div class="min-h-[40px] bg-secondary" />
	{/if}
{/each}
