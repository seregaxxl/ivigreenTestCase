<template>
    <footer>
        <div class="footer-links">
            <div class="terms">
                <a href="" class="terms-link">Term of use</a>
            </div>
            <div class="email">hello@ivigreen.com</div>
        </div>
    </footer>
</template>

<style scoped>
.footer-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px;
    margin: 0;
}
.terms-link, .email{
    text-decoration: underline;
    color: #3E468F;
    font-weight: 500;
}
.terms-link:hover {
        background-color: transparent ;
  }
  @media (min-width: 768px) {
    footer {
        height: 94px;
    }
  .footer-links {
    width: 80vw;
    max-width: 80vw;
    margin: 0 auto;
    padding: 0;
    height: 94px;
  }
  .terms-link, .email{
    font-size: 20px;
}
  }
</style>