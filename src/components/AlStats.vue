<template>
  <p class="o-40">{{hits}} hits in {{time}}ms</p>
</template>

<script>
export default {
  props: {
    hits: Number,
    time: Number,
  }
}
</script>
