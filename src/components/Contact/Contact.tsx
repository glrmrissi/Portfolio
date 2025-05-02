const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "9a13c2fc-c80f-4a39-a89a-7a3d8bcbb030");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <section className="contact-container" id="contact">
      <form className="form-styled" onSubmit={onSubmit}>
        <h4>Nome:</h4>
        <input className="input" type="text" name="name" placeholder="Enter your name" required/>
        <h4>Email:</h4>
        <input className="input" type="email" name="email" placeholder="Enter your email" required/>
        <h4>Mensagem:</h4>
        <textarea className="input" name="message" placeholder="Enter your message" required></textarea>
        <button className="input" type="submit">Submit Form</button>
      </form>
    </section>
  );
};

export default Contact;
