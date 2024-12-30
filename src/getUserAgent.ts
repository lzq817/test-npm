export function getUserAgent(): {
  browser: string;
  version: string;
  os: string;
} {
  const ua = navigator.userAgent;
  let browser = 'unknown';
  let version = 'unknown';
  let os = 'unknown';

  // 检测浏览器
  if (ua.indexOf('Chrome') > -1) {
    browser = 'Chrome';
  } else if (ua.indexOf('Firefox') > -1) {
    browser = 'Firefox';
  } else if (ua.indexOf('Safari') > -1) {
    browser = 'Safari';
  } else if (ua.indexOf('Edge') > -1) {
    browser = 'Edge';
  } else if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) {
    browser = 'IE';
  }

  // 检测操作系统
  if (ua.indexOf('Windows') > -1) {
    os = 'Windows';
  } else if (ua.indexOf('Mac') > -1) {
    os = 'MacOS';
  } else if (ua.indexOf('Linux') > -1) {
    os = 'Linux';
  } else if (ua.indexOf('Android') > -1) {
    os = 'Android';
  } else if (ua.indexOf('iOS') > -1) {
    os = 'iOS';
  }

  // 获取版本号
  const match = ua.match(new RegExp(`${browser}\\/([\\d.]+)`));
  if (match) {
    version = match[1];
  }

  return {
    browser,
    version,
    os
  };
} 