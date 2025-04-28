<template>
    <div>
<figure v-for="(item, i) in images" :key="i">
   <img  class="images" :src="(`/img/${item}.jpg`)">
   </figure>
</div>
</template>

<script>
export default {
    data() {
        return {
            images: ['Beach + Rock', 'dark Landscape', 'Night + Silence']
            
        }
    }
}

</script>

<style scoped>

.images {
   width: 10%;
   border-radius: 5px;
   transition: transform 0.5s ease;
   margin: 5px;
   cursor: pointer;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
   background-image: url('https://www.google.com/imgres?imgurl=https%3A%2F%2Fe0.pxfuel.com%2Fwallpapers%2F406%2F349%2Fdesktop-wallpaper-abstract-nature-mountain-abstract-thumbnail.jpg&tbnid=ZZdic3FgTyk4rM&vet=10CBQQxiAoBmoXChMIwOmlrNHujAMVAAAAAB0AAAAAEA8..i&imgrefurl=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fquery%3Fq%3Dnature&docid=M1v3VK96UaE71M&w=350&h=197&itg=1&q=wallpaper%20for%20pc&ved=0CBQQxiAoBmoXChMIwOmlrNHujAMVAAAAAB0AAAAAEA8');
   &:hover {
     transform: scale(1.55);
     margin-bottom: 5px;

   }
}
head{
    background-color: #f2f2f2;
    padding: 20px;
    text-align: center;
}
</style>