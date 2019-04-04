import * as dialogs from 'tns-core-modules/ui/dialogs/dialogs';

export function alert(options) {
    if (typeof options === 'string') {
        return dialogs.alert(options);
    }

    const { title, message, buttonText } = options;

    return dialogs.alert({
        title,
        message,
        okButtonText: buttonText
    });
}

export function prompt(options) {
    if (typeof options === 'string') {
        return dialogs.prompt(options);
    }

    const { title, message, inputType, defaultText, okButtonText, cancelButtonText } = options;

    return dialogs.prompt({
        title,
        message,
        inputType,
        defaultText,
        okButtonText,
        cancelButtonText
    });
}