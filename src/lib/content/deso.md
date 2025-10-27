# Developer Advocate Engineer at The DeSo Foundation
While working at The DeSo Foundation from January 2022 to December 2022, I served as a Developer Advocate Engineer, focusing on enhancing the DeSo blockchain ecosystem through tool development, prototypes, and community engagement. This role enabled me to accelerate developer adoption by creating essential libraries, hosting events, and integrating feedback to build scalable decentralized social solutions. Below are the key elements of my contributions during this period.
## DeSo Protocol and Types Library
Created and maintained the DeSo Protocol and Types library, which streamlined developer workflows with type-safe APIs for blockchain interactions, significantly boosting productivity. The library leverages TypeScript's type system for intuitive, error-resistant workflows, enforcing DeSo-specific schemas at compile time to provide autocomplete, validation, and prevent common pitfalls like invalid transaction structures. This is evident in function chaining for building transactions, signing, and submission, where types guide developers through required fields (e.g., `UpdaterPublicKeyBase58Check` as a Base58Check string, `BodyObj` with enforced sub-properties like `Body: string`, `ImageURLs: string[]`), reducing runtime errors and speeding up development.
Key features include:
- **Function Chaining for Transactions**: Methods like `submitPost` enable fluent chaining to construct, sign (using derived keys), and submit transactions in a type-safe manner, abstracting low-level details while allowing overrides.
- **Signing and Submission**: The `identity.signAndSubmit` method chains ECDSA signing (over secp256k1) with node submission, with types ensuring valid inputs/outputs.
- **Simplifying the Iframe Interface**: The library abstracts DeSo Identity integration via iframe or popup for derived keys and permissions, but this introduces complications like cross-origin `postMessage` handling, origin validation to prevent unauthorized access, and dealing with browser popup blockers or timing issues. Security measures include permission checks (`hasPermissions`) and request approvals, with added complexity in mobile environments requiring custom overrides.
- **Crypto and Blockchain Logic**: Handles complex ECDSA signing and key management with derived keys to avoid private key exposure, transaction serialization, fee calculations (e.g., `MinFeeRateNanosPerKB`), and nanos unit conversions (1 DeSo = 1e9 nanos). Also includes encryption/decryption for messages using public-key crypto with group support.
- Original implementation: [DeSo Protocol Library in Workspace](https://github.com/deso-protocol/deso-workspace/tree/66d616bd480b1dfbf597b2db10b4c227fde4fee9/libs/deso-protocol)
- Extended and migrated to standalone repo: [DeSo JS](https://github.com/deso-protocol/deso-js)
- Contributions under DeSoDog alias ([GitHub Profile](https://github.com/DeSoDog))
## Prototype Messaging App
Architected a prototype messaging application with encrypted group messaging on the DeSo blockchain, leveraging derived keys for secure, decentralized communication. The app, built as a React prototype, demonstrates end-to-end encryption using DeSo's access groups. Users can create group chats or direct messages via DeSo usernames, public keys, ETH addresses, or ENS names. It integrates DeSo Identity to generate derived keys, enabling independent encryption/decryption of messages and transaction signing without ongoing reliance on the identity service.
- My contributions in PR: [Messaging Prototype PR Files](https://github.com/deso-protocol/deso-workspace/pull/68/files)
- Main repository: [DeSo Chat Protocol](https://github.com/deso-protocol/deso-chat-protocol)
- Technical Stack: React (bootstrapped with Create React App), DeSo blockchain integration for access groups and derived keys.
## Community Engagement and Livestreams
Hosted Major League Hacking (MLH) livestream events and developer calls to foster community interaction and collect valuable feedback for ecosystem improvements.
- Hosted live streams:
  - [Video 1](https://www.youtube.com/watch?v=CU3cWfuBRVs)
  - [Video 2](https://www.youtube.com/watch?v=2CkyJiVE_1o&t=4890s)
## DeSo Developer Hub
Built the DeSo Developer Hub, featuring interactive examples of the protocol library to guide developers in building on DeSo.
- Showcased SDK prototype with interactive code examples and a Stack Overflow-like decentralized thread for user discussions: [DeSo Developer Hub](https://build.deso.com/main/welcome)
## Ethereum Metamask Onboarding
Collaborated with the research team to enable seamless onboarding for Ethereum Metamask users to DeSo using derived key solutions, bridging major Web3 ecosystems.
## DeSo Dollar Airdrop
Developed a DeSo Dollar airdrop initiative that became a viral hit on Twitter, driving widespread community participation and awareness. The announcement post garnered significant engagement, with 1,100 likes, 962 reposts, 319 quotes, and 1,155 replies.
- Repository: [DeSo Dollar Airdrop](https://github.com/Code-Milker/deso-dollar-airdrop)
- Viral announcement post: [Twitter Post](https://x.com/desoprotocol/status/1580611115150544896)
## Final Note
My time at DeSo sharpened my expertise in blockchain tooling, developer advocacy, and innovative prototypes, providing a strong foundation for subsequent work in AI-driven development, web applications, and decentralized systems. This portfolio entry highlights how these efforts contributed to DeSo's growth while aligning with my approach to structured, impactful engineering.
