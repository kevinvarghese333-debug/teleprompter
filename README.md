# EyeLine website

Landing page for EyeLine, hosted at https://eyeline.kavitha.cloud on a dedicated Hostinger VPS container. React, Vite, Tailwind, shadcn/ui (Button, Card, Accordion), and Lucide. Layout based on the user's Applio Framer project. Fonts and sky image are served locally; no Framer hosting dependency.

## Local development

Node.js 24 recommended.

```sh
npm ci
npm run dev
npm run build
```

For a working local download, copy your installer to `public/downloads/Prompter.dmg`. DMGs are deliberately excluded from Git and Docker build context.

## VPS deployment

The existing Traefik proxy handles HTTPS. `compose.yaml` connects only the new Prompter container to `traefik_default`, with a route for `eyeline.kavitha.cloud`. No additional public ports are opened.

```sh
git clone https://github.com/kevinvarghese333-debug/teleprompter.git /opt/prompter/site
cd /opt/prompter/site
bash deploy/update-dmg.sh v1.1
docker compose up -d --build
```

Site updates:

```sh
cd /opt/prompter/site
git pull --ff-only
docker compose up -d --build
```

## Upload a new DMG

The download button always points to `https://eyeline.kavitha.cloud/downloads/Prompter.dmg`.

**Option 1: SFTP.** Connect to your VPS using your existing SSH account in Cyberduck or FileZilla. Upload to `/opt/prompter/downloads/Prompter.dmg.new`, then rename it to `Prompter.dmg` after upload completes. Set file permissions to 644. The site uses the new file immediately; no container rebuild is needed. The persistent folder is outside the repository and mounted read-only inside the container.

**Option 2: GitHub Releases.** Open this repository's Releases page and create a versioned release, attaching `Prompter.dmg` and `Prompter.dmg.sha256`. On your Mac generate the checksum in the folder containing the renamed installer:

```sh
shasum -a 256 Prompter.dmg > Prompter.dmg.sha256
```

After publishing the release, open Hostinger's VPS Web console and run:

```sh
cd /opt/prompter/site
bash deploy/update-dmg.sh v1.2
```

Use your actual release tag. This verifies the checksum and atomically replaces the installer. Uploading a GitHub Release alone does not update the VPS copy.

## Product notes

The dashboard is an illustrative visual, not a browser teleprompter. No screen recording feature is advertised. The current DMG is ad-hoc signed, not notarized. Pricing, payment processing, and fabricated testimonials are omitted.

## Credits

shadcn/ui components are MIT licensed; see `THIRD_PARTY_NOTICES.md`. Lucide is ISC licensed. Fonts are distributed under SIL OFL licenses in their installed packages. Sky image comes from the user's existing Framer project. Applio layout attribution to Amar KZR is retained in the footer.

## EyeLine rebrand

The public site is EyeLine at https://eyeline.kavitha.cloud. Its download URL is `/downloads/EyeLine.dmg`. Nginx serves the existing `Prompter.dmg` file at that new URL, so existing upload and checksum workflows continue working. The v1.1 binary still has its original Prompter application name; the FAQ makes that explicit. Internal repository, container and VPS directory names remain stable.
