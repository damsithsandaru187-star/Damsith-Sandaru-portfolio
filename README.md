# Damsith Sandaru — Personal Portfolio

A mobile-first, futuristic personal portfolio for Damsith Sandaru, an Advanced Level Technology-stream student in Sri Lanka. The website presents his education, technical interests, personal explorations, future goals, and supplied contact links.

This is a **static website** built with HTML5, CSS3, and vanilla JavaScript. It needs no database, backend, API key, build command, paid service, or tracking script.

## Included features

- Responsive hero with Damsith's supplied, optimized profile photograph
- Sticky navigation with active-section indication
- Accessible Android/mobile menu with Escape-key support
- About, skills, projects, education, future goals, contact, and footer sections
- Six honestly labeled learning and technical-interest areas
- Four project exploration cards with lightweight technical illustrations
- Working project category filters and screen-reader result announcements
- Expandable project notes that work without JavaScript
- WhatsApp, Instagram, Facebook, and Google Maps links supplied by the owner
- Smooth scrolling, subtle entrance effects, and card/button transitions
- `prefers-reduced-motion` support
- Keyboard focus indicators, semantic headings, alt text, and a skip link
- Automatic footer copyright year
- SEO description, Open Graph metadata, theme color, and DS favicon
- No contact form, fake repository links, invented credentials, or public residential address

## Project structure

```text
damsith-portfolio/
├── index.html
├── README.md
├── CREDITS.md
├── assets/
│   ├── icons/
│   │   └── favicon.svg
│   └── images/
│       ├── profile-photo.webp
│       └── profile-photo-640.webp
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Open the website locally

### Easiest method

1. Extract the project ZIP.
2. Open the extracted folder.
3. Open `index.html` in Chrome, Edge, Firefox, or another modern browser.

The site works locally without installation. An internet connection is only needed to load the Google Fonts; sensible fallback fonts are provided.

### Optional local server on a computer

If Python is installed, open a terminal in the project folder and run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with `Ctrl+C` when finished.

## Publish free with GitHub Pages — Android guide

You need the project ZIP, an Android file manager that can extract ZIP files, Chrome or another browser, and a GitHub account.

### 1. Download and extract the project

1. Download the supplied `Damsith-Sandaru-Portfolio.zip` file.
2. Open your Android **Files** app and find the ZIP, usually in **Downloads**.
3. Tap the ZIP and choose **Extract**. If your Files app does not offer extraction, use a trusted ZIP/file-manager app already on your phone.
4. Open the extracted folder. Confirm that `index.html`, `README.md`, `assets`, `css`, and `js` are present.

### 2. Create a GitHub account and repository

1. Visit [github.com](https://github.com/) in your browser and create an account or sign in.
2. Tap **+** or open the repositories area, then choose **New repository**.
3. Set **Repository name** to exactly `damsith-portfolio`.
4. Choose **Public**. GitHub Pages needs a public repository for the usual free personal-site workflow.
5. Do not initialize it with another README because this project already includes one.
6. Tap **Create repository**.

### 3. Upload the website files

1. In the new repository, choose **Add file → Upload files**.
2. Select the extracted website files. Upload `index.html` and `README.md` at the repository root, and preserve the `assets`, `css`, and `js` folders with their contents.
3. **Important:** upload the contents of the project folder, not an extra outer folder. The repository must open with `index.html` at its top level.
4. Scroll down and choose **Commit changes** to save the upload.

**Android folder-upload tip:** some Android file pickers allow selecting a whole folder, while others only allow individual files. If folders cannot be selected directly, use this fallback:

1. Upload `index.html` and `README.md` first.
2. In the repository, choose **Add file → Create new file** and enter `assets/images/placeholder.txt` as the filename. Commit the small placeholder file. This creates the folder path.
3. Repeat for `assets/icons/placeholder.txt`, `css/placeholder.txt`, and `js/placeholder.txt`.
4. Open each created folder in GitHub, choose **Add file → Upload files**, and upload the real files for that folder.
5. Open each `placeholder.txt`, choose **Delete file**, and commit the deletion.
6. Check that the final repository file list matches the project structure above.

### 4. Enable GitHub Pages

1. Open the repository's **Settings**.
2. In the sidebar, open **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Under **Branch**, select **main**.
5. Keep the folder set to **/(root)**.
6. Tap **Save**.
7. Wait a few minutes, then refresh the Pages settings screen. The first deployment can take several minutes.
8. GitHub Pages will generate an address like:

```text
https://YOUR-USERNAME.github.io/damsith-portfolio/
```

Replace `YOUR-USERNAME` with your actual GitHub username when sharing the address. The website is not publicly available until GitHub finishes its deployment. Enabling Pages does not mean the site has already been indexed or verified by Google.

If the page does not appear immediately, wait a little longer and confirm that `index.html` is at the repository root, the repository is public, and Pages is set to `main` and `/(root)`.

## Update the website later

### Edit text on a phone

1. Open the repository on GitHub.
2. Open `index.html`.
3. Tap the pencil/edit icon.
4. Change only the visible text you want to update. Keep tags such as `<p>`, `<h2>`, and `<a>` intact.
5. Choose **Commit changes**.
6. GitHub Pages will rebuild the site. Allow a few minutes and refresh the published page.

Most website wording is in `index.html`. Colors, spacing, typography, and responsive layout rules are in `css/style.css`. The main color tokens are grouped at the top of that file.

### Replace the profile photo

The current files are cropped only at the outer edges and optimized from the owner's supplied photograph. No replacement person or facial retouching is used.

For the simplest replacement:

1. Prepare a clear portrait photograph with a **4:5 aspect ratio**.
2. Export two WebP versions:
   - `profile-photo.webp` — ideally 960 × 1200 pixels
   - `profile-photo-640.webp` — ideally 640 × 800 pixels
3. In the GitHub repository, open `assets/images/`.
4. Upload the new files using the same names so they replace the old versions.
5. Commit the changes and wait for GitHub Pages to update.
6. Update the image's `alt` text in `index.html` if the new photograph needs a different description.

If you use PNG or JPEG instead, update both the filenames and the `src`/`srcset` entries in `index.html` to match the real files. Do not leave references to images that are not present.

### Add a project

1. Open `index.html` and find `<div class="project-grid" id="project-grid">`.
2. Copy one complete existing `<article class="project-card ..."> ... </article>` block.
3. Paste it before the closing `</div>` of the project grid.
4. Update the title, description, category, status, and project notes with accurate information.
5. Keep `data-category` as `electronics`, `automotive`, or `education` if you want the existing filters to include it. For a new category, also add a matching filter button with the same `data-filter` value.
6. Add a real project image or GitHub/demonstration link only when one actually exists. Use descriptive alt text for real images.
7. Commit the change and test the filters and project notes.

The existing SVG illustrations are neutral concept graphics, not photographs of completed work. They can remain as clean visual placeholders.

### Update contact links

Search `index.html` for `wa.me`, `instagram.com`, `facebook.com`, or `maps.app.goo.gl`. Replace a URL only with the owner's real new link. For WhatsApp, use the international number without `+`, spaces, or leading local zero. The current link is:

```text
https://wa.me/94762585822
```

External links use `target="_blank" rel="noopener noreferrer"` for safer new-tab behavior.

## Testing and maintenance checklist

After an update, check:

- `index.html` and all asset paths still exist with matching capitalization.
- The profile image loads and the face remains visible on narrow screens.
- The mobile menu opens, closes, and works with the Escape key.
- Every navigation link scrolls to an existing section.
- Project filters show the correct cards.
- WhatsApp and social links use the intended URLs.
- No private address, credentials, API keys, or unverified claims were added.
- The page has no horizontal scrolling at 320px and 390px widths.
- Motion remains comfortable with reduced-motion settings enabled.

## Privacy and technical notes

- The website does not collect form data, set analytics cookies, or run tracking scripts.
- Google Fonts receives normal font-loading requests when the page loads. Remove the Google Fonts links and use the fallback stacks if you prefer a fully self-hosted version.
- Only the school, city, country, and owner-supplied public contact links are presented; no complete residential address is included.
- The website can be hosted on any ordinary static web host as well as GitHub Pages.
