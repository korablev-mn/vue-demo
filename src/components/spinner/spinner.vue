<template>
  <div class="spinner"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.spinner {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    background: transparent;
    border-left: 3px solid #31ae54;
    border-right: 3px solid #31ae54;
    border-top: 3px solid transparent;
    border-bottom: 3px solid #31ae54;
    -moz-border-radius: 50% 50% 50% 50%;
         border-radius: 50% 50% 50% 50%;
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
    animation: spin 4s linear 0s infinite;
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
}
</style>
