import React from "react";

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

    const formSuccess = document.querySelector("#formSuccess");
    if (res.success) {
      console.log("Success", res);
      const elementSuccess = document.createElement("h3");
      elementSuccess.textContent = "Enviado ✨"
      formSuccess?.appendChild(elementSuccess);
    }
  };

  return (
    <section className="contact-container" id="contact">
      <h1 className="skills-title">Entre em contato por aqui <i className="bi bi-arrow-down"></i></h1>
      <form className="form-styled" id="form" onSubmit={onSubmit}>
        <h4>Nome:</h4>
        <input className="input" type="text" name="name" placeholder="Enter your name" required/>
        <h4>Email:</h4>
        <input className="input" type="email" name="email" placeholder="Enter your email" required/>
        <h4>Mensagem:</h4>
        <textarea className="input" name="message" placeholder="Enter your message" required></textarea>
        <div id="formSuccess">

        </div>
        <button className="input" type="submit" title="Submit for sent an email">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
