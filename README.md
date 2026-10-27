# Suchandra UX Portfolio

A portfolio website built with Next.js, React, and Tailwind CSS.

## Run locally

### Prerequisites

- Node.js 20.9 or newer
- npm

Check your installed versions:

```powershell
node --version
npm --version
```

### Install dependencies

From the project directory, run:

```powershell
npm.cmd ci
```

`npm.cmd` runs npm through its Windows command script, which avoids PowerShell's execution-policy error when `npm.ps1` is blocked. In Command Prompt or a shell where npm scripts are enabled, you can use `npm ci`.

### Start the development server

```powershell
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Press `Ctrl+C` in the terminal to stop the server.

## Other commands

```powershell
npm.cmd run build
npm.cmd start
npm.cmd run lint
```

`npm.cmd start` serves the production build, so run `npm.cmd run build` first.

## Website

[View the deployed portfolio](https://creative-designs.github.io/Suchandra_UX-portfolio/)
