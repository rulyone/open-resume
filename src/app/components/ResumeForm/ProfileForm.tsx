import { BaseForm } from "components/ResumeForm/Form";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import { useAppDispatch, useAppSelector } from "lib/redux/hooks";
import { changeProfile, selectProfile } from "lib/redux/resumeSlice";
import { ResumeProfile } from "lib/redux/types";

export const ProfileForm = () => {
  const profile = useAppSelector(selectProfile);
  const dispatch = useAppDispatch();
  const { name, email, phone, url, summary, location, url_github, url_linkedin } = profile;

  const handleProfileChange = (field: keyof ResumeProfile, value: string) => {
    dispatch(changeProfile({ field, value }));
  };

  return (
    <BaseForm>
      <div className="grid grid-cols-6 gap-3">
        <Input
          label="Nombre"
          labelClassName="col-span-full"
          name="name"
          placeholder="Juan Perez"
          value={name}
          onChange={handleProfileChange}
        />
        <Textarea
          label="Resumen"
          labelClassName="col-span-full"
          name="summary"
          placeholder="Emprendedor y educador obsesionado con hacer que la educación sea accesible para todos."
          value={summary}
          onChange={handleProfileChange}
        />
        <Input
          label="Email"
          labelClassName="col-span-4"
          name="email"
          placeholder="juanperez@fullstackarchitect.dev"
          value={email}
          onChange={handleProfileChange}
        />
        <Input
          label="Teléfono"
          labelClassName="col-span-2"
          name="phone"
          placeholder="+56999999999"
          value={phone}
          onChange={handleProfileChange}
        />
        <Input
          label="Website"
          labelClassName="col-span-4"
          name="url"
          placeholder="https://resume.fullstackarchitect.dev"
          value={url}
          onChange={handleProfileChange}
        />
        <Input
          label="Ubicación"
          labelClassName="col-span-2"
          name="location"
          placeholder="Santiago, Chile"
          value={location}
          onChange={handleProfileChange}
        />
        <Input
          label="Git Projects"
          labelClassName="col-span-3"
          name="url_github"
          placeholder="https://github.com/username"
          value={url_github}
          onChange={handleProfileChange}
        />
        <Input
          label="Linkedin"
          labelClassName="col-span-3"
          name="url_linkedin"
          placeholder="https://www.linkedin.com/in/user_profile/"
          value={url_linkedin}
          onChange={handleProfileChange}
        />

      </div>
    </BaseForm>
  );
};
