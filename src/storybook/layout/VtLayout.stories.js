import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VtLayout from '@layout/VtLayout'

storiesOf('Layout', module)
  .addDecorator(withKnobs)
  .add('VtLayout', () => ({
    components: { VtLayout },
    template: '<VtLayout />',
    methods: { action: action('clicked') }
  }))
