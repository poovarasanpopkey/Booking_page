// utils.js
export function detectOS() {
    const userAgent = window.navigator.userAgent;
  
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return "iOS";
    } else if (/Android/i.test(userAgent)) {
      return "Android";
    } else if (/Windows NT/i.test(userAgent)) {
      return "Windows";
    } else if (/Macintosh/i.test(userAgent)) {
      return "macOS";
    } else if (/Linux/i.test(userAgent)) {
      return "Linux";
    } else {
      return "Other";
    }
  }
  