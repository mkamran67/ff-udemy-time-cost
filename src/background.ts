// background.ts
import { browser } from 'webextension-polyfill-ts';

browser.runtime.onMessage.addListener((message) => {
  console.log('Received message:', message);
});