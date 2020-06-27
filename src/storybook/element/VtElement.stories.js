import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VtElement from '@element/VtElement'

storiesOf('Element', module)
  .addDecorator(withKnobs)
  .add('VtElement', () => ({
    components: { VtElement },
    template: '<VtElement />',
    methods: { action: action('clicked') }
  }))
