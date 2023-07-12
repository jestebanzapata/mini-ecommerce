'use client'
export default function ProductPage() {

  const throwError = () => {
    throw new Error('Error test');
  }

  return (
    <main>

      <h2>Products</h2>

      <ul>
        <li>
          producto 1
        </li>
        <li>
          producto 2
        </li>
      </ul>
      <button onClick={throwError}>Launch Error</button>
    </main>
  )
}
