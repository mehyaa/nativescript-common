import { normalizeError } from '@mehyaa/javascript-common/utility/error-utils';

export function handleError(vm, catched, context, info, source) {
    const error = normalizeError(catched);

    if (error.$isHandled) {
        return;
    }

    error.$isHandled = true;

    console.error('Error occured:', error, ' Source:', source, ' Info:', info);

    vm.eventBus.send('toast', error.message);
}