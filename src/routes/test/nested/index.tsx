import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      Nested
      <Link class="mindblow" href="/test">
        Go back
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Nested",
};
