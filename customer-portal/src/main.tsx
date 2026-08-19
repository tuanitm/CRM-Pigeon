import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ZaloSDK } from './zalo.ts'

// Initialize Zalo SDK
ZaloSDK.init().then(isInitialized => {
  if (isInitialized) {
    console.log('✓ Zalo SDK initialized')
  } else {
    console.warn('⚠ Zalo SDK not available (running outside Zalo MiniApp)')
  }
}).catch(err => {
  console.error('✗ Error initializing Zalo SDK:', err)
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
