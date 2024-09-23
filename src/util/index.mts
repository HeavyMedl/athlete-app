import type { PageData as LandingPageModel } from '../types/pages/landing-model.mjs';
import type { PageData as DetailsPageModel } from '../types/pages/details-model.mjs';

/**
 * @typedef {Object} ScriptFinishedData
 * @property {String} scriptSrc script url that was loaded
 * @property {Object} timing timing data
 * @property {Number} timing.start timestamp when script was added to DOM
 * @property {Number} timing.end timestamp when script was downloaded, parsed and run
 * @property {HTMLScriptElement} el DOM element created
 */
export interface ScriptData {
  scriptSrc: string;
  timing: {
    start: number;
    finish: number;
  };
  el: HTMLScriptElement;
}
/**
 * Function for dynamically loading external 3rd party scripts to the DOM.
 * Returns a promise that resolves with an object containing the name of url loaded,
 * and timestamps in milliseconds representing when script was added to the DOM and
 * when it finished downloading and running, or rejects with an error
 * {script: <scriptName, timing: {start: <timestamp>, end: <timestamp>}, el: <dom element>}
 * @param {String} script url source of the 3rd party script
 * @param {Object} attrs 3rd party script tag attributes
 * @returns {Promise<ScriptFinishedData>}
 */

export function loadScript(script: string, attrs?: Record<string, string>) {
  return new Promise<ScriptData>((resolve, reject) => {
    try {
      if (!script) {
        reject(new Error('no script source'));
      } else {
        let start: number;
        const newScript = document.createElement('script');
        newScript.src = script;
        if (attrs && Object.keys(attrs)?.length) {
          for (const [k, v] of Object.entries(attrs)) {
            newScript.setAttribute(k, v);
          }
        }
        newScript.onload = () =>
          resolve({
            scriptSrc: script,
            timing: { start, finish: window.performance.now() },
            el: newScript,
          });
        newScript.onerror = () => reject(new Error('script load error'));
        document.querySelector('head')?.appendChild(newScript);
        start = window.performance.now();
      }
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Description placeholder
 *
 * @export
 * @returns {string}
 */
export function getPathname(): string {
  const url = new URL(window.location.href);
  const { pathname } = url;
  return pathname.replace(/^\/|\/$/g, '');
}

/**
 * Description placeholder
 *
 * @export
 * @async
 * @returns {Promise<{
 *   componentName: string;
 *   pageData: LandingPageModel | DetailsPageModel
 * }>}
 */
export async function getComponentContext(): Promise<{
  componentName: string;
  pageData: LandingPageModel | DetailsPageModel;
}> {
  let pathname = getPathname();
  const sluggedDetailsRegex = /^athlete\/\d+\/[a-zA-Z-]+$/;
  if (sluggedDetailsRegex.test(pathname)) {
    // Test to see if we're a slugged athlete detail
    pathname = 'athlete/detail';
  }
  let componentName;
  let pageData;
  switch (pathname) {
    case 'athlete/detail':
      await import('../style/pages/detail/vendor.scss');
      componentName = 'PageDetail';
      pageData = (await import('../mock/details-model-data.mjs')).default
        .pageData;
      break;
    default:
      await import('../style/pages/landing/vendor.scss');
      componentName = 'PageLanding';
      pageData = (await import('../mock/landing-model-data.mjs')).default
        .pageData;
      break;
  }
  return { componentName, pageData };
}
