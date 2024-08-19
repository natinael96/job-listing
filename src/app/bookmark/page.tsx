'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react'
import Bookmark from '../components/Bookmark';



function page() {
  return (
    <SessionProvider>
      <div>
        <Bookmark />
      </div>
    </SessionProvider>
  )
}

export default page