<template><span class="info-row"></span></template>

<style scoped >
  .info-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    row-gap: 0;
    & span {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    & p {
      margin: 0;
      display: flex;
      align-items: center;
      text-align: center;
      gap: 10px;
    }
  }
</style>