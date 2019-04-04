import * as firebase from 'nativescript-plugin-firebase';

export function setupFirebase(vm, firebaseConfig, initFn) {
    const init =
        Object.assign(
            {},
            firebaseConfig,
            {
                onAuthStateChanged(data) {
                    console.log('Firebase auth state changed:', data);

                    if (data.loggedIn) {
                        vm.eventBus.send('user-authenticated', data.user);
                    }
                    else {
                        vm.eventBus.send('user-unauthenticated');
                    }
                },

                storageBucket: firebaseConfig.storageBucket && `gs://${firebaseConfig.storageBucket}`
            });

    firebase
        .init(init)
        .then(instance => {
            console.log('Firebase init successful.', instance);

            if (typeof initFn === 'function') {
                initFn(vm);
            }
        })
        .catch(error => {
            console.log('Firebase init error:', error);
        });
}