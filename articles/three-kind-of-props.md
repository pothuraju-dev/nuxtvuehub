# Three Kinds of Props in Vue

Source: https://michaelnthiessen.com/3-kinds-of-props  
Author: Michael Thiessen
---

* Template, Configuration and State(Data) Props
* Template Props
  * These props are used directly in the component's template and are not intended for methods or computed refs.
  * They are suitable for simple, static data that doesn't come from user input.
  * For more flexibility with dynamic content, consider using slots.
* Configuration Props
  * These props control the component's appearance or functionality. Examples include toggling features, adjusting styles, or modifying behavior.
  * They are often boolean values or enumerated types (enums) and are useful when you need to customize a component's behavior or appearance.
* State Props (or Data Props)
  * These props represent dynamic data.
  * They are essential for making components interactive and responsive to user input.
  * State props work hand-in-hand with Vue's reactivity system to keep the UI synchronized with the application's state.

 Note:
 ---
This is a brief summary of component props in Vue. For a more comprehensive explanation with examples, please refer to the original article.
