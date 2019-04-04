import * as application from 'tns-core-modules/application';

export function setupErrorHandler(Vue, vm) {
    Vue.config.errorHandler = (error, context, info) => {
        vm.eventBus.send('error', { error, context, info, source: 'Vue.js errorHandler' });

        return true;
    };

    application.on(application.discardedErrorEvent, $event => {
        const error = $event.error;

        vm.eventBus.send('error', { error, context: vm, source: `Application: ${application.discardedErrorEvent}` });
    });

    application.on(application.uncaughtErrorEvent, $event => {
        const error = $event.android || $event.ios || {};

        vm.eventBus.send('error', { error, context: vm, source: `Application: ${application.uncaughtErrorEvent}` });
    });
}