import {
  vi,
  assert,
  describe,
  afterEach,
  it,
  expect,
  beforeEach,
} from 'vitest';
import { loadScript, getPathname, getComponentContext } from './index.mjs';

vi.mock('../style/pages/detail/vendor.scss', () => ({}));
vi.mock('../style/pages/landing/vendor.scss', () => ({}));
vi.mock('../mock/details-model-data.mjs', () => ({
  default: { pageData: { detail: 'detail data' } },
}));
vi.mock('../mock/landing-model-data.mjs', () => ({
  default: { pageData: { landing: 'landing data' } },
}));

beforeEach(() => {
  vi.resetAllMocks();
});

describe('loadScript', () => {
  afterEach(() => {
    const scriptTag = document.querySelector('script[src="fakescript.js"]');
    if (scriptTag) document.querySelector('head')?.removeChild(scriptTag);
  });
  it('should error if no source is provided', async () =>
    /* @ts-expect-error testing error scenario */
    loadScript().catch((err) => {
      expect(err.message).to.include('no script source');
    }));
  it('should add a script tag to the DOM', () => {
    loadScript('fakescript.js');
    const scriptTag = document.querySelector('script[src="fakescript.js"]');
    expect(scriptTag).to.not.equal(null);
  });
  it('should add a script attributes to the DOM', () => {
    loadScript('fakescript.js', {
      'data-attr-key': 'dataAttrValue',
    });
    const scriptTag = document.querySelector('script[src="fakescript.js"]');
    expect(scriptTag?.getAttribute('data-attr-key')).to.equal('dataAttrValue');
  });
  // TODO: Is this a bad test?
  it('should return the script source, timing information, and the dom element', async () => {
    const loadTime = 50;
    let scriptTag: HTMLElement | null;
    const script = loadScript('fakescript.js').then((scriptData) => {
      expect(scriptTag?.outerHTML).to.equal(scriptData.el.outerHTML);
      expect(scriptData.scriptSrc).to.equal('fakescript.js');
      const testLength = scriptData.timing.finish - scriptData.timing.start;
      assert.closeTo(testLength, loadTime, 200);
    });
    scriptTag = document.querySelector('script[src="fakescript.js"]');
    const loadEvent = new Event('load');
    const fireLoadEvent = new Promise<void>((resolve) => {
      setTimeout(() => {
        scriptTag?.dispatchEvent(loadEvent);
        resolve();
      }, loadTime);
    });
    return Promise.all([fireLoadEvent, script]);
  });
  it('should handle loading errors', async () => {
    const errorLoad = new Event('error');
    loadScript('fakescript.js').catch((error) => {
      expect(error).to.be.an('error');
      expect(error.message).to.include('script load error');
    });
    const scriptTag = document.querySelector('script[src="fakescript.js"]');
    scriptTag?.dispatchEvent(errorLoad);
    return loadScript;
  });
  it('should handle unexpected internal errors', async () => {
    const stub = vi.spyOn(document, 'createElement').mockImplementation(() => {
      throw new Error('fake error');
    });
    await loadScript('fakescript.js').catch((error) => {
      expect(error).to.be.an('error');
      expect(error.message).to.include('fake error');
      stub.mockRestore();
    });
  });
});

// getPathname.test.ts
describe('getPathname', () => {
  it('should return the pathname without leading and trailing slashes', () => {
    const originalLocation = window.location;

    // Mock window.location.href
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://example.com/test/path/',
      },
      writable: true,
    });

    const result = getPathname();
    expect(result).toBe('test/path');

    // Restore original location
    Object.defineProperty(window, 'location', {
      value: originalLocation,
    });
  });

  it('should handle pathname without trailing slash', () => {
    const originalLocation = window.location;

    // Mock window.location.href
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://example.com/test/path',
      },
      writable: true,
    });

    const result = getPathname();
    expect(result).toBe('test/path');

    // Restore original location
    Object.defineProperty(window, 'location', {
      value: originalLocation,
    });
  });

  it('should handle pathname with leading slash only', () => {
    const originalLocation = window.location;

    // Mock window.location.href
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://example.com//test/path',
      },
      writable: true,
    });

    const result = getPathname();
    expect(result).toBe('/test/path');

    // Restore original location
    Object.defineProperty(window, 'location', {
      value: originalLocation,
    });
  });

  it('should handle pathname without leading and trailing slashes', () => {
    const originalLocation = window.location;

    // Mock window.location.href
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://example.com/',
      },
      writable: true,
    });

    const result = getPathname();
    expect(result).toBe('');

    // Restore original location
    Object.defineProperty(window, 'location', {
      value: originalLocation,
    });
  });

  it('should handle pathname with only a slash', () => {
    const originalLocation = window.location;

    // Mock window.location.href
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://example.com//',
      },
      writable: true,
    });

    const result = getPathname();
    expect(result).toBe('');

    // Restore original location
    Object.defineProperty(window, 'location', {
      value: originalLocation,
    });
  });
});

describe('getComponentContext', () => {
  it('should return PageDetail component context for slugged details path', async () => {
    // Mock window.location.href
    const originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://example.com/athlete/12345/some-athlete-name',
      },
      writable: true,
    });

    const result = await getComponentContext();
    expect(result).toEqual({
      componentName: 'PageDetail',
      pageData: { detail: 'detail data' },
    });

    // Restore original location
    Object.defineProperty(window, 'location', {
      value: originalLocation,
    });
  });

  it('should return PageLanding component context for default path', async () => {
    // Mock window.location.href
    const originalLocation = window.location;
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://example.com/some/other/path',
      },
      writable: true,
    });

    const result = await getComponentContext();
    expect(result).toEqual({
      componentName: 'PageLanding',
      pageData: { landing: 'landing data' },
    });

    // Restore original location
    Object.defineProperty(window, 'location', {
      value: originalLocation,
    });
  });
});
