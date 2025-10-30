# Developer Advocate Engineer at The DeSo Foundation
While working at The DeSo Foundation from January 2022 to December 2022, I served as a Developer Advocate Engineer, focusing on enhancing the DeSo blockchain ecosystem through tool development, prototypes, and community engagement. This role enabled me to accelerate developer adoption by creating essential libraries, hosting events, and integrating feedback to build scalable decentralized social solutions. Below are the key elements of my contributions during this period.

## DeSo Protocol and Types Library
Created and maintained the DeSo Protocol and Types library, which streamlined developer workflows with type-safe APIs for blockchain interactions, significantly boosting productivity. The library leverages TypeScript's type system for intuitive, error-resistant workflows, enforcing DeSo-specific schemas at compile time to provide autocomplete, validation, and prevent common pitfalls like invalid transaction structures. This is evident in function chaining for building transactions, signing, and submission, where types guide developers through required fields (e.g., `UpdaterPublicKeyBase58Check` as a Base58Check string, `BodyObj` with enforced sub-properties like `Body: string`, `ImageURLs: string[]`), reducing runtime errors and speeding up development.
Key features include:
- **Function Chaining for Transactions**: Methods like `submitPost` enable fluent chaining to construct, sign (using derived keys), and submit transactions in a type-safe manner, abstracting low-level details while allowing overrides.
- **Signing and Submission**: The `identity.signAndSubmit` method chains ECDSA signing (over secp256k1) with node submission, with types ensuring valid inputs/outputs.
- **Simplifying the Iframe Interface**: Prior to this library, developers had to manually set up the iframe connection, a complicated process involving embedding an invisible iframe (pointing to `https://identity.deso.org/embed` with styles like `display: none; position: fixed; z-index: 1000;`), handling cross-origin `postMessage` communication for requests (e.g., generating UUID ids, structuring JSON with `service: 'identity'`, method like 'info' or 'sign'), and managing asynchronous responses via event listeners. This required manual promise or observable patterns to match requests/responses by id, plus acquiring user credentials (e.g., `encryptedSeedHex`, `accessLevel`) from the Window API. Complications included browser-specific issues like Safari's Intelligent Tracking Prevention (ITP), requiring explicit user prompts for storage access—developers sent 'info' requests to check `hasStorageAccess`, displayed the iframe for user taps if denied, and listened for 'storageGranted' messages before hiding it. If unsupported (e.g., no cookies/local storage), apps had to notify users of limitations. The library abstracts all this, simplifying integration via high-level methods while ensuring security like origin validation and permission checks (`hasPermissions`), with mobile overrides for popup blockers or timing.
- **Crypto and Blockchain Logic**: Handles complex ECDSA signing and key management with derived keys to avoid private key exposure, transaction serialization, fee calculations (e.g., `MinFeeRateNanosPerKB`), and nanos unit conversions (1 DeSo = 1e9 nanos). Also includes encryption/decryption for messages using public-key crypto with group support.
- Original implementation: [DeSo Protocol Library in Workspace](https://github.com/deso-protocol/deso-workspace/tree/66d616bd480b1dfbf597b2db10b4c227fde4fee9/libs/deso-protocol)
- Extended and migrated to standalone repo: [DeSo JS](https://github.com/deso-protocol/deso-js) (5 contributors).
- Contributions under DeSoDog alias ([GitHub Profile](https://github.com/DeSoDog))
- NPM package: [deso-protocol](https://www.npmjs.com/package/deso-protocol)

## Prototype Messaging App
Architected a prototype messaging application with encrypted group messaging on the DeSo blockchain, leveraging derived keys for secure, decentralized communication. The app, built as a React prototype, demonstrates end-to-end encryption using DeSo's access groups. Users can create group chats or direct messages via DeSo usernames, public keys, ETH addresses, or ENS names. It integrates DeSo Identity to generate derived keys, enabling independent encryption/decryption of messages and transaction signing without ongoing reliance on the identity service.
- My contributions in PR: [Messaging Prototype PR Files](https://github.com/deso-protocol/deso-workspace/pull/68/files)
- Main repository: [DeSo Chat Protocol](https://github.com/deso-protocol/deso-chat-protocol) (5 contributors).
- Technical Stack: React (bootstrapped with Create React App), DeSo blockchain integration for access groups and derived keys.

## Community Engagement and Livestreams
Hosted Major League Hacking (MLH) livestream events and developer calls to foster community interaction and collect valuable feedback for ecosystem improvements. Facilitated virtual events for global devs, honing distributed team skills essential for remote blockchain roles.
- Hosted live streams:
  - [Video 1](https://www.youtube.com/watch?v=CU3cWfuBRVs) (448 views, 11 likes).
  - [Video 2](https://www.youtube.com/watch?v=2CkyJiVE_1o&t=4890s) (765 views, 23 likes).

## DeSo Developer Hub
Built the DeSo Developer Hub, featuring interactive examples of the protocol library to guide developers in building on DeSo.
- Showcased SDK prototype with interactive code examples and a Stack Overflow-like decentralized thread for user discussions: [DeSo Developer Hub](https://build.deso.com/main/welcome).

## Ethereum Metamask Onboarding
Collaborated with the research team to enable seamless onboarding for Ethereum Metamask users to DeSo using derived key solutions, bridging major Web3 ecosystems. Led cross-team efforts, handling challenges like secure key derivation and cross-chain compatibility—skills applicable to L1/L2 integrations in blockchain-mobile gigs. For details on how it works: [DeSo MetaMask Integration: How it Works](https://blog.deso.com/blog/how-metamask-works).

## DeSo Dollar Airdrop
Developed a DeSo Dollar airdrop initiative that became a viral hit on Twitter, driving widespread community participation and awareness. The announcement post garnered 1,107 likes, 965 reposts, 319 quotes, and 1,155 replies.
- Repository: [DeSo Dollar Airdrop](https://github.com/Code-Milker/deso-dollar-airdrop)
- Viral announcement post: [Twitter Post](https://x.com/desoprotocol/status/1580611115150544896)

## Challenges Overcome
Addressed key technical hurdles, such as iframe security in Identity integrations (ensuring cross-origin safety akin to wallet connect protocols) and mobile overrides for derived keys, enhancing usability in decentralized apps. Overcame browser-specific issues like Safari's storage restrictions by implementing user-prompted access grants, mirroring secure practices in remote agile workflows.

## Final Note
My time at DeSo sharpened my expertise in blockchain tooling, developer advocacy, and innovative prototypes, providing a strong foundation for subsequent work in web applications and decentralized systems. This portfolio entry highlights how these efforts contributed to DeSo's growth while aligning with my approach to structured, impactful engineering. Skills like leading prototypes bridging Ethereum-DeSo (enabling integrations) and facilitating virtual events for global devs position me for senior/staff roles in remote blockchain-mobile teams, including distributed collaboration via GitHub and Zoom.
