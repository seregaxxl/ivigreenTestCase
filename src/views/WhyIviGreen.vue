<script setup>
</script>
<template>
    <section class="why-ivi-green">
      <h2 class="title">WHY IVI GREEN?</h2>
  
      <div class="stats">
        <div class="stat">
          <div class="number">40 000+</div>
          <div class="description">products sold all around the world</div>
        </div>
        <div class="stat">
          <div class="number">1 000+</div>
          <div class="description">teachers use Ivi Green products</div>
        </div>
        <div class="stat">
          <div class="number">30+</div>
          <div class="description">countries use our toolkits<br>to effectively teach</div>
        </div>
      </div>
  
      <div class="card">
        <h3 class="card-title purple">The challenges teachers are facing</h3>
        <p class="card-text">
          Teachers often face the challenge of spending extensive time searching for quality materials for their classes while students frequently approach them with more and more questions about their emotions, conflicts, self-organization methods, and family or friend relationships. The pandemic has exacerbated social-emotional problems among kids, making SEL one of the priorities for the school curriculum. Now even teachers specializing in subjects like math or language art need to incorporate social-emotional basics into their instructions.
        </p>
      </div>
  
      <div class="card">
        <h3 class="card-title blue">Our solution</h3>
        <p class="card-text">
          Our toolkits provide teachers with practical, visual, science-based resources to effectively teach social and emotional learning to teens. Designed to enhance emotional intelligence and build resilience, Ivi Green educational toolkits offer structured activities, comprehensive guidelines, and ready-to-use materials that cater to the unique developmental needs of adolescents. Educators can foster a supportive learning environment that promotes emotional well-being and academic success by integrating these tools into their teaching.
        </p>
      </div>
  
      <button class="green-button">Show all kits</button>
    </section>
  </template>
  
  <style scoped>
  .why-ivi-green {
    padding: 40px 16px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .title {
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
  }
  
  .stats {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
    width: 100%;
    max-width: 343px;
  }
  
  .stat {
    text-align: center;
  }
  
  .number {
    color: #32CD7A;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  
  .description {
    font-weight: 500;
    font-size: 16px;
    color: #2C2C2C;
  }
  
  .card {
    background: #E8E8ED;
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 24px;
    width: 100%;
    max-width: 343px;
  }
  
  .card-title {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 16px;
  }
  
  .card-title.purple {
    color: #3E468F;
  }
  
  .card-title.blue {
    color: #3E468F;
  }
  
  .card-text {
    font-size: 14px;
    color: #2C2C2C;
    line-height: 1.5;
  }
  
  .green-button {
    background: #32CD7A;
    color: white;
    font-size: 16px;
    font-weight: 700;
    padding: auto;
    border: none;
    width: 343px;
    height: 56px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease; 
    transform: translateY(0);
  }
  
  .green-button:hover {
    background: #16a34a;
    transform: translateY(3px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
  }
  </style>
  