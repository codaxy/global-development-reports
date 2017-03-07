import { Controller } from 'cx/ui';
import {queryTopics, queryTopicIndicators, queryCountries } from 'api/data';
import { detectFormat } from 'app/util';

export default class extends Controller {
    init() {
        super.init();

        this.addTrigger('name', ['indicator.name'], name => {
            this.store.set('title', name);
        });

        this.addComputable('format', ['indicator.name'], detectFormat);
    }

    queryTopics(q) {
        return queryTopics(q);
    }

    queryTopicIndicators(q) {
        let topicId = this.store.get('topic.id');
        if (!topicId)
            return [];
        return queryTopicIndicators(topicId, q);
    }

    queryCountries(q) {
        return queryCountries(q);
    }
}