import * as adService from '../services/ad-service';

const mixin = {
    data() {
        return {
            adType: null
        };
    },

    computed: {
        adBannerOptions() {
            const vm = this;

            return vm.config && vm.config.admob;
        },

        adInterstitialOptions() {
            const vm = this;

            return vm.config && vm.config.admob;
        }
    },

    mounted() {
        const vm = this;

        switch (vm.adType) {
            case 'banner':
                setTimeout(() => {
                    adService
                        .showBanner(vm.adBannerOptions)
                        .catch(error => vm.eventBus.send('error', { error, context: vm }));
                }, 500);

                break;

            case 'interstitial':
                setTimeout(() => {
                    adService
                        .showInterstitial(vm.adInterstitialOptions)
                        .catch(error => vm.eventBus.send('error', { error, context: vm }));
                }, 500);

                break;
        }
    },

    beforeDestroy() {
        const vm = this;

        if (vm.adType === 'banner') {
            adService
                .hideBanner()
                .catch(error => vm.eventBus.send('error', { error, context: vm }));
        }
    }
}

export default mixin;