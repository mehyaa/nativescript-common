import { Toasty, ToastPosition, ToastDuration } from 'nativescript-toasty';

export function show(message, options) {
    let position = 'bottom';
    let duration = 'short';

    if (options) {
        position = options.position || 'bottom';
        duration = options.duration || 'short';
    }

    const toasty = new Toasty(message);

    switch (position) {
        case 'top':
            toasty.position = ToastPosition.TOP;
            break;

        case 'center':
            toasty.position = ToastPosition.CENTER;
            break;

        case 'bottom':
            toasty.position = ToastPosition.BOTTOM;
            break;

        default:
            toasty.position = ToastPosition.BOTTOM;
            break;
    }

    toasty.duration = duration === 'long' ? ToastDuration.LONG : ToastDuration.SHORT;

    toasty.show();
}