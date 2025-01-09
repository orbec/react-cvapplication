export default function Main() {
  return (
    <main>
      <section>
        <h2>Personal Information</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" required />
        </form>
      </section>
    </main>
  );
}
