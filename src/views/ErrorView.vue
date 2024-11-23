<template>
  <div class="flex items-center justify-center h-screen">
    <div class="text-center px-4">
      <h1 class="text-9xl font-bold leadnin-none mb-4 text-heading-100">404</h1>
      <p class="mb-3 text-xl font-bold text-heading-100">
        Oops, The page you are looking for is not available.
      </p>
      <p class="max-w-[400px] w-full mx-auto mb-10">
        We are sorry for the inconvenience, The page you are trying to access has been removed or
        never been existed.
      </p>
      <RouterLink :to="{ name: 'dashboard' }" class="button primary-button">
        Back to dashboard
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {}
</script>
