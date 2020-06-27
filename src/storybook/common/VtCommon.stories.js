import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VtCommon from '@common/VtCommon'

storiesOf('Common', module)
  .addDecorator(withKnobs)
  .add('VtCommon', () => ({
    components: { VtCommon },
    template: '<VtCommon />',
    methods: { action: action('clicked') }
  }))
