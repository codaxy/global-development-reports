import { Controller } from 'cx/ui';

import { getMyStars } from 'api';

export default class extends Controller {
    onInit() {
        this.addTrigger('start', ['user'], ::this.loadStars, true);
        this.store.init('$page.tab', 'popular');
    }

    loadStars() {
        getMyStars()
            .then(stars => {
                this.store.set('$page.stars', stars);
            })
            .catch(e => {
                console.log(e);
            })
    }
}