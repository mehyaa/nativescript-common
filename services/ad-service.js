import firebase from 'nativescript-plugin-firebase';

export function showBanner(options) {
    const {
        androidBannerId,
        iosBannerId,
        testing,
        iosTestDeviceIds,
        keywords,
        size = 'smart',
        position = 'bottom',
        margin = 0
    } = options;

    let bannerSize = firebase.admob.AD_SIZE.SMART_BANNER;

    switch (size) {
        case 'smart':
            bannerSize = firebase.admob.AD_SIZE.SMART_BANNER;
            break;

        case 'banner':
            bannerSize = firebase.admob.AD_SIZE.BANNER;
            break;

        case 'large':
            bannerSize = firebase.admob.AD_SIZE.LARGE_BANNER;
            break;

        case 'rectangle':
            bannerSize = firebase.admob.AD_SIZE.MEDIUM_RECTANGLE;
            break;

        case 'full':
            bannerSize = firebase.admob.AD_SIZE.FULL_BANNER;
            break;

        case 'leaderboard':
            bannerSize = firebase.admob.AD_SIZE.LEADERBOARD;
            break;

        case 'skyscraper':
            bannerSize = firebase.admob.AD_SIZE.SKYSCRAPER;
            break;

        case 'fluid':
            bannerSize = firebase.admob.AD_SIZE.FLUID;
            break;
    }

    const margins = {};

    switch (position) {
        case 'top':
            margins.top = margin || 0;
            break;

        case 'bottom':
            margins.bottom = margin || 0;
            break;
    }

    const bannerOptions = {
        size: bannerSize,
        margins,
        androidBannerId,
        iosBannerId,
        testing,
        iosTestDeviceIds,
        keywords
    };

    return firebase.admob.showBanner(bannerOptions);
}

export function hideBanner() {
    return firebase.admob.hideBanner();
}

export function showInterstitial(options) {
    const {
        androidInterstitialId,
        iosInterstitialId,
        testing,
        iosTestDeviceIds,
        keywords,
        onAdClosed
    } = options;

    const interstitialOptions = {
        androidInterstitialId,
        iosInterstitialId,
        testing,
        iosTestDeviceIds,
        keywords,
        onAdClosed
    };

    return firebase.admob.preloadInterstitial(interstitialOptions).then(() => firebase.admob.showInterstitial());
}

export function showRewardedVideo(options) {
    const {
        androidAdPlacementId,
        iosAdPlacementId,
        testing,
        iosTestDeviceIds,
        keywords,
        onOpened,
        onStarted,
        onCompleted,
        onClosed,
        onLeftApplication,
        onLoaded,
        onFailedToLoad,
        onRewarded
    } = options;

    const rewardedVideoAdPreloadOptions = {
        androidAdPlacementId,
        iosAdPlacementId,
        testing,
        iosTestDeviceIds,
        keywords
    };

    const rewardedVideoAdOptions = {
        onOpened,
        onStarted,
        onCompleted,
        onClosed,
        onLeftApplication,
        onLoaded,
        onFailedToLoad,
        onRewarded
    };

    return firebase.admob
        .preloadRewardedVideoAd(rewardedVideoAdPreloadOptions)
        .then(() => firebase.admob.showRewardedVideoAd(rewardedVideoAdOptions));
}