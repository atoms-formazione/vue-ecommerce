<template>
  <div class="login">
    <a href="login">Login</a>
    <button>Register</button>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1.5rem;
}
button {
  color: #ffffff;
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 18px;
gap: 10px;

width: 102px;
height: 40px;

/* Green */
border-color: #3C9379;
background: #3C9379;
border-radius: 8px;
  cursor: pointer;
}
.login>a{
  text-decoration: none;
  width: 43px;
height: 16px;

font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 16px;
/* identical to box height, or 100% */

letter-spacing: 0.3px;

/* Black */

color: #101913;
;
}
</style>
