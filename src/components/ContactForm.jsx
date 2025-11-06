import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit()}>
      <div class="mb-2">
        <label class="form-label">Prénom</label>
        <input
          type="text"
          class="form-control"
          {...register("prenom", { required: "Le prénom est obligatoire" })}
        />
        {errors.prenom && (
          <p className="text-danger fs-5">{errors.prenom.message}</p>
        )}
      </div>
      <div class="mb-2">
        <label class="form-label">Nom</label>
        <input
          type="text"
          class="form-control"
          {...register("nom", { required: "Le nom est obligatoire" })}
        />
        {errors.nom && <p className="text-danger fs-5">{errors.nom.message}</p>}
      </div>
      <div class="mb-2">
        <div class="form-check">
          <input
            class="form-check-input"
            {...register("sexe", { required: "Le sexe est obligatoire" })}
            type="radio"
            value="Homme"
          />
          <label class="form-check-label">Homme</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            {...register("sexe", { required: "Le sexe est obligatoire" })}
            type="radio"
            value="Femme"
          />
          <label class="form-check-label">Femme</label>
        </div>
        {errors.sexe && (
          <p className="text-danger fs-5">{errors.sexe.message}</p>
        )}
      </div>

      <div class="mb-3">
        <label class="form-label">Age</label>
        <input
          type="number"
          class="form-control"
          {...register("age", {
            required: "L'âge est obligatoire",
          })}
        />
        {errors.age && <p className="text-danger fs-5">{errors.age.message}</p>}
      </div>

      <div class="mb-3">
        <label class="form-label">Addresse mail</label>
        <input
          type="email"
          class="form-control"
          {...register("mail", {
            required: "L'addresse mail est obligatoire",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Format d'email invalide",
            },
          })}
        />
        {errors.mail && (
          <p className="text-danger fs-5">{errors.mail.message}</p>
        )}
      </div>

      <div class="mb-3">
        <label class="form-label">Mot de passe</label>
        <input
          type="password"
          class="form-control"
          {...register("password", {
            required: "Le mot de passe est obligatoire",
            minLength: {
              value: 6,
              message: "Minimum 6 caractères",
            },
            maxLength: {
              value: 20,
              message: "Maximum 20 caractères",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
              message:
                "Doit contenir une minuscule, une majuscule, un chiffre et un caractère spécial",
            },
          })}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </div>

      <div class="mb-3">
        <label class="form-label">Message</label>
        <textarea
          class="form-control"
          rows="3"
          {...register("message", {
            required: "Le message est obligatoire",
            minLength: {
              value: 20,
              message: "Minimum 20 caractères",
            },
            maxLength: {
              value: 200,
              message: "Maximum 200 caractères",
            },
          })}
        ></textarea>
        {errors.message && (
          <p className="text-danger">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" class="btn btn-primary mt-4 ps-5 pe-5">
        Envoyer
      </button>
      <button type="reset" class="btn btn-danger ms-5 mt-4 ps-4 pe-4">
        Réinitialiser
      </button>
    </form>
  );
};

export default ContactForm;
