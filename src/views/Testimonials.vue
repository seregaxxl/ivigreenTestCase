<script setup>
</script>
<template>
    <section class="testimonials">
      <h2 class="title">TESTIMONIALS</h2>
      <div class="card">
        <p class="card-text">
            I find these materials incredibly useful for my 7th-grade classroom. They provide clear, age-appropriate activities and explanations that engage students in discussions about their emotions, including mood swings, during classroom discussions. The resources are easy to integrate into my lessons, and I've already noticed a positive shift in my students' self-awareness. I highly recommend them to any educator looking to enhance their SEL instruction.
        </p>
        <p class="author"> Jennifer Carter, Private School Teacher</p>
      </div>
  
      <div class="card">
        <p class="card-text">
            This kit for teachers is an exceptional resource. The presentation and instructions are well-structured and easy to follow, making it straightforward to deliver engaging lessons. The handouts are practical and provide students with valuable tools for real-life situations.
        </p>
        <p class="author">Michael Thompson, School Counselor</p>
      </div>

      <div class="card purple">
        <p class="card-text purple">
            “What I appreciate most is that the materials don’t just focus on solving problems, but also on building stronger connections with other students, parents, and the community itself. The illustrations are also helpful and make a lot more sense compared to a textbook.”
        </p>
        <p class="author purple">Irene, Homeschooling Parent</p>
      </div>
  
    </section>
  </template>
  
  <style scoped>
  .testimonials {
    padding: 48px 16px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .title {
    font-weight: 700;
    font-size: 28px;
    text-align: center;
    margin-bottom: 24px;
  }

  
  .card {
    background: #E8E8ED;
    padding: 24px 16px;
    border-radius: 16px;
    margin-bottom: 16px;
    width: 100%;
    max-width: 343px;
    .purple {
        color: white;
    }
  }
  .card.purple {
    background: #3E468F;
  }
  
  .card-text {
    font-size: 16px;
    color: #2C2C2C;
    line-height: 1.4;
    font-weight: 400;
  }

  .author {
    font-size: 16px;
    color: #2C2C2C;
    opacity: 60%;
    font-weight: 400;
  }
  .author.purple {
    color: white;
    opacity: 60%;
  }
  </style>
  