<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
onMounted(() => {
  //translate.ignore.tag.push('span'); //翻译时追加上自己想指定忽略的tag标签，凡是在这里面的，都不进行翻译。
//translate.ignore.class.push('test');	//翻译时指定忽略的class name，凡是class name 在这里面的，都不进行翻译。如果不设置默认只有 ignore 这一个
  translate.setAutoDiscriminateLocalLanguage();	//设置用户第一次用时，自动识别其所在国家的语种进行切换
  translate.setUseVersion2(); //设置使用v2.x 版本
  translate.execute(); //执行翻译初始化操作，显示出select语言选择
})

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - 昆易电子` : '昆易电子';
  },

  // script: [
  //   { innerHTML: 'translate.setAutoDiscriminateLocalLanguage();translate.setUseVersion2();translate.execute();', tagPosition: 'bodyClose' }
  // ]
})
</script>

<style scoped lang="scss">
</style>
