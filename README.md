# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Rotating Quotes

Edit the `quotes` array at the top of `src/components/QuotesSection.astro`:

```ts
const quotes: { text: string; author: string }[] = [
	{ text: 'Your first quote.', author: 'Author name' },
	{ text: 'Your next quote.', author: 'Another author' }
];
```

The section sits between the workshop and team. It advances every five seconds
without visible controls. Rotation stops while the browser tab is hidden.
An empty list hides the section; a single quote stays visible without rotating.
Entries with empty text or author fields are ignored.

## Contact Form

The static contact form uses [FormSubmit](https://formsubmit.co/). Submissions
are addressed to `andrei.postolache@introspecials.com`, with
`emanuel.martonca@gmail.com` in CC. The visitor's `email` field supplies the
Reply-To address. CAPTCHA is enabled, and the form includes a honeypot field.

Before accepting enquiries on the deployed website:

1. Submit the form from the deployed website to request activation.
2. Open the FormSubmit activation email in Andrei's inbox and confirm the form.
3. Submit another test enquiry and verify that both recipients receive it.

FormSubmit handles CAPTCHA, submission errors, and its hosted confirmation page.
No email credentials or server adapter are required. Browser validation and an
intercepted test POST have been checked locally; actual email delivery requires
activation and verification on the deployed site.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
