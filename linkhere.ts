import { editor,index } from "$sb/silverbullet-syscall/mod.ts";
import { store } from "$sb/plugos-syscall/mod.ts";

export async function getRef() {
  const cp = await editor.getCursor();
  const name = await editor.getCurrentPage();
  alias = await editor.prompt(
      "Please enter an alias for the link (or cancel for none):",
  );
  if (alias) {
     store.set("refs.current", `${name}@${cp}|${alias}`);
  } else {
     store.set("refs.current", `${name}@${cp}`);
  }
}

export async function insertRef() {
  const ref = await store.get("refs.current");
  await store.del("refs.current");
  await editor.insertAtCursor(`[[${ref}]]`);
}

