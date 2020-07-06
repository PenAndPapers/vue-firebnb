<template>
  <div class="wysiwyg" v-html="html" />
</template>

<script>
export default {
  name: 'VtWysiwyg',
  props: {
    html: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style>
.wysiwyg {
  font-weight: 300;
}

.wysiwyg h1,
.wysiwyg h2,
.wysiwyg h3 {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

.wysiwyg p {
  font-size: 1rem;
}

.wysiwyg div,
.wysiwyg p {
  margin-bottom: 1.5rem;
}

.wysiwyg ul {
  list-style-type: disc;
  margin-left: 1rem;
  margin-bottom: 1.5rem;
}

.wysiwyg ol {
  list-style-type: decimal;
  margin-left: 1rem;
  margin-bottom: 1.5rem;
}
</style>
