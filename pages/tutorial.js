

export default function Tutorial() {
  // displays a block of code highlighted by Prism.js
  return <pre>
  <code>
  {`
    onSubmit(e) {
      e.preventDefault();
      const job = {
        title: 'Developer',
        company: 'Facebook' 
        };
      }
  `}
  </code>
</pre>
}