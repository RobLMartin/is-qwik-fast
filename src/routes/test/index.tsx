import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      Test
      <Link class="mindblow" href="/test/nested">
        nested
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik Test",
};
