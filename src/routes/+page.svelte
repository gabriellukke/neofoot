<script lang="ts">
  import Button from "../lib/components/ui/button/button.svelte";
  async function handleNewGame() {}
  async function handleLoadGame() {}
  async function handleSettings() {}
  async function handleQuit() {}


</script>

<main class="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-10 px-6 py-12">
  <header class="text-center">
    <h1 class="text-4xl font-bold tracking-tight text-foreground">Neofoot</h1>
  </header>

  <nav aria-label="Main menu" class="w-full max-w-sm">
    <ul class="flex flex-col gap-3">
      <li>
        <Button class="w-full justify-start" onclick={handleNewGame}>New Game</Button>
      </li>
      <li>
        <Button class="w-full justify-start" onclick={handleLoadGame}>Load Game</Button>
      </li>
      <li>
        <Button class="w-full justify-start" onclick={handleSettings}>Settings</Button>
      </li>
      <li>
        <Button variant="destructive" class="w-full justify-start" onclick={handleQuit}>Quit</Button>
      </li>
    </ul>
  </nav>

  <footer class="text-xs text-muted-foreground">v0.1.0</footer>
</main>
