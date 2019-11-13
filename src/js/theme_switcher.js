// const Theme = {
//     LIGHT: 'light-theme',
//     DARK: 'dark-theme',
// };

// const defaultSettings = {
//     theme: Theme.LIGHT,
// };

// const refs = {
//     foodMenu: document.querySelector('.js-menu'),
//     themeSwitcher: document.querySelector('input.js-switch-input'),
//     themeCntr: document.querySelector('body'),
// };

// // Set default settings
// if (!localStorage.getItem('settings')) {
//     localStorage.setItem('settings', JSON.stringify(defaultSettings));
// }

// const settings = JSON.parse( localStorage.getItem('settings'));

// if (settings.theme === Theme.LIGHT) {
//     refs.themeCntr.classList.add(Theme.LIGHT);
//     refs.themeSwitcher.checked = false;
// }

// if (settings.theme === Theme.DARK) {
//     refs.themeCntr.classList.add(Theme.DARK);
//     refs.themeSwitcher.checked = true;
// }


// refs.themeSwitcher.addEventListener('change', e => {
//     const settings = JSON.parse( localStorage.getItem('settings'));
    
//     if (e.currentTarget.checked) {        
//         if(refs.themeCntr.classList.contains(Theme.LIGHT)) {
//             refs.themeCntr.classList.remove(Theme.LIGHT);
//         }

//         refs.themeCntr.classList.add(Theme.DARK);
//         settings.theme = Theme.DARK;
//     } else {
//         if(refs.themeCntr.classList.contains(Theme.DARK)) {
//             refs.themeCntr.classList.remove(Theme.DARK);
//         }

//         refs.themeCntr.classList.add(Theme.LIGHT)
//         settings.theme = Theme.LIGHT;        
//     }

//     localStorage.setItem('settings', JSON.stringify(settings));
// });

class ThemeSwitcher {
    constructor() {
        this.themeTypes = {
            LIGHT: 'light-theme',
            DARK: 'dark-theme',
        }

      this.defaultSettings = {
        theme: this.themeTypes.LIGHT,
      }

      this.refs = {
        themeSwitchCtrl: document.querySelector('input.js-switch-input'),
        themeCntr: document.querySelector('body'),
      }

      this.init();
      this.handle();
    }

    init() {
        this.setDefaultSettings();
        this.setTheme();
    }

    handle() {
        this.refs.themeSwitchCtrl.addEventListener('change', e => this.changeTheme(e));
    }

    setDefaultSettings() {
        if (!localStorage.getItem('settings')) {
            localStorage.setItem('settings', JSON.stringify(this.defaultSettings));
        }
    }

    // getSettings() {
    //     return JSON.parse( localStorage.getItem('settings'));
    // }

    setTheme() {
        const settings = JSON.parse( localStorage.getItem('settings'));

        if (settings.theme === this.themeTypes.LIGHT) {
            this.refs.themeCntr.classList.add(this.themeTypes.LIGHT);
            this.refs.themeSwitchCtrl.checked = false;
        }

        if (settings.theme === this.themeTypes.DARK) {
            this.refs.themeCntr.classList.add(this.themeTypes.DARK);
            this.refs.themeSwitchCtrl.checked = true;
        }
    }

    changeTheme(evt) {
        const settings = JSON.parse( localStorage.getItem('settings'));
    
        if (evt.target.checked) {        
            if(this.refs.themeCntr.classList.contains(this.themeTypes.LIGHT)) {
                this.refs.themeCntr.classList.remove(this.themeTypes.LIGHT);
            }

            this.refs.themeCntr.classList.add(this.themeTypes.DARK);
            settings.theme = this.themeTypes.DARK;
        } else {
            if(this.refs.themeCntr.classList.contains(this.themeTypes.DARK)) {
                this.refs.themeCntr.classList.remove(this.themeTypes.DARK);
            }

            this.refs.themeCntr.classList.add(this.themeTypes.LIGHT);
            settings.theme = this.themeTypes.LIGHT;        
        }

        localStorage.setItem('settings', JSON.stringify(settings));
    }

}

new ThemeSwitcher();
