<template>
  <div class="post-content" v-html="html" />
</template>

<script>
  export default {
    props: {
      html: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss">
  .post-content {
    h1, h2, h3, h4, h5, h6 {
      margin: revert;
    }

    h1 {
      font-size: 2em;
    }

    h2 {
      font-size: 1.5em;
    }

    h3 {
      font-size: 1.17em;
    }

    h4 {
      font-size: 1em;
    }

    h5 {
      font-size: 0.83em;
    }

    h6 {
      font-size: 0.67em;
    }

    a {
      text-decoration: underline;
    }

    p {
      margin-bottom: map-get($gaps, 3);
    }

    pre {
      border-radius: $border-radius;
      white-space: pre-wrap;
      margin-bottom: 4px;
      margin-top: 4px;
      padding: 8px;
      background-color: $color-accent;
      color: $color-white;
      overflow: visible;
    }

    code {
      background-color: #f0f0f0;
      border-radius: $border-radius;
      font-size: 85%;
      padding: 2px 4px;
    }

    blockquote {
      border-left: 4px solid $color-grey;
      margin-bottom: 4px;
      margin-top: 4px;
      padding-left: 16px
    }

    img {
      width: 100%;
    }

    ol,
    ul {
      padding-left: 1.5em;
    }

    ul > li {
      list-style-type: disc;
      margin-bottom: 4px;
    }

    .ql-align-center {
      text-align: center;
    }

    .ql-align-right {
      text-align: right;
    }

    .ql-align-justify {
      text-align: justify;
    }
  }
</style>
