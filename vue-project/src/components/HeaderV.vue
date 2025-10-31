<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="../../public/images/logomabymini2.png" alt="Logo les clés de Maby" class="logo">
      </div>

      <button class="menu-toggle" @click="toggleMenu">
        <span :class="{ open: isOpen }">&#9776;</span>
      </button>

      <nav :class="['nav-links', { open: isOpen }]">
        <router-link to="/" @click="closeMenu">Accueil</router-link>
        <router-link to="/hebergements" @click="closeMenu">Les hébergements</router-link>
        <router-link to="/services" @click="closeMenu">Les services</router-link>
        <router-link to="/contact" @click="closeMenu">Contact & Tarifs</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => { isOpen.value = !isOpen.value }
const closeMenu = () => { isOpen.value = false }
</script>

<style scoped>
/* === HEADER GENERAL === */
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.container {
  width: 100%;
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logo {
  width: 290px;
  height: 110px;
}

/* === NAVIGATION === */
.nav-links {
  display: flex;
  gap: 2.9rem;
}

.nav-links a {
  font-size: 30px;
  text-decoration: none;
  color: #004aad;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #004aad;
}

/* === MENU TOGGLE MOBILE === */
.menu-toggle {
  display: none;
  font-size: 26px;
  background: none;
  border: none;
  cursor: pointer;
}

/* === RESPONSIVE === */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.5rem;
    display: none;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    padding: 0.5rem 0;
    width: 100%;
  }
}
</style>
