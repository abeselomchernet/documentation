declare module 'fzf' {
  export interface FzfResultEntry<T> {
    item: T;
    score: number;
    positions: number[];
    start: number;
    end: number;
  }

  export interface FzfOptions<T> {
    limit?: number;
    selector?: (item: T) => string;
    // Add other fzf options as needed
  }

  export class Fzf<T> {
    constructor(list: T[], options?: FzfOptions<T>);
    find(query: string): FzfResultEntry<T>[];
  }
}