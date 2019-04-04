import firebase from 'nativescript-plugin-firebase';

export function showBanner(adMobConfig) {
    return firebase.admob
        .showBanner({
            size: firebase.admob.AD_SIZE.SMART_BANNER,
            margins: {
                bottom: 0
            },
            androidBannerId: adMobConfig.androidBannerId,
            iosBannerId: adMobConfig.iosBannerId,
            testing: adMobConfig.isTesting,
            iosTestDeviceIds: adMobConfig.iosTestDeviceIds,
            keywords: adMobConfig.keywords
        });
}

export function hideBanner() {
    return firebase.admob
        .hideBanner();
}
