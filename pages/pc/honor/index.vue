<template>
  <header>
    <div class="header_bg">
    </div>
  </header>
  <div class="tittle">
    <h1>HONORS AND QUALIFICATIONS</h1>
    <h2>荣誉资质</h2>
  </div>

  <div class="product_list"  >
    <ul ref="waterRef">
      <!-- <li v-for="(item, key) in productList" :key="key">
        <div class="img_container" @click="goIntroduce(item.product)">
        </div>
        <p>{{ item.name }}</p>
      </li> -->
    </ul>
  </div>
</template>

<script lang="ts" setup>


const router = useRouter()

const goIntroduce =(name: string) => {
  router.push({
    path: '/product/introduce',
    query:{
      product: name
    }
  })
}
</script>

<style lang="less" scoped>
header {
  width: 100%;
  height: 300px;
}

.header_bg {
  width: 100%;
  height: 100%;
  background-image: url('@/assets/images/product/bg.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 20%;
  filter: brightness(0.8) grayscale(1);
}

.tittle {
  margin-top: 100px;

  h1,
  h2 {
    width: 100%;
    text-align: center;
    line-height: 50px;
  }
}

.product_list {
  margin: 50px 0;
  width: 100%;
  text-align: center;

  ul {
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      margin-bottom: 30px;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        margin-top: -5px;
        box-shadow: 0 3px 6px 0 rgb(0 0 0 / 12%);
      }
      .img_container {
        width: 300px;
        height: 300px;
        padding: 35px ;
        background-color: #f7f8f9;
      }
      p {
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        letter-spacing: 3px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>