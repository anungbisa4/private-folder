'use client'

import { Suspense, useState } from "react";
import Test from "@private/test";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '2rem', textAlign: 'center' }}>
      <h1>Next.js + React</h1>
      <div className='card'>
        <button type='button' onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app/page.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the logos to learn more
      </p>
      <Suspense fallback={<div>Private...</div>}>
        <Test />
      </Suspense>
    </div>
  );
}
