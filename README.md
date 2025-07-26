# @bonn/mini-toast

Lightweight toast notification library for React

<br/>

## Features

- Simple toast API
- Built with Zustand for state management
- Supports multiple toast types and durations

<br/>

## Installation

```bash
npm install @bonn/mini-toast
# or
yarn add @bonn/mini-toast
```

> **Note**: This library uses Tailwind CSS for styling.<br/>
> Make sure Tailwind CSS is configured in your project for the UI to display correctly.

<br/>

## Usage

Import `ToastManager` to root layout

```typescript
import { ToastManager } from "@bonn/mini-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {children}
        <ToastManager />
      </body>
    </html>
  );
}
```

Use the toast hook like this:

```typescript
import React from "react";
import { useToast, ToastManager } from "@bonn/mini-toast";

function App() {
  const toast = useToast();

  return (
    <button onClick={() => toast.shortSuccess("This is a success message!")}>
      Show Success Toast
    </button>
  );
}

export default App;
```

<br/>

## Toast API

- `longSuccess(message: string)`
- `longError(message: string)`
- `longInfo(message: string)`
- `longWarning(message: string)`
- `shortSuccess(message: string)`
- `shortError(message: string)`
- `shortInfo(message: string)`
- `shortWarning(message: string)`
- `clear()` - clear all toasts in state

<br/>

## Peer Dependencies

This library requires the following peer dependencies to be installed in your project:

> React (>=17)<br/>
> Zustand (>=4)<br/>
> TailwindCSS (>=3)

<br/>

## License

MIT © Bonn Studio
