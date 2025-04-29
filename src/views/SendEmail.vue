
<template>
    <section class="send-email">
      <div class="card">
        <p class="card-text">
            Drop your email to receive complimentary printables for your teens
        </p>
        <div class="input-email-container">
            <input type="text" placeholder="Enter your E-mail" class="input-email">
            <button class="btn-email">Get for free</button>
        </div>
        <p class="consent">By giving us your e-mail, you agree to our <a href="" class="privacy-policy">privacy policy</a></p>
      </div>
    </section>
  </template>
  
  <style scoped>
  .send-email {
    padding: 48px 16px 0px 16px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .card {
    background: #3E468F;
    padding: 24px 16px;
    border-radius: 16px;
    width: 100%;
    max-width: 343px;
  }
  .card-text {
    font-size: 20px;
    color: white;
    text-align: center;
    line-height: 1.4;
    font-weight: 400;

  }
  .input-email {    
    margin-top: 32px;
    width: 311px;
    height: 56px;
    border-radius: 8px;
    border: none;
    padding: 16px;
    font-size: 16px;
    font-weight: 500;
    color: #2C2C2C;
    font-family: Poppins;
    }
  .btn-email {
    margin-top: 24px;
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
    .btn-email:hover {
    background: #16a34a;
    transform: translateY(3px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); 
}
.consent{
    margin-top: 16px;
    color: white;
    text-align: center;
    font-size: 12px;
}
  .privacy-policy:hover {
        background-color: transparent ;
  }
@media (min-width: 768px) {
    .input-email-container {
      display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin-top: 32px;
    }
    .card {
        width: 80vw;
        max-width: 80vw;
        margin: 0 auto;
        padding-bottom: 60px;
    }
    .card-text {
        font-size: 28px;
    }
    .input-email {
        width: 100%;
        max-width: 467px;
        margin-top: 0;
        font-size: 20px;
    }
  .btn-email {
      width: 100%;
      max-width: 280px;
      margin-top: 0;
      font-size: 20px;
  }
  .consent{
    font-size: 16px;
}

  }
  </style>
  