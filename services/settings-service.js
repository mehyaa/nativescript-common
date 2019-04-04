import * as applicationSettings from 'tns-core-modules/application-settings';

export function getString(key) {
    return applicationSettings.getString(key);
}

export function setString(key, value) {
    applicationSettings.setString(key, value);
}
