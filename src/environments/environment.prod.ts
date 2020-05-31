export const environment = {
  production: true
};

export function API(): string {
  return localStorage.getItem('server') || 'https://checkforme.rprado.dev/';
}

export const realTimeUpdateDelay: number = 3000;

export const cacheExpiresDelay: number = 160000;
