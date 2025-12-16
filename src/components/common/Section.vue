<template>
    <div class="w-screen min-h-screen section text-white about-section"
    :class="borderRadiusOnTop ? 'rounded-t-3xl' : '', borderRadiusOnBottom ? 'rounded-b-3xl' : ''">
    <div class="flex flex-col py-12 px-5 lg:py-16 lg:px-10 gap-12 lg:gap-16">
      <div class="text-section-h2 font-section leading-none">{{ title }}</div>
      <div class="grid-gap flex grid-cols-12 sm:justify-end lg:grid">
        <div class="col-span-7 col-start-1 flex flex-col gap-9 sm:col-start-6 sm:flex-row">
          <p class="text-section-h4 font-body-strong text-muted">{{ subtitle }}</p>
          <div class="w-full max-w-[35ch] text-balance font-medium leading-base">
          <p class="text-text-sm font-body text-muted leading-relaxed">{{ description }}</p>
          </div>
        </div>
      </div>
      <slot name="default"></slot>
    </div>
    </div>
</template>
<script>
export default {
    name: "Section",
    props: {
        title: {
            type: String,
            required: true
        },
        borderRadiusOnTop: {
            type: Boolean,
            default: false
        },
        borderRadiusOnBottom: {
            type: Boolean,
            default: false
        },
        subtitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            observer: null,
            lastScrollY: 0,
            isScrollingDown: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, { passive: true });
        this.lastScrollY = window.scrollY;

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Use isIntersecting with rootMargin for robust detection of tall sections
                if (entry.isIntersecting) {
                    // Only snap if entering from the bottom AND scrolling down
                    if (entry.boundingClientRect.top > 0 && this.isScrollingDown) {
                        this.smoothScrollTo(entry.target);
                    }
                }
            });
        }, {
            threshold: 0,
            rootMargin: '0px 0px -40% 0px'
        });
        
        this.observer.observe(this.$el);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        handleScroll() {
            const currentScrollY = window.scrollY;
            this.isScrollingDown = currentScrollY > this.lastScrollY;
            this.lastScrollY = currentScrollY;
        },
        smoothScrollTo(element) {
            const targetPosition = element.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1000; // 1000ms for a natural, premium feel
            let start = null;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                // Ease Out Quart: 1 - (1 - t)^4
                // Starts fast, slows down very gently
                const ease = (t) => 1 - Math.pow(1 - t, 4);
                
                const currentProgress = Math.min(progress / duration, 1);
                const easedProgress = ease(currentProgress);

                window.scrollTo(0, startPosition + distance * easedProgress);

                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            };

            window.requestAnimationFrame(step);
        }
    }
}
</script>   