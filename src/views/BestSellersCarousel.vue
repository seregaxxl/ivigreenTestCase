<template>
    <section class="bestsellers-carousel-section">
        <h2 class="title">OUR BESTSELLERS</h2>
        <BaseCarousel v-if="itemsPerSlide === 1" :length="items.length" :inactiveColor="'white'" :inactiveOpacity="1" :itemsPerSlide="itemsPerSlide">
            <div
            v-for="(item, index) in items"
            :key="index"
            :style="{
                minWidth: itemsPerSlide === 2 ? 'calc(50% - 12px)' : '100%',
                flexShrink: 0
            }"
            class="carousel-item"
            >
                <div v-if="(item.bundle)" class="inner-carousel">
                    <BaseCarousel :length="item.bundleImgs.length" :inactiveColor="'white'" :inactiveOpacity="1" :dotsPosition="'inside'">
                        <div
                        v-for="(subItem, subIndex) in item.bundleImgs"
                        :key="subIndex"
                        class="carousel-subitem"
                        >
                            <div class="img-container">
                                <img :src="item.bundleImgs[subIndex]" alt="Item" class="carousel-image" />
                            </div>
                        </div>
                    </BaseCarousel>

                </div>
                <div v-if="!item.bundle" class="img-container">
                    <img :src="item.image" alt="Item" class="carousel-image" />
                </div>
                <div class="price">
                    <span class="new-price">${{item.price}}</span><span class="old-price">${{item.originalPrice}}</span><span class="discount">{{item.discount}}% off</span>
                </div>
                <div class="item-title">
                   <span class="bundle-title">{{item.bundleTitle ? item.bundleTitle.toUpperCase() : ''}}</span> <span class="item-title">{{item.title}}</span>  
                </div>
                <div class="item-description">
                    {{item.description}}
                </div>
                <button class="add-button">Add to Cart</button>
            </div>
        </BaseCarousel>
        <TwoItemsCarousel v-if="itemsPerSlide == 2" :length="items.length" >
            <div
            v-for="(item, index) in items"
            :key="index"
            class="carousel-item"
            :style="{
                minWidth: itemsPerSlide === 2 ? 'calc(50% - 12px)' : '100%',
                flexShrink: 0
            }"
            >
                <div class="img-container">
                    <img :src="item.image" alt="Item" class="carousel-image" />
                </div>
                <div class="price">
                    <span class="new-price">${{item.price}}</span><span class="old-price">${{item.originalPrice}}</span><span class="discount">{{item.discount}}% off</span>
                </div>
                <div class="item-title">
                   <span class="bundle-title">{{item.bundleTitle ? item.bundleTitle.toUpperCase() : ''}}</span> <span class="item-title">{{item.title}}</span>  
                </div>
                <div class="item-description">
                    {{item.description}}
                </div>
                <button class="add-button">Add to Cart</button>
            </div>
        </TwoItemsCarousel>
        <button class="show-all">
            <span class="button-text">Show all</span> <img :src="arrow" alt="arrow">
        </button>
    </section>
  </template>
    
<script setup>
    import { ref, onMounted } from 'vue'
    import BaseCarousel from '../components/BaseCarousel.vue'
    import TwoItemsCarousel from '../components/TwoItemsCarousel.vue'
    import img1 from '../assets/images/bestSellersCarousel/Image.png'
    import img2 from '../assets/images/bestSellersCarousel/Image(1).png'
    import img3 from '../assets/images/bestSellersCarousel/Image(2).png'
    import img4 from '../assets/images/bestSellersCarousel/Image(3).png'
    import img5 from '../assets/images/bestSellersCarousel/Image(4).png'
    import img6 from '../assets/images/bestSellersCarousel/Image(5).png'
    import img7 from '../assets/images/bestSellersCarousel/Image(6).png'
    import img8 from '../assets/images/bestSellersCarousel/Image(7).png'
    import arrow from '../assets/images/bestSellersCarousel/icons/arrow.svg'


    
    const itemsPerSlide = ref(1)

    const items = ref([
        { image: img1, price:19.99, originalPrice:39.99, discount: 50, title: 'RELATIONSHIPS FOR TEENS AND TWEENS', description: 'Equip your teens with the necessary self-confidence, enabling them to cultivate healthy relationship habits for their happiness', bundle:false },
        { image: img2, price:19.99,originalPrice:39.99, discount: 50, title: 'EMOTIONS FOR TEENS AND TWEENS ', description: 'Help your teens deal with anger, fear, and anxiety. Give them tools to manage their emotional self', bundle:false },
        { image: img3, price:19.99,originalPrice:39.99, discount: 50, title: 'LIFE SKILLS 101 FOR TEENS AND TWEENS', description: 'Empower your teen with essential self-development skills and enhanced emotional intelligence and help them put these skills to use!', bundle:true, bundleTitle:'Bundle 4 in 1:', bundleImgs:[img1, img2, img3, img6] },
        { image: img4, price:19.99,originalPrice:39.99, discount: 50, title: 'LIFE SKILLS 101 + EMOTIONS FOR TEENS AND TWEENS', description: 'Empower your child with essential self-development skills and enhanced emotional intelligence!', bundle:true, bundleTitle:'Bundle 2 in 1:', bundleImgs:[img1, img2] },
        { image: img5, price:19.99,originalPrice:39.99, discount: 50, title: 'WORKBOOK BASED ON THE BOOK «EMOTIONS FOR TEENS AND TWEENS»', description: 'Help your teenager handle their emotions well!', bundle:false },
        { image: img6, price:19.99,originalPrice:39.99, discount: 50, title: 'WORKBOOK «MY RELATIONSHIPS» FOR TEENS AND TWEENS', description: 'Assist your teen in developing the skill of building genuine relationships!', bundle:false },
        { image: img7, price:19.99,originalPrice:39.99, discount: 50, title: 'WORKBOOK BASED ON THE BOOK «LIFE SKILLS 101»', description: 'With 80+ engaging exercises for teens and twins to practice life skills', bundle:false },
        { image: img8, price:19.99,originalPrice:39.99, discount: 50, title: '+100 SELF-LOVE PRACTICES FOR YOUNG ADULTS', description: 'Start your journey of self-love and happiness today without having to change everything about your life!', bundle:false },
    ])
    onMounted(() => {
  if (window.innerWidth >= 768) {
    itemsPerSlide.value = 2
  }
})


</script>
    
  
<style scoped>
    .bestsellers-carousel-section {
        padding: 40px 16px;
        background: #3E468F;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title {
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 20px;
        color: white;
    }

    .carousel-item {
        width: 343px;
        height: 538px;
        background: white; 
        border-radius: 16px;
        padding: 16px;
    }
    .img-container {
        width: 311px;
        height: 193px;
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
        background: #E8E8ED; 
        border-radius: 8px;
        overflow: hidden;
    }
    .carousel-image {
        object-fit: contain;
        border-radius: 8px;
    }
    .price {
        margin-bottom: 16px;
    }
    .new-price{
        color: #3E468F;
        font-size: 20px;
        font-weight: 500;
        margin-right: 16px;
    }
    .old-price{
        color: #2C2C2C;
        opacity: 60%;
        font-size: 16px;
        font-weight: 500;
        text-decoration: line-through;
        margin-right: 16px;
    }
    .discount{
        color: white;
        font-size: 16px;
        font-weight: 500;
        padding: 4px 10px 4px 10px;
        background: #F26B39;
        border-radius: 8px;
    }
    .item-title {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 8px;
        color: #2C2C2C;
        .bundle-title {
            color: #F26B39;
            font-weight: 500;
        }
    }
    .item-description {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 24px;
        color: #2C2C2C;
    }
    .add-button {
        background: #32CD7A;
        color: white;
        font-size: 16px;
        font-weight: 700;
        padding: auto;
        border: none;
        width: 311px;
        height: 56px;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease; 
        transform: translateY(0);
    }
    .add-button:hover {
        background: #16a34a;
        transform: translateY(3px);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
    }
    .show-all {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 26px;
    }
    .button-text {
        color: white;
        font-size: 16px;
        font-weight: 700;
        margin-right: 8px;
    }
    @media (min-width: 1440px)  {
        .bestsellers-carousel-section {
            padding: 100px 140px;
            background: #3E468F;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .title {
            font-size: 40px;
            margin-bottom: 32px;  
        }
        .carousel-item {
            min-width: none;
            width: 464px;
            height: 701px;
            display: flex;
            padding: 24px;
            flex-direction: column;
        }
        .show-all {
            margin-top: 0px;
        }
        .img-container{
            width: 416px;
            height: 256px;
        }
        .new-price{
            font-size: 28px;
        }
        .old-price{
            font-size: 20px;
        }
        .discount{
            font-size: 20px;
        }
        .item-title {
            font-size: 28px;
        }
        .item-description {
            font-size: 20px;
        }
        .add-button{
            margin-top: auto;
            width: 416px;
        }
        .show-all {
            margin-top: 32px;
        }
        .button-text {
            font-size: 20px;
        }
    }
</style>
    