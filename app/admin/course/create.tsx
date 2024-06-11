import { Create, SimpleForm, TextInput, required } from "react-admin";

export const CourseCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} label="Title" />
        <TextInput source="ImageSrc" validate={[required()]} label="Image" />
      </SimpleForm>
    </Create>
  );
};
