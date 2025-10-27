# Ty Fischer's Personal Portfolio Site

## Overview
This is the source code for [tyfischer.com](https://tyfischer.com), a responsive personal portfolio website designed to showcase professional experience, projects, articles, and a resume. It serves as a professional landing page to attract job opportunities, clients, and collaborators, emphasizing expertise in web development, blockchain, AI, and mobile applications. The site features a clean, intuitive design with a custom color palette, ensuring seamless navigation and content accessibility across devices.

## Features
### Core Functionality
- **Introduction Section**: Provides a personal bio, contact information, and quick access to social profiles and resume download.
- **Content Browser**: Allows users to explore a curated selection of articles and projects, with dynamic loading of detailed views upon selection.
- **Resume Handling**: Supports viewing and downloading the resume in PDF format, generated on-the-fly for accuracy.
- **Responsive Layout**: Adapts content presentation for optimal viewing on desktop and mobile, prioritizing usability.

### Key Integrations
- **Custom Markdown Renderer**: Utilizes Svelte-Markdown integrated with Highlight.js for syntax-highlighted code blocks, enabling rich, formatted rendering of article content with support for prose styling, images, and code snippets in an inverted (dark mode) theme.
- **GitHub Repository Integration**: Dynamically fetches README files from specified public GitHub repositories to populate article content, ensuring up-to-date information without manual updates.
- **Prototype Demonstrations**: For select projects, includes interactive prototypes loaded via iframes, allowing users to toggle between markdown descriptions and live demos directly within the site.

## Best Practices Demonstrated
This site serves as an example of modern Svelte development, incorporating best practices for state management, templating, and styling to create a maintainable, performant application:
- **State Management**: Leverages Svelte stores for reactive handling of global state, such as selected articles and download triggers, promoting clean data flow and easy extensibility without external libraries.
- **Templating and Components**: Employs reusable Svelte components for modular structure, with slots for flexible content injection (e.g., device-specific rendering), reducing duplication and enhancing composability.
- **Styling**: Uses Tailwind CSS with a custom theme for utility-first styling, ensuring consistency across components while supporting responsive breakpoints and dark mode through prose utilities.
- **Dynamic Content Loading**: Implements asynchronous fetching for external resources like GitHub content, with error handling and caching to improve load times and user experience.
- **Accessibility and Performance**: Focuses on semantic HTML, proper alt text for images, and lazy loading where applicable, while keeping the bundle size minimal through Svelte's compiler optimizations.

## Technologies
- **Framework**: Svelte for reactive UI components and routing.
- **Styling**: Tailwind CSS with typography plugin.
- **Markdown Rendering**: Svelte-Markdown and Highlight.js.
- **State Management**: Svelte Stores.
- **PDF Generation**: jsPDF and html2canvas.
- **Fetching**: Native Fetch API.

## License
MIT License. See [LICENSE](LICENSE) for details.

