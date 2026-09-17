# Development Guide

## Local Commands

```sh
npm install
npm run dev
npm run build
```

`npm run build` runs type-checking through `vue-tsc` and then builds with Vite.

## Recommended Structure

```text
src/
  assets/
  components/
    layout/
    sections/
    ui/
  data/
  pages/
  router/
  styles/
```

For a single-page first version, `components/sections` can hold homepage sections.

## Environment

Only add API integration when needed.

```text
VITE_SEQUO_API_BASE_URL=https://api.sequoservices.com
```

Do not hardcode production secrets. Public Vite variables are visible in the browser.

## API Notes

Use [SEQUO_API_SUMMARY.md](SEQUO_API_SUMMARY.md) for current backend behavior.

Important:

- Current implemented backend uses `/api`, not `/api/v1`.
- Public site forms should call safe public endpoints only.
- Do not expose admin, finance, support, or internal operational actions.

## Completion Checklist

- Replace starter Vue content.
- Confirm desktop and mobile layouts.
- Check text does not overflow cards/buttons.
- Use meaningful images or app mockups.
- Add accessible labels for forms and buttons.
- Run `npm run build`.
