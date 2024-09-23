import { vi } from 'vitest';

class IntersectionObserverMock implements IntersectionObserver {
  root: Document | Element | null;

  rootMargin: string;

  thresholds: ReadonlyArray<number>;

  observe: (target: Element) => void;

  unobserve: (target: Element) => void;

  disconnect: () => void;

  takeRecords: () => IntersectionObserverEntry[];

  constructor(
    public callback: IntersectionObserverCallback,
    public options?: IntersectionObserverInit,
  ) {
    this.root = options?.root || null;
    this.rootMargin = options?.rootMargin || '0px';

    if (options?.threshold !== undefined) {
      this.thresholds = Array.isArray(options.threshold)
        ? options.threshold
        : [options.threshold];
    } else {
      this.thresholds = [0];
    }

    this.observe = vi.fn();
    this.unobserve = vi.fn();
    this.disconnect = vi.fn();
    this.takeRecords = vi.fn();
  }

  triggerIntersect(entries: IntersectionObserverEntry[]) {
    this.callback(entries, this);
  }
}

// Add the mock to the window object
Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});

export default IntersectionObserverMock;
