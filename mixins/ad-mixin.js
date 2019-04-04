import * as adService from '../services/ad-service';

const mixin = {
    mounted() {
        const vm = this;

        setTimeout(() => {
            adService
                .showBanner(vm.config.admob)
                .catch(error => vm.eventBus.send('error', { error, context: vm }));
        }, 500);
    },

    beforeDestroy() {
        const vm = this;

        adService
            .hideBanner()
            .catch(error => vm.eventBus.send('error', { error, context: vm }));
    }
}

export default mixin;