<script lang="ts">
  import Button from '../lib/components/ui/button/button.svelte';
  import LanguageSelector from '../lib/components/LanguageSelector.svelte';
  import { _, isLoading } from 'svelte-i18n';

  async function handleNewGame() {}
  async function handleLoadGame() {}
  async function handleSettings() {}
  async function handleQuit() {}
</script>

{#if $isLoading}
  <div class="flex min-h-screen items-center justify-center">
    <div class="text-muted-foreground">Loading...</div>
  </div>
{:else}
  <main
    class="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-10 px-6 py-12 bg-background"
  >
    <header class="text-center">
      <h1 class="text-foreground text-4xl font-bold tracking-tight">{$_('app.title')}</h1>
    </header>

    <nav aria-label="Main menu" class="w-full max-w-sm">
      <ul class="flex flex-col gap-3">
        <li>
          <Button class="w-full justify-start" onclick={handleNewGame}>{$_('menu.newGame')}</Button>
        </li>
        <li>
          <Button class="w-full justify-start" onclick={handleLoadGame}>{$_('menu.loadGame')}</Button>
        </li>
        <li>
          <Button class="w-full justify-start" onclick={handleSettings}>{$_('menu.settings')}</Button>
        </li>
        <li>
          <Button variant="destructive" class="w-full justify-start" onclick={handleQuit}
            >{$_('menu.quit')}</Button
          >
        </li>
      </ul>
    </nav>

    <footer class="text-muted-foreground flex w-full items-center justify-between text-xs">
      <span>{$_('version')}</span>
      <LanguageSelector />
    </footer>
  </main>
{/if}
