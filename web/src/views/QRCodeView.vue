<template>
  <div class="qrcode">
    <div>Smart Health Card</div>
    <small>Scan with your app</small>
    <img :src="link" alt="qrcode" class="qrcode-img" />
  </div>
</template>

<script>
export default {
  name: "QRCodeView",
  computed: {
    link() {
      return `/v1/qr?jws=${this.$route.query.jws}`;
    },
  },
  mounted() {
    console.log(this.$route.query.jws);
  },
};
</script>

<style lang="scss" scoped>
.qrcode {
  @apply flex flex-col w-fit h-fit justify-center;
  .qrcode-img {
    @apply w-full;
  }
}
</style>
