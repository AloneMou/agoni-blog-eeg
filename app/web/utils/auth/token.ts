import {REFRESH_TOKEN_KEY, TOKEN_KEY} from '@/enums/cacheEnum';


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
  return localStorage.getItem(key);
}


export function setAuthCache(key: string, value: string) {
  return localStorage.setItem(key, value);
}

export function removeAuthCache(key: string) {
  return localStorage.removeItem(key);
}

export function clearAuthCache() {
  return localStorage.clear();
}
