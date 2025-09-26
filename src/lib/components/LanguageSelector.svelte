<script lang="ts">
  import { locale, locales } from 'svelte-i18n';

  const supportedLocales = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
  ];

  function handleLanguageChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    locale.set(target.value);
  }
</script>

<div class="flex items-center gap-2">
  <select
    bind:value={$locale}
    on:change={handleLanguageChange}
    class="bg-background border-border text-foreground focus:ring-ring rounded border px-2 py-1 text-sm focus:ring-2 focus:outline-none"
  >
    {#each supportedLocales as lang}
      <option value={lang.code} selected={$locale === lang.code}>
        {lang.flag}
        {lang.name}
      </option>
    {/each}
  </select>
</div>
