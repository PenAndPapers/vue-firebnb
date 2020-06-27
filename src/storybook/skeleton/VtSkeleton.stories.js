import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import VtSkeleton from '@skeleton/VtSkeleton'

storiesOf('Skeleton', module)
  .addDecorator(withKnobs)
  .add('VtSkeleton', () => ({
    components: { VtSkeleton },
    template: '<VtSkeleton />',
    methods: { action: action('clicked') }
  }))
