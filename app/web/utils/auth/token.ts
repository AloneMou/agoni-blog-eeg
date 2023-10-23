import {REFRESH_TOKEN_KEY, TOKEN_KEY} from '@/enums/cacheEnum';
import {isBrowser} from 'umi';


export function getToken(): string | null {
  return getAuthCache(TOKEN_KEY);
}

export function removeToken() {
  return removeAuthCache(TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  return getAuthCache(REFRESH_TOKEN_KEY);
}

export function removeRefreshToken() {
  return removeAuthCache(REFRESH_TOKEN_KEY);
}

export function getAuthCache(key) {
  if (isBrowser()) {
    return window.localStorage.getItem(key);
  }
  return null;
}


export function setAuthCache(key: string, value: string) {
  if (isBrowser()) {
    return window.localStorage.setItem(key, value);
  }
}

export function removeAuthCache(key: string) {
  if (isBrowser()) {
    return window.localStorage.removeItem(key);
  }
}

export function clearAuthCache() {
  if (isBrowser()) {
    return window.localStorage.clear();
  }
}
