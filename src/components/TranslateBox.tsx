const TranslateBox = () => {
  return (
    <article className="translate-box">
      <section className="translate-box__section">
        <textarea
          name="input"
          id="input"
          cols={1}
          rows={4}
          placeholder="Enter text..."
        ></textarea>
      </section>
      <section className="translate-box__section">
        <textarea
          name="output"
          id="output"
          cols={1}
          rows={4}
          placeholder="Translation..."
        ></textarea>
      </section>
    </article>
  )
}

export default TranslateBox
