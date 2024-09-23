<template>
  <div class="third-party-stack-section pt-8 pb-32 lg:pb-56">
    <CdrContainer>
      <section>
        <div class="text-center">
          <IconBrandReiIceAxes
            class="third-party-stack-section__icon w-32 h-32 mb-8"
          />
        </div>
        <div class="mt-6 mb-28 md:mt-0">
          <CdrHeadingSerif tag="h2" scale="3" class="text-center">
            Open source
          </CdrHeadingSerif>
          <CdrUtilitySans
            scale="0"
            tag="p"
            class="sm:m-32 mt-6 sm:mt-6 text-center"
          >
            Open-source technologies foster collaborative innovation, empowering
            Summit Forge to adapt quickly and stay ahead in today's dynamic
            market landscape. They enable flexibility, transparency, and
            community-driven development, ensuring robust solutions tailored to
            evolving needs.
          </CdrUtilitySans>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
          <div
            v-for="(item, i) in stackArr"
            :key="`carousel-cards-${i}`"
            class="flex gap-4 items-start"
          >
            <div>
              <Suspense>
                <template #default>
                  <component
                    :is="resolveComponent(item.iconName)"
                    class="w-[45px] h-[45px]"
                  />
                </template>
                <template #fallback>
                  <div>Loading...</div>
                </template>
              </Suspense>
            </div>
            <div>
              <CdrHeadingSerif tag="h3" scale="2">
                {{ item.title }}
              </CdrHeadingSerif>
              <CdrText
                tag="div"
                class="third-party-stack-section__tech-description"
              >
                <p class="m-0 mt-4" v-html="item.content" />
              </CdrText>
            </div>
          </div>
        </div>
      </section>
    </CdrContainer>
  </div>
</template>
<script setup lang="ts">
import {
  CdrUtilitySans,
  CdrHeadingSerif,
  CdrContainer,
  IconBrandReiIceAxes,
  CdrText,
} from '@rei/cedar';
import IconVue from '../svg/IconVue.vue';
import IconVite from '../svg/IconVite.vue';
import IconVitest from '../svg/IconVitest.vue';
import IconTypeScript from '../svg/IconTypeScript.vue';
import IconGitLab from '../svg/IconGitLab.vue';
import IconSpringBoot from '../svg/IconSpringBoot.vue';

const svgComponents = {
  IconVue,
  IconVite,
  IconVitest,
  IconTypeScript,
  IconGitLab,
  IconSpringBoot,
};

// Dynamically resolve component names to component objects
function resolveComponent(name: string) {
  return svgComponents[name as keyof typeof svgComponents];
}

const stackArr = [
  {
    title: 'Vue',
    content:
      'Vue is a progressive JavaScript framework for building user interfaces and single-page applications. It offers flexibility and ease of integration, making it ideal for a wide range of web development projects.',
    iconName: 'IconVue',
  },
  {
    title: 'Vite',
    content:
      'Vite is a fast front-end build tool that offers instant server start and lightning-fast hot module replacement (HMR). It optimizes both development and production workflows with modern JavaScript features and efficient bundling.',
    iconName: 'IconVite',
  },
  {
    title: 'Vitest',
    content:
      'Vitest is a fast unit testing framework designed for modern JavaScript and TypeScript applications. It integrates seamlessly with Vite, providing efficient and instant test execution with powerful features like mocking and snapshot testing.',
    iconName: 'IconVitest',
  },
  {
    title: 'TypeScript',
    content:
      'TypeScript is a statically typed superset of JavaScript that enhances code quality and developer productivity. It enables early error detection, improved maintainability, and seamless integration with existing JavaScript codebases.',
    iconName: 'IconTypeScript',
  },
  {
    title: 'GitLab',
    content:
      'GitLab is a comprehensive DevOps platform that combines source code management, CI/CD pipelines, and collaboration tools in a single application. It streamlines software development workflows, enhancing efficiency and enabling seamless collaboration across teams.',
    iconName: 'IconGitLab',
  },
  {
    title: 'Spring Boot',
    content:
      'Spring Boot is a powerful framework for building Java-based web applications with minimal configuration. It simplifies development by providing a convention-over-configuration approach, enabling rapid deployment and scalability.',
    iconName: 'IconSpringBoot',
  },
];
</script>
<style lang="scss" scoped>
.third-party-stack-section {
  background-color: $cdr-color-background-secondary;
  &__icon {
    fill: darksalmon;
  }
  &__tech-description p {
    color: $cdr-color-text-secondary;
  }
}
</style>
