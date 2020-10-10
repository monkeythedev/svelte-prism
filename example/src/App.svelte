<script lang="ts">
  import Prism from "svelte-prism";
  import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
</script>

<style>
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .code {
    border: 1px #000 solid;
    padding: 2em;
  }
</style>

<main>
  <div class="code">
    <Prism language="html" cleanSrc transform={(src) => window.Prism.plugins.NormalizeWhitespace.normalize(src)}>
      {`
        <header>
          <h1>Hello World!</h1>
        </header>
      `}
    </Prism>
  </div>
</main>
