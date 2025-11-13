import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Définition du schema Zod
const contactSchema = z.object({
  prenom: z
    .string()
    .nonempty("Le prénom est obligatoire")
    .regex(/^\p{L}+$/u, "Caractères invalides"),

  nom: z
    .string()
    .nonempty("Le nom est obligatoire")
    .regex(/^\p{L}+$/u, "Caractères invalides"),

  sexe: z
    .string()
    .nullable()
    .refine((val) => ["Homme", "Femme"].includes(val), {
      message: "Le sexe est obligatoire",
    }),

  age: z
    .string()
    .nonempty("L'âge est obligatoire") // message pour vide
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
      message: "Age invalide",
    }),

  mail: z
    .string()
    .nonempty("Le mail est obligatoire")
    .email("Format d'mail invalide"),

  password: z
    .string()
    .min(6, "Minimum 6 caractères")
    .max(20, "Maximum 20 caractères")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
      "Doit contenir une minuscule, une majuscule, un chiffre et un caractère spécial"
    ),

  message: z
    .string()
    .min(20, "Minimum 20 caractères")
    .max(200, "Maximum 200 caractères"),
});

const ContactFormWithZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // transmission vers le backend ou autre traitement
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <label className="form-label">Prénom</label>
        <input type="text" className="form-control" {...register("prenom")} />
        {errors.prenom && (
          <p className="text-danger fs-5">{errors.prenom.message}</p>
        )}
      </div>

      <div className="mb-2">
        <label className="form-label">Nom</label>
        <input type="text" className="form-control" {...register("nom")} />
        {errors.nom && <p className="text-danger fs-5">{errors.nom.message}</p>}
      </div>

      <div className="mb-2">
        <div className="form-check">
          <input
            className="form-check-input"
            {...register("sexe")}
            type="radio"
            value="Homme"
          />
          <label className="form-check-label">Homme</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            {...register("sexe")}
            type="radio"
            value="Femme"
          />
          <label className="form-check-label">Femme</label>
        </div>
        {errors.sexe && (
          <p className="text-danger fs-5">{errors.sexe.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Age</label>
        <input type="number" className="form-control" {...register("age")} />
        {errors.age && <p className="text-danger fs-5">{errors.age.message}</p>}
      </div>

      <div className="mb-3">
        <label className="form-label">Addresse mail</label>
        <input type="email" className="form-control" {...register("mail")} />
        {errors.mail && (
          <p className="text-danger fs-5">{errors.mail.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Mot de passe</label>
        <input
          type="password"
          className="form-control"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-danger">{errors.password.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea
          className="form-control"
          rows="3"
          {...register("message")}
        ></textarea>
        {errors.message && (
          <p className="text-danger">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary mt-4 ps-5 pe-5">
        Envoyer
      </button>
      <button type="reset" className="btn btn-danger ms-5 mt-4 ps-4 pe-4">
        Réinitialiser
      </button>
    </form>
  );
};

export default ContactFormWithZod;
